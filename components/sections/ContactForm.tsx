"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(data.message || "Správu sa nepodarilo odoslať.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Správu sa nepodarilo odoslať.",
      );
      setStatus("error");
    }
  }

  const fieldClassName =
    "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 hover:border-white/25 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-200">
          Meno
          <input
            name="name"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
            className={fieldClassName}
            placeholder="Vaše meno"
          />
        </label>

        <label className="block text-sm font-semibold text-slate-200">
          E-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className={fieldClassName}
            placeholder="vas@email.sk"
          />
        </label>
      </div>

      <label className="mt-6 block text-sm font-semibold text-slate-200">
        S čím vám môžem pomôcť?
        <textarea
          name="message"
          rows={6}
          minLength={20}
          maxLength={3000}
          required
          className={`${fieldClassName} resize-y`}
          placeholder="Stručne opíšte svoju firmu a čo má nový web vyriešiť."
        />
      </label>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Webová stránka
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03193E]"
        >
          {status === "submitting" ? "Odosielam…" : "Nezáväzne prebrať projekt"}
        </button>

        <p className="text-sm leading-6 text-slate-400">
          Odpoviem vám spravidla do 24 hodín počas pracovných dní.
        </p>
      </div>

      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "success" && (
          <p className="font-medium text-emerald-400">
            Ďakujem, správa bola odoslaná. Ozvem sa vám čo najskôr.
          </p>
        )}

        {status === "error" && (
          <p className="font-medium text-red-300">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
