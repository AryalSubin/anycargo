import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img1 from "../../assets/landing/ship1.jpg";
import img2 from "../../assets/landing/ship2.jpg";
import img3 from "../../assets/landing/plane.jpg";
import img4 from "../../assets/landing/luz.png";

const Landing = () => {
  const comp = useRef(null);
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from(
  //       ["#acc", "#span1", "#span2", "#span3", "#para", "#more", "#spin-img"],
  //       {
  //         x: -5,
  //         opacity: 0,

  //         delay: 0.3,
  //         stagger: 0.1,
  //         ease: "expo.inOut",
  //       }
  //     )

  //       .from(["#first-img", "#second-img", "#third-img"], {
  //         opacity: 0,
  //         scale: 0.8,
  //         stagger: 1,
  //       })
  //       .from(["#rotate-arrow"], {
  //         opacity: 0,
  //         duration: 0.5,
  //         rotate: 60,
  //       })
  //       .from(["#service-text"], {
  //         opacity: 0,
  //         duration: 0.8,
  //         scale: 0.8,
  //         ease: "expo.inOut",
  //       });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.from(
        ["#acc", "#span1", "#span2", "#span3", "#para", "#more", "#spin-img"],
        {
          x: -5,
          opacity: 0,
          delay: 0.3,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        "first"
      )
        .from(
          ["#first-img"],
          {
            opacity: 0,
            x: -100,
            duration: 1,
            delay: 0.5,
          },
          "first"
        )
        .from(
          ["#third-img"],
          {
            opacity: 0,
            scale: 0.8,
            delay: 1,
          },
          "first"
        )
        .from(
          ["#second-img"],
          {
            opacity: 0,
            scale: 0.8,
            // delay: 1,
          },
          "second"
        )
        .from(
          ["#rotate-arrow"],
          {
            opacity: 0,
            // duration: 0.5,
            rotate: 60,
            // delay: 1,
          },
          "second"
        )
        .from(
          ["#service-text"],
          {
            opacity: 0,
            // delay: 1,
            // duration: 0.4,
            scale: 0.8,
            ease: "expo.inOut",
          },
          "second"
        );
    },
    { scope: comp }
  );

  return (
    <div
      ref={comp}
      id="home"
      className=" md:h-[100vh] pb-[3vh] pt-[15vh] xl:px-[7vw] px-10 md:flex gap-10   "
    >
      <div className="flex lala h-[100vh] xl:auto relative flex-col xl:mb-20  flex-1">
        <div id="acc" className="flex py-4">
          <span className="px-4 py-2 max-w-fit rounded-full flex items-center bg-gray-200 text-gray-700">
            Accelerated Solutions
          </span>
          <div className="h-[50px] w-[15px]    ">
            <div className="h-full w-full relative left-[78px] top-[15px] z-50 rounded-bl-[30px] shadow-[0_15px_0px_0px_rgba(0,0,0,0.3)] shadow-[#fff]"></div>
          </div>
        </div>

        <div className="xl:text-6xl lg:text-5xl md:text-4xl text-4xl relative z-10  font-bold xl:mb-4 my-8  ">
          <div id="span1" className="flex items-end max-w-fit">
            <p className="bg-white  pb-4 pr-20 rounded-tr-2xl z-10">Reliable</p>{" "}
            <div className="h-[50px] w-[50px]   ">
              <div className="h-full w-full  rounded-bl-2xl shadow-[0_25px_0px_0px_rgba(0,0,0,0.3)] shadow-[#fff]"></div>
            </div>
          </div>
          <p
            id="span1"
            className="bg-white max-w-fit pb-6 rounded-2xl pr-4 z-10"
          >
            Cargo Shipping
          </p>
          <div id="span1" className="flex relative max-w-fit">
            <p className="bg-white  pb-4 pr-4 rounded-br-3xl z-10">
              Made Simple
            </p>
            <div className="h-[50px] w-[50px]   ">
              <div className="h-full w-full  rounded-tl-2xl shadow-[0_-13px_0px_0px_rgba(0,0,0,0.3)] shadow-[#fff]"></div>
            </div>
            <div>
              <div className="h-[50px] w-[20px] absolute right-[153px] top-[76px] z-50 ">
                <div className="h-full w-full  rounded-tl-2xl shadow-[0_-13px_0px_0px_rgba(0,0,0,0.3)] shadow-white"></div>
              </div>
            </div>
          </div>
        </div>
        <p
          id="para"
          className="xl:w-[210px] md:w-[70%] w-[85%] text-[14px] text-gray-600"
        >
          Representative logistics operator providing full range of service in
          the sphere of customs clearance and transportation world wide
        </p>
        <div className="xl:py-4 py-8">
          <div
            id="more"
            className="bg-[#234664] text-white rounded-full  pr-1 pl-4 py-1 flex gap-10 max-w-fit justify-between items-center"
          >
            <p>More About Us</p>{" "}
            <div id="moreIcon">
              <svg
                className="bg-white px-2 rounded-full"
                fill="#234664"
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
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
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-fit px-12">
          <div className="mid-img h-[100px] animate-spin-slow  w-[100px] xl:h-[80px] xl:w-[80px] rounded-full  overflow-hidden">
            <img
              id="spin-img"
              className="w-full h-full object-cover"
              src={img4}
              alt="luz"
            />
          </div>
        </div>
        <div
          id="first-img"
          className="absolute   hidden xl:block bg-gray-400  h-[84%] mb-10 w-[65%] right-0   rounded-3xl overflow-hidden"
        >
          <img className="h-full w-full object-cover" src={img1} alt="" />
        </div>
      </div>
      {/* right div  */}
      <div className="flex flex-col h-full xl:flex-[0.45] flex-1 lg:flex-[0.7]   ">
        <div className="w-full  flex px-5 xl:px-0 justify-between">
          <div
            id="second-img"
            className=" overflow-hidden h-[150px]  w-[150px]  rounded-3xl"
          >
            <img
              className="w-full h-full object-center object-fill "
              src={img3}
              alt=""
            />
          </div>
          <div className="relative right-10  ">
            <div
              id="rotate-arrow"
              className="h-[150px]  w-[150px] -rotate-45 rounded-full border-y-2 border-l-2 overflow-hidden"
            >
              <svg
                className="bg-white w-full h-full px-12   border-black"
                fill="#234664"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
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
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p
              id="service-text"
              className="text-gray-600 absolute top-5 -right-12 "
            >
              Our Service
            </p>
          </div>
        </div>
        <div
          id="third-img"
          className="mt-10 rounded-3xl overflow-hidden  h-full"
        >
          <img className="w-full object-cover h-full" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
