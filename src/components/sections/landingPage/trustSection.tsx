import LottieAnimation from "@/components/animation/lottieAnimation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clientStories } from "@/lib/data/datapool";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

const TrustSection = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-10 text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-6 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground flex items-center justify-center gap-2 font-sans">
          <Heart className="w-6 h-6 text-accent" />
          Why They Love Us
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg font-mono">
          From heartfelt stories to glowing transformations. Here’s what our
          beautiful community says about us.
        </p>
      </div>

      {/* Hear Our Clients + CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 max-w-3xl mx-auto mb-10">
        <div className="text-left">
          <h3 className="text-xl font-semibold text-accent font-mono mb-1">
            Hear Our Clients
          </h3>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Trusted by over <strong>1000 clients</strong> with an average rating
            of{" "}
            <span className="inline-flex items-center font-semibold text-accent">
              4.9
              <Star className="h-4 w-4 ml-1 fill-accent stroke-none" />
            </span>
          </p>
        </div>
        <Button
          asChild
          size="lg"
          aria-label="Book an appointment"
          className="flex items-center gap-2"
        >
          <Link href="/booking" className="flex items-center gap-2">
            Let’s Book
            <LottieAnimation
              src="/animation/LetsBook.json"
              className="w-8 h-8"
            />
          </Link>
        </Button>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clientStories.map((client, index) => (
          <Card
            key={index}
            className="bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl border border-border gap-4"
          >
            <CardHeader className="text-left font-sans">
              <CardTitle className="text-sm font-semibold">
                {client.name}
              </CardTitle>
              <CardDescription className="text-xs text-accent">
                {client.service}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-left">
              <p className="text-sm text-muted-foreground leading-relaxed italic font-mono">
                “{client.story}”
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
