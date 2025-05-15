import React from "react";
import Hero from "./../../assets/imgs/Hireus/heroimage1.png";

const HeroSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-8 py-12">
      {/* Main Heading */}
      <h1 className="text-[26px] md:text-[32px] lg:text-[48px] leading-[160%] font-lufga font-medium mb-10 mt-0 md:mt-5 text-black">
        Empowering Innovation Through IT Services and <br className="hidden md:block" />
        Live Streaming—Let’s Build the Future of Digital <br className="hidden md:block" />
        Together
      </h1>

      {/* Two Column Text */}
      <div className="flex flex-col md:flex-row justify-end gap-10 text-left mb-18">
        <p className="text-[18px] md:text-[18px] leading-[160%] text-black max-w-[400px]">
          At Pixalive Technology Services, we craft impactful SaaS and live
          streaming solutions that scale and lead. With user-focused design and
          expert execution, we turn bold ideas into market-ready products
        </p>
        <p className="text-[18px] md:text-[18px] leading-[160%] text-black max-w-[400px]">
          Discover the future of digital innovation with smart insights,
          immersive experiences, and scalable tech. We help elevate your brand
          and boost ROI through transformative solutions.
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src={Hero}
          alt="Pixalive Team Collaboration"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;