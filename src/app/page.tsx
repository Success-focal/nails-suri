import HomeSection from "@/components/sections/landingPage/homeSection";
import ServiceSection from "@/components/sections/landingPage/serviceSection";

export default function Home() {
  return (
    <div className="min-h-screen pb-8 sm:pb-20 flex flex-col items-center gap-16">
      <HomeSection />
      <main className="max-w-5xl w-full flex flex-col gap-8 items-center sm:items-start">
        <ServiceSection />
      </main>
    </div>
  );
}
