import Image from "next/image";

export type BannerPlatform =
  | "linkedin"
  | "facebook"
  | "x"
  | "github"
  | "opengraph";

type PlatformConfig = {
  width: number;
  height: number;
  paddingX: number;
  paddingY: number;
  nameSize: number;
  roleSize: number;
  descriptionSize: number;
  logoSize: number;
  logoRight: number;
  logoBottom: number;
  contentWidth: number;
  compact?: boolean;
};

const platformConfig: Record<BannerPlatform, PlatformConfig> = {
  linkedin: {
    width: 1584,
    height: 396,
    paddingX: 104,
    paddingY: 58,
    nameSize: 52,
    roleSize: 25,
    descriptionSize: 19,
    logoSize: 300,
    logoRight: 72,
    logoBottom: -35,
    contentWidth: 720,
    compact: true,
  },

  facebook: {
    width: 1640,
    height: 624,
    paddingX: 116,
    paddingY: 86,
    nameSize: 67,
    roleSize: 30,
    descriptionSize: 23,
    logoSize: 410,
    logoRight: 88,
    logoBottom: -42,
    contentWidth: 760,
  },

  x: {
    width: 1500,
    height: 500,
    paddingX: 104,
    paddingY: 72,
    nameSize: 58,
    roleSize: 27,
    descriptionSize: 21,
    logoSize: 340,
    logoRight: 72,
    logoBottom: -38,
    contentWidth: 700,
  },

  github: {
    width: 1280,
    height: 640,
    paddingX: 92,
    paddingY: 84,
    nameSize: 62,
    roleSize: 29,
    descriptionSize: 22,
    logoSize: 380,
    logoRight: 58,
    logoBottom: -28,
    contentWidth: 650,
  },

  opengraph: {
    width: 1200,
    height: 630,
    paddingX: 88,
    paddingY: 82,
    nameSize: 60,
    roleSize: 28,
    descriptionSize: 22,
    logoSize: 370,
    logoRight: 42,
    logoBottom: -22,
    contentWidth: 610,
  },
};

type BannerLayoutProps = {
  platform: BannerPlatform;
  className?: string;
};

