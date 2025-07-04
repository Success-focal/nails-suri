import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import LottieAnimation from "../animation/lottieAnimation";
import { Sparkles } from "lucide-react";

const Booking = () => {
  return (
    <section id="booking" className="w-full px-6 md:px-12 lg:px-20 py-20 ">
      <div className="flex justify-center items-center flex-col relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 blur-md animate-pulse bg-[oklch(85%_0.09_15)]" />
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-50 blur-md animate-bounce bg-[oklch(80%_0.11_60)]" />
          <div className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full opacity-35 blur-md animate-pulse bg-[oklch(78%_0.12_345)]" />
        </div>
        <LottieAnimation
          src="/animation/Nobooking.json"
          className="w-48 h-48"
        />
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4 flex items-center justify-center gap-2">
            <Sparkles
              className="text-amber-400 animate-pulse"
              size={28}
              strokeWidth={1.5}
            />
            Booking Coming Soon{" "}
            <Sparkles
              className="text-amber-400 animate-pulse"
              size={28}
              strokeWidth={1.5}
            />
          </h1>

          <p className="text-muted-foreground mb-6 font-mono">
            Our booking experience is being polished to perfection. You&apos;ll
            soon be able to schedule appointments online with ease.
            <br />
            <span className="mt-2 block text-accent font-semibold">
              Thank you for your patience. Great things are on the way!
            </span>
          </p>

          <Separator className="my-6" />

          <Button disabled className="tracking-wider" variant="secondary">
            Stay Tuned. We’ll Notify You!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
