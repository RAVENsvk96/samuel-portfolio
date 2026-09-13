import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(20).max(3000),
  website: z.string().max(200).optional().default(""),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { message: "Neplatný formát požiadavky." },
      { status: 415 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Neplatné údaje formulára." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Skontrolujte, prosím, vyplnené údaje." },
      { status: 400 },
    );
  }

  const { name, email, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME;

  if (!apiKey || !contactEmail || !fromEmail || !fromName) {
    console.error("Contact form environment variables are not configured.");

    return NextResponse.json(
      {
        message:
          "Formulár je dočasne nedostupný. Napíšte mi, prosím, priamo e-mail.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [contactEmail],
        reply_to: email,
        subject: `Nový dopyt z portfólia – ${name}`,
        text: `Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}`,
        html: `
          <h2>Nový dopyt z portfólia</h2>
          <p><strong>Meno:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <p><strong>Správa:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact message:", response.status);

      return NextResponse.json(
        {
          message:
            "Správu sa nepodarilo odoslať. Skúste to znova alebo použite priamy e-mail.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact message delivery failed:", error);

    return NextResponse.json(
      {
        message:
          "Správu sa nepodarilo odoslať. Skúste to znova alebo použite priamy e-mail.",
      },
      { status: 502 },
    );
  }
}