export default function BannerLayout({
  platform,
  className = "",
}: BannerLayoutProps) {
  const config = platformConfig[platform];

  return (
    <div
      id={`banner-${platform}`}
      data-banner={platform}
      className={`relative isolate overflow-hidden bg-[#06080d] text-white ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
      }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#06080d_0%,#080d17_48%,#07111f_100%)]" />

      {/* Main blue glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${config.width * 0.68}px`,
          height: `${config.width * 0.68}px`,
          right: `${-config.width * 0.22}px`,
          top: `${-config.width * 0.34}px`,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(29,78,216,0.15) 30%, rgba(14,165,233,0.06) 52%, transparent 72%)",
          filter: "blur(22px)",
        }}
      />

      {/* Secondary atmospheric glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${config.width * 0.54}px`,
          height: `${config.width * 0.54}px`,
          left: `${-config.width * 0.28}px`,
          bottom: `${-config.width * 0.38}px`,
          background:
            "radial-gradient(circle, rgba(79,70,229,0.13) 0%, rgba(37,99,235,0.05) 45%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to right, black 0%, black 50%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 50%, transparent 90%)",
        }}
      />

      {/* Fine noise-like texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 0.55px, transparent 0.55px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Website */}
      <div
        className="absolute z-20 flex items-center gap-3 text-white/45"
        style={{
          top: `${config.paddingY * 0.72}px`,
          right: `${config.paddingX}px`,
          fontSize: `${Math.max(15, config.descriptionSize * 0.74)}px`,
          letterSpacing: "0.045em",
        }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.85)]" />
        <span>samuelzeliska.sk</span>
      </div>

      {/* Content */}
      <div
        className="absolute z-20 flex flex-col justify-center"
        style={{
          left: `${config.paddingX}px`,
          top: `${config.paddingY}px`,
          bottom: `${config.paddingY}px`,
          width: `${config.contentWidth}px`,
        }}
      >
        {/* Small label */}
        {!config.compact && (
          <div
            className="mb-7 flex items-center gap-3 font-medium uppercase text-blue-300/70"
            style={{
              fontSize: `${Math.max(13, config.descriptionSize * 0.62)}px`,
              letterSpacing: "0.18em",
            }}
          >
            <span className="h-px w-8 bg-blue-400/60" />
            <span>Portfolio</span>
          </div>
        )}

        <h1
          className="font-bold text-white"
          style={{
            fontSize: `${config.nameSize}px`,
            lineHeight: 0.96,
            letterSpacing: "-0.052em",
            textShadow: "0 10px 42px rgba(0,0,0,0.24)",
          }}
        >
          Samuel Zelíska
        </h1>

        <div
          className="mt-5 flex items-center gap-4"
          style={{
            fontSize: `${config.roleSize}px`,
          }}
        >
          <span
            className="font-medium text-blue-300"
            style={{
              letterSpacing: "-0.025em",
            }}
          >
            Frontend Developer
          </span>

          <span className="h-1 w-1 rounded-full bg-white/25" />

          <span
            className="font-medium text-white/38"
            style={{
              fontSize: `${config.roleSize * 0.72}px`,
              letterSpacing: "0.02em",
            }}
          >
            React · Next.js · TypeScript
          </span>
        </div>

        <p
          className="text-white/55"
          style={{
            marginTop: `${config.compact ? 20 : 29}px`,
            maxWidth: `${config.contentWidth * 0.82}px`,
            fontSize: `${config.descriptionSize}px`,
            lineHeight: 1.5,
            letterSpacing: "-0.016em",
          }}
        >
          Modern web applications
          <br />
          crafted with precision.
        </p>
      </div>

      {/* Logo atmosphere */}
      <div
        className="absolute z-10 rounded-full"
        style={{
          width: `${config.logoSize * 1.24}px`,
          height: `${config.logoSize * 1.24}px`,
          right: `${config.logoRight - config.logoSize * 0.12}px`,
          bottom: `${config.logoBottom - config.logoSize * 0.12}px`,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(59,130,246,0.09) 38%, transparent 68%)",
          filter: "blur(24px)",
        }}
      />

      {/* Decorative orbit */}
      <div
        className="absolute z-10 rounded-full border border-blue-300/[0.07]"
        style={{
          width: `${config.logoSize * 1.16}px`,
          height: `${config.logoSize * 1.16}px`,
          right: `${config.logoRight - config.logoSize * 0.08}px`,
          bottom: `${config.logoBottom - config.logoSize * 0.08}px`,
        }}
      />

      <div
        className="absolute z-10 rounded-full border border-white/[0.035]"
        style={{
          width: `${config.logoSize * 1.46}px`,
          height: `${config.logoSize * 1.46}px`,
          right: `${config.logoRight - config.logoSize * 0.23}px`,
          bottom: `${config.logoBottom - config.logoSize * 0.23}px`,
        }}
      />

      {/* Original logo */}
      <div
        className="absolute z-20"
        style={{
          width: `${config.logoSize}px`,
          height: `${config.logoSize}px`,
          right: `${config.logoRight}px`,
          bottom: `${config.logoBottom}px`,
          filter:
            "drop-shadow(0 24px 45px rgba(0,0,0,0.38)) drop-shadow(0 0 35px rgba(37,99,235,0.16))",
        }}
      >
        <Image
          src="/images/branding/logo-mark.png"
          alt=""
          fill
          priority
          sizes={`${config.logoSize}px`}
          className="object-contain"
        />
      </div>

      {/* Bottom-left signature detail */}
      <div
        className="absolute z-20 flex items-center gap-3 text-white/25"
        style={{
          left: `${config.paddingX}px`,
          bottom: `${Math.max(22, config.paddingY * 0.52)}px`,
          fontSize: `${Math.max(11, config.descriptionSize * 0.55)}px`,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <span className="h-px w-10 bg-gradient-to-r from-blue-400/60 to-transparent" />
        <span>Design &amp; Development</span>
      </div>

      {/* Edge vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-30"
        style={{
          boxShadow:
            "inset 0 0 120px rgba(0,0,0,0.34), inset 0 -50px 90px rgba(0,0,0,0.16)",
        }}
      />
    </div>
  );
}