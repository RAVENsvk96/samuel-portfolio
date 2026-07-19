import BannerLayout, {
  type BannerPlatform,
} from "@/components/branding/BannerLayout";

export type { BannerPlatform };

type SocialBannerProps = {
  platform: BannerPlatform;
  className?: string;
};

export default function SocialBanner({
  platform,
  className = "",
}: SocialBannerProps) {
  return <BannerLayout platform={platform} className={className} />;
}