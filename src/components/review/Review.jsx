import React, { useRef } from "react";
import img1 from "../../assets/r1.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const review = useRef();

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: review.current,
          // markers: true,
          scrub: 3,

          start: "top 70%",
          end: "top 20%",
        },
      });
    },
    { scope: review }
  );

  return (
    <div
      ref={review}
      id="review"
      className=" flex flex-col justify-around text-center py-20"
    >
      <div className="firstDiv">
        <h1 className="  text-sm text-[#40B69E] ">Reviews</h1>
        <p className="text-3xl text-[#234664] mt-4">
          We care about our <br /> Customers experience too
        </p>
      </div>
      <div className="flex reviews  justify-center mt-20 gap-12 flex-wrap items-center">
        {[1, 2, 3].map(() => {
          return (
            <div className="  relative w-[400px] text-left bg-gray-100 shadow-sm hover:shadow-xl transition duration-200 px-8 pb-4 rounded-3xl">
              <p className="text-sm mt-16 text-left text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                incidunt consectetur illum vel sit exercitationem, placeat earum
                voluptatum fuga doloribus?
              </p>
              <div className="flex justify-between px mt-4 border-t py-4 border-gray-400 ">
                <div className="flex  text-sm flex-col ">
                  <span>harry james</span>
                  <span className="text-gray-400  text-sm">A cool guy</span>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <div>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24.00 24.00"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#D14F75"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#D14F75"
                              stroke-width="1.464"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="absolute -top-9 border-2 border-gray-400  left-8 rounded-full overflow-hidden">
                <img
                  className="h-[80px] w-[80px] object-cover"
                  src={img1}
                  alt="reviewer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
