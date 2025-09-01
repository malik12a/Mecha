import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Dynamic Integration Agent",
  },
  {
    title: "Smart Automation Bot",
  },
  {
    title: "Virtual Assistance",
  },
  {
    title: "Intelligent Insights Engine",
  },
  {
    title: "Cost Effective",
  },
  {
    title: "Instant Response Bot",
  },
];

const Updates = () => {
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
          width: 250px;
        }
      `}</style>

      <div className="bg-[#5762cc] py-2 w-full mb-4 top-0">
        {/* Marquee Effect */}
        <div className="marquee-outer">
          <div className="marquee-inner">
            {[...products, ...products].map((product, index) => (
              <div
                key={index}
                className="product-card rounded-2xl px-2 py-2 text-center"
              >
                <Link className="hover:text-indigo-300 text-sm font-bold text-gray-900 font-montserrat">
                  {product.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
