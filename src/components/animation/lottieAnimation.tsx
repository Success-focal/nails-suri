"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export interface LottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation = ({
  src,
  loop = true,
  autoplay = true,
  className = "w-10 h-10",
}: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data: unknown) => {
        if (typeof data === "object" && data !== null) {
          setAnimationData(data);
        } else {
          throw new Error("Invalid Lottie animation format");
        }
      })
      .catch((e) => console.error("Failed to load animation", e));
  }, [src]);

  if (!animationData) return null;

  return (
    <div className={`mx-auto ${className}`}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottieAnimation;
