import React from "react";

const products = [
  {
    icon: "💬",
    title: "LiveChat",
    subtitle: "Connect with customers",
  },
  {
    icon: "✅",
    title: "HelpDesk",
    subtitle: "Support customers with tickets",
  },
  {
    icon: "📘",
    title: "KnowledgeBase",
    subtitle: "Guide and educate customers",
  },
  {
    icon: "🧩",
    title: "OpenWidget",
    subtitle: "Enhance websites with widgets",
  },
];

const TrustedBrands = () => {
  return (
    <>
      <style>{`
        .marquee-outer {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-inner {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .product-card {
          flex: 0 0 auto;
          width: 200px;
        }

        @media (min-width: 640px) {
          .product-card {
            width: 250px;
          }
        }
      `}</style>

      <div className="bg-gray-200 py-16 w-full">
        {/* Heading */}
        <h2 className="font-montserrat text-center text-xl sm:text-2xl md:text-3xl font-medium text-black mb-12">
          Discover our <span className="font-bold">text|</span> products
        </h2>

        {/* Marquee Effect */}
        <div className="marquee-outer">
          <div className="marquee-inner gap-3 sm:gap-6 px-2 sm:px-4 h-[10rem] sm:h-[12.5rem]">
            {[...products, ...products].map((product, index) => (
              <div
                key={index}
                className=" product-card rounded-2xl px-4 py-6 text-center"
              >
                <div className="absolute text-2xl sm:text-3xl mb-2">{product.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 ">
                  {product.title}
                </h3>
                 <p className="absolute w-20 text-sm text-gray-600 mt-5 text-left ml-15 ">
                  {product.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedBrands;
