"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Appointment = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation/appointment.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((e) => console.error("Failed to load animation", e));
  }, []);

  if (!animationData) return null;
  return (
    <div className="w-8 h-8 mx-auto">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default Appointment;
