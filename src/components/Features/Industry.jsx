import React from "react";
import imgSocial from "../../assets/Features/fea11.jpg";
import imgShopping from "../../assets/Features/fea12.jpg";
import imgEntertainment from "../../assets/Features/fea13.jpg";

const IndustrySection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20 text-black">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 leading-tight">
          Built for the Demands of <br /> Your Industry
        </h2>

        {/* Section 1 - Social */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Left - Text */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">Social</p>
              <p className="text-xl sm:text-2xl leading-relaxed mb-4 max-w-xl">
                Empower your brand with seamless live streaming that amplifies
                social engagement and builds real-time connections with your audience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-800 mt-6">
              {[
                "Tagging",
                "SNS Login",
                "SNS Sharing",
                "Post Short Videos",
                "Virtual Gifting",
                "Events",
                "Loyalty points",
                "Categories",
                "Profile",
                "Scheduling",
                "Content Management System",
                "Social Analytics",
              ].map((item, index) => (
                <p
                  key={index}
                  className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[1px] before:bg-black"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1">
            <img
              src={imgSocial}
              alt="Social"
              className="w-full h-auto max-h-[600px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Section 2 - Shopping */}
        <div className="flex flex-col md:flex-row-reverse gap-10 mb-16">
          {/* Right - Text */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">Shopping</p>
              <p className="text-xl sm:text-2xl leading-relaxed mb-4 max-w-xl">
                Transform your e-commerce experience with interactive live shopping,
                driving real-time purchases and engagement directly through your live streams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-800 mt-6">
              {[
                "Proprietary Live Stream Shopping",
                "Add to Cart",
                "Product Items Upload",
                "Featured Product Items",
                "eCommerce Integration",
                "Reorder Product Catalogue",
                "Payment Integration",
                "Checkout In-stream",
                "Promo Code/Voucher Capabilities",
                "Content Management System (CMS)",
                "Shop Analytics",
              ].map((item, index) => (
                <p
                  key={index}
                  className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[1px] before:bg-black"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Left - Image */}
          <div className="flex-1">
            <img
              src={imgShopping}
              alt="Shopping"
              className="w-full h-auto max-h-[600px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Section 3 - Entertainment */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Text */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">Entertainment</p>
              <p className="text-xl sm:text-2xl leading-relaxed mb-4 max-w-xl">
                Elevate your live streams with real-time shows, interactive features,
                and exclusive content that keeps viewers hooked.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-800 mt-6">
              {[
                "Live Polling",
                "Live Trivia",
                "In-Stream Mini Games",
                "Daily Tasks/Missions",
                "Achievement Badges",
                "VIP System",
                "Leaderboard/Ranking",
                "Leveling System",
                "Game Live Streaming",
                "PK System",
                "Content Management System (CMS)",
                "Game Analytics",
              ].map((item, index) => (
                <p
                  key={index}
                  className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[1px] before:bg-black"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1">
            <img
              src={imgEntertainment}
              alt="Entertainment"
              className="w-full h-auto max-h-[600px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
