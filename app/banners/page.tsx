import SocialBanner, {
  type BannerPlatform,
} from "@/components/branding/SocialBanner";

const platforms: BannerPlatform[] = [
  "linkedin",
  "facebook",
  "x",
  "github",
  "opengraph",
];

export default function BannersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
            Brand assets
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Social banners
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-400">
            Náhľady bannerov pre jednotlivé sociálne siete a Open Graph.
          </p>
        </div>

        {platforms.map((platform) => (
          <section key={platform} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize">{platform}</h2>

            <div className="overflow-auto rounded-2xl border border-white/10 bg-black/30 p-6">
              <SocialBanner platform={platform} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}