import NailsBothHand from "@/components/animation/nailsBothhand";
import BannerSection from "@/components/sections/landingPage/bannerSection";
import HomeSection from "@/components/sections/landingPage/homeSection";
import ServiceSection from "@/components/sections/landingPage/serviceSection";
import TrustSection from "@/components/sections/landingPage/trustSection";

export default function Home() {
  return (
    <div className="min-h-screen pb-8 sm:pb-20 flex flex-col items-center gap-16">
      <HomeSection />
      <main className="max-w-5xl w-full flex flex-col items-center sm:items-start">
        <ServiceSection />
      </main>
      <BannerSection />
      <main className="max-w-5xl w-full flex flex-col items-center sm:items-start">
        <NailsBothHand />
        <TrustSection />
      </main>
    </div>
  );
}
