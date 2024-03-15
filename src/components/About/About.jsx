import React, { useRef, useState } from "react";
import warehouse from "../../assets/about/warehousing.jpg";
import "./About.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const aboutRef = useRef(null);
  const boxRef = useRef(null);

  const [hover1, sethover1] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hover3, sethover3] = useState(false);
  const [hover4, sethover4] = useState(false);
  const [hover, sethover] = useState(false);

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          // markers: true,
          scrub: 3,

          start: "top 65%",
          end: "top 20%",
        },
      });
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          // markers: true,
          scrub: 3,

          start: "top 65%",
          end: "top 20%",
        },
      });
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          // markers: true,
          scrub: 3,

          start: "top 75%",
          end: "top 39%",
        },
      });
      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          // markers: true,
          scrub: 3,

          start: "top 75%",
          end: "top 39%",
        },
      });

      t1.from(".paraText", {
        opacity: 0,
        y: "100px",
        x: "-50px",
        duration: 2,

        stagger: 0.5,

        // ease: "expo.inOut",
      });
      t2.from(".spanText", {
        padding: "1vw",
        fontSize: "20px",

        opacity: 0,

        // ease: "expo.inOut",
      });
      t3.from(
        [".firstBox", ".secondBox", ".thirdBox", ".fourthBox"],
        {
          y: "150px",
          stagger: 0.5,
          // duration: 0.2,
          scrub: 2,
          ease: "back.inOut",
        },
        "boxes"
      );
    },
    { scope: aboutRef }
  );

  useGSAP(() => {
    const t1 = gsap.timeline();
  });

  return (
    <div
      ref={aboutRef}
      id="about"
      className=" relative w-full h-full flex flex-col  py-20   bg-white"
    >
      <div className=" aboutText p-10  ">
        <h1 className="text-center text-sm text-[#48B9A2] mb-8 font-bold ">
          {"Know who we are".split("").map((item) => {
            return <span className="spanText">{item}</span>;
          })}
        </h1>
        <p className="  text-center text-xl text-[#234664]  xl:px-[20vw]">
          {" "}
          {"We've got you covered with our efficient courier service.Ship your extra luggage hassle-free  and travel light!"
            .split("")
            .map((item) => {
              return <span className="paraText">{item}</span>;
            })}
        </p>
      </div>

      <div
        ref={boxRef}
        className={` flex   xl:h-[310px] w-full md:h-[500px]  xl:px-20 justify-center  flex-wrap gap-4 items-end `}
      >
        {/* first  */}
        <div
          onMouseEnter={() => {
            sethover1(true);
          }}
          onMouseLeave={() => {
            sethover1(false);
          }}
          id="hoverEl"
          className=" firstBox relative flex overflow-hidden flex-col  group transition duration-300 ease-linear  gap-4 p-3 w-[250px] h-[200px] border border-gray-500  linear rounded-3xl  "
        >
          <div className="z-20 flex flex-col h-full py-4 justify-between">
            <div className=" border rounded-full h-[50px] text-[#51BDA7] group-hover:text-white w-[50px] flex justify-center items-center group-hover:border-gray-100 border-gray-400">
              {/* <Icon icon="mingcute:ship-line" />
               */}
              <Icon className="h-full w-full p-2 " icon="lucide:plane" />
            </div>
            <span className="text-sm group-hover:text-white text-[#4CB797] font-bold">
              Reliable
            </span>
            <p className="text-sm group-hover:w-[80%] text-gray-500 group-hover:text-gray-100  ">
              Connecting people, businesses, and communities to a better future
            </p>
            <p
              id="hiddentext"
              className=" group-hover:block mt-8 group-hover:text-gray-300 text-sm  hidden  "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              consectetur.adipisicing elit. Iure, consectetur.adipisicing elit.
              Iure, consectetur.
            </p>
          </div>
          <div className="absolute h-full w-full top-0 left-0 group-hover:bg-black group-hover:opacity-25 z-10 rounded-3xl"></div>
        </div>
        {/* second  */}
        <div
          onMouseEnter={() => {
            sethover2(true);
          }}
          onMouseLeave={() => {
            sethover2(false);
          }}
          id="hoverEl"
          className=" secondBox relative flex flex-col overflow-hidden group transition duration-300 ease-linear  gap-4 p-3 w-[250px] h-[200px] border border-gray-500  linear rounded-3xl  "
        >
          <div className="z-20 flex flex-col h-full py-4 justify-between">
            <div className=" border rounded-full h-[50px] text-[#51BDA7] group-hover:text-white w-[50px] flex justify-center items-center group-hover:border-gray-100 border-gray-400">
              {/* <Icon icon="mingcute:ship-line" />
               */}
              <Icon className="h-full w-full p-2" icon="tabler:ship" />{" "}
            </div>
            <span className="text-sm group-hover:text-white text-[#4CB797] font-bold">
              Reliable
            </span>
            <p className="text-sm group-hover:w-[80%] text-gray-500 group-hover:text-gray-100  ">
              Connecting people, businesses, and communities to a better future
            </p>
            <p
              id="hiddentext"
              className=" group-hover:block mt-8 group-hover:text-gray-300 text-sm  hidden  "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              consectetur.adipisicing elit. Iure, consectetur.adipisicing elit.
              Iure, consectetur.
            </p>
          </div>
          <div className="absolute h-full w-full top-0 left-0 group-hover:bg-black group-hover:opacity-25 z-10 rounded-3xl"></div>
        </div>
        {/* third */}
        <div
          onMouseEnter={() => {
            sethover3(true);
          }}
          onMouseLeave={() => {
            sethover3(false);
          }}
          id="hoverEl"
          className=" thirdBox relative flex flex-col overflow-hidden group transition duration-300 ease-linear  gap-4 p-3 w-[250px] h-[200px] border border-gray-500  linear rounded-3xl  "
        >
          <div className="z-20 flex flex-col h-full py-4 justify-between">
            <div className=" border rounded-full h-[50px] text-[#51BDA7] group-hover:text-white w-[50px] flex justify-center items-center group-hover:border-gray-100 border-gray-400">
              {/* <Icon icon="mingcute:ship-line" />
               */}
              <Icon className="h-full w-full p-2" icon="maki:warehouse" />
            </div>
            <span className="text-sm group-hover:text-white text-[#4CB797] font-bold">
              Reliable
            </span>
            <p className="text-sm group-hover:w-[80%] text-gray-500 group-hover:text-gray-100  ">
              Connecting people, businesses, and communities to a better future
            </p>
            <p
              id="hiddentext"
              className=" group-hover:block mt-8 group-hover:text-gray-300 text-sm  hidden  "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              consectetur.adipisicing elit. Iure, consectetur.adipisicing elit.
              Iure, consectetur.
            </p>
          </div>
          <div className="absolute h-full w-full top-0 left-0 group-hover:bg-black group-hover:opacity-25 z-10 rounded-3xl"></div>
        </div>
        {/* fourth */}
        <div
          onMouseEnter={() => {
            sethover4(true);
          }}
          onMouseLeave={() => {
            sethover4(false);
          }}
          id="hoverEl"
          className=" fourthBox relative flex flex-col overflow-hidden group transition duration-300 ease-linear  gap-4 p-3 w-[250px] h-[200px] border border-gray-500  linear rounded-3xl  "
        >
          <div className="z-20 flex flex-col h-full py-4 justify-between">
            <div className=" border rounded-full h-[50px] text-[#51BDA7] group-hover:text-white w-[50px] flex justify-center items-center group-hover:border-gray-100 border-gray-400">
              <Icon className="h-full w-full p-2" icon="ph:truck" />
            </div>
            <span className="text-sm group-hover:text-white text-[#4CB797] font-bold">
              Reliable
            </span>
            <p className="text-sm group-hover:w-[80%] text-gray-500 group-hover:text-gray-100  ">
              Connecting people, businesses, and communities to a better future
            </p>
            <p
              id="hiddentext"
              className=" group-hover:block mt-8 group-hover:text-gray-300 text-sm  hidden  "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              consectetur.adipisicing elit. Iure, consectetur.adipisicing elit.
              Iure, consectetur.
            </p>
          </div>
          <div className="absolute h-full w-full top-0 left-0 group-hover:bg-black group-hover:opacity-25 z-10 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

const aboutData = [
  {
    id: 1,
    text1: "Reliable",
    text2: "Air Freight Services",
    icon: (
      <svg
        className="px-2"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="icomoon-ignore"> </g>{" "}
          <path
            d="M9.123 30.464l-1.33-6.268-6.318-1.397 1.291-2.475 5.785-0.316c0.297-0.386 0.96-1.234 1.374-1.648l5.271-5.271-10.989-5.388 2.782-2.782 13.932 2.444 4.933-4.933c0.585-0.585 1.496-0.894 2.634-0.894 0.776 0 1.395 0.143 1.421 0.149l0.3 0.070 0.089 0.295c0.469 1.55 0.187 3.298-0.67 4.155l-4.956 4.956 2.434 13.875-2.782 2.782-5.367-10.945-4.923 4.924c-0.518 0.517-1.623 1.536-2.033 1.912l-0.431 5.425-2.449 1.329zM3.065 22.059l5.63 1.244 1.176 5.544 0.685-0.372 0.418-5.268 0.155-0.142c0.016-0.014 1.542-1.409 2.153-2.020l5.978-5.979 5.367 10.945 1.334-1.335-2.434-13.876 5.349-5.348c0.464-0.464 0.745-1.598 0.484-2.783-0.216-0.032-0.526-0.066-0.87-0.066-0.593 0-1.399 0.101-1.881 0.582l-5.325 5.325-13.933-2.444-1.335 1.334 10.989 5.388-6.326 6.326c-0.483 0.482-1.418 1.722-1.428 1.734l-0.149 0.198-5.672 0.31-0.366 0.702z"
            fill="#000000"
          >
            {" "}
          </path>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    text1: "Innovative",
    text2: "Ocean Freight Services",
    icon: (
      <svg
        className="p-2"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        id="_x3C_Layer_x3E_"
        version="1.1"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="ship_x2C__cruiser_x2C__passenger_x2C__maritime_transport">
            {" "}
            <g id="XMLID_2330_">
              {" "}
              <line
                fill="none"
                id="XMLID_2331_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                x1="25.5"
                x2="24.5"
                y1="18.5"
                y2="18.5"
              ></line>{" "}
              <path
                d=" M18.5,29.5c1.38,0,2.061-0.55,2.5-1.5c0.42,0.95,1.12,1.5,2.5,1.5s2.029-0.52,2.5-1.5c0.47,1,1.12,1.5,2.5,1.5 c0.965,0,1.582-0.244,2.02-0.732"
                fill="none"
                id="XMLID_2332_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></path>{" "}
              <path
                d=" M3.5,26.5c1.38,0,2.061-0.55,2.5-1.5c0.42,0.95,1.12,1.5,2.5,1.5s2.029-0.52,2.5-1.5c0.47,1,1.12,1.5,2.5,1.5S15.55,26,16,25 c0.5,0.97,1.12,1.5,2.5,1.5s2.02-0.52,2.5-1.5c0.45,0.98,1.12,1.5,2.5,1.5"
                fill="none"
                id="XMLID_2333_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></path>{" "}
              <path
                d=" M25.5,25"
                fill="none"
                id="XMLID_2334_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></path>{" "}
              <line
                fill="none"
                id="XMLID_2335_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                x1="1.585"
                x2="1.515"
                y1="25.935"
                y2="25.865"
              ></line>{" "}
              <g id="XMLID_2336_">
                {" "}
                <line
                  fill="none"
                  id="XMLID_2337_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="16.6"
                  x2="16.5"
                  y1="29.5"
                  y2="29.5"
                ></line>{" "}
              </g>{" "}
              <polyline
                fill="none"
                id="XMLID_2338_"
                points=" 27.5,16.5 22.5,10.5 22,7.5 5.9,7.5 5.4,10.5 4,10.5 2.5,16.5 "
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></polyline>{" "}
              <path
                d=" M27.5,16.5h3l-3.44,7.64c-0.64,1.44-2.069,2.36-3.649,2.36"
                fill="none"
                id="XMLID_2339_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></path>{" "}
              <path
                d=" M3.36,24.573c-0.235-0.39-0.408-0.825-0.5-1.293L1.5,16.5h22"
                fill="none"
                id="XMLID_2340_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></path>{" "}
              <polygon
                fill="none"
                id="XMLID_2341_"
                points=" 13.5,7.5 8.5,7.5 9,4.5 11.5,4.5 "
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></polygon>{" "}
              <line
                fill="none"
                id="XMLID_2342_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                x1="19.5"
                x2="19.5"
                y1="4.5"
                y2="7.5"
              ></line>{" "}
              <g id="XMLID_2343_">
                {" "}
                <line
                  fill="none"
                  id="XMLID_2344_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="20.5"
                  x2="21.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2345_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="5.5"
                  x2="6.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2346_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="8.5"
                  x2="9.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2347_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="11.5"
                  x2="12.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2348_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="14.5"
                  x2="15.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2349_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="17.5"
                  x2="18.5"
                  y1="14.5"
                  y2="14.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2350_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="6.5"
                  x2="7.5"
                  y1="12.5"
                  y2="12.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2351_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="9.5"
                  x2="10.5"
                  y1="12.5"
                  y2="12.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2352_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="12.5"
                  x2="13.5"
                  y1="12.5"
                  y2="12.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2353_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="15.5"
                  x2="16.5"
                  y1="12.5"
                  y2="12.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2354_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="18.5"
                  x2="19.5"
                  y1="12.5"
                  y2="12.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2355_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="7.5"
                  x2="8.5"
                  y1="10.5"
                  y2="10.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2356_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="10.5"
                  x2="11.5"
                  y1="10.5"
                  y2="10.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2357_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="13.5"
                  x2="14.5"
                  y1="10.5"
                  y2="10.5"
                ></line>{" "}
                <line
                  fill="none"
                  id="XMLID_2358_"
                  stroke="#263238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="16.5"
                  x2="17.5"
                  y1="10.5"
                  y2="10.5"
                ></line>{" "}
              </g>{" "}
              <line
                fill="none"
                id="XMLID_2362_"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                x1="20.5"
                x2="22.5"
                y1="10.5"
                y2="10.5"
              ></line>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    text1: "Sustainable",
    text2: "Warehousing Services",
    icon: (
      <svg
        className="p-2"
        fill="#ffffff"
        height="40px"
        width="40px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
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
          <g>
            {" "}
            <g>
              {" "}
              <path d="M499.933,163.855L260.501,1.383c-2.716-1.845-6.284-1.844-9.002,0L12.067,163.855c-2.199,1.492-3.516,3.976-3.516,6.634 v333.495c0,4.427,3.589,8.017,8.017,8.017h478.864c4.428,0,8.017-3.589,8.017-8.017V170.489 C503.449,167.831,502.133,165.347,499.933,163.855z M196.676,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017 h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V495.967z M92.994,205.228v-18.171h326.013v18.171H92.994z M144.301,444.66 v-35.273h18.171v35.273H144.301z M196.676,393.353h-26.188h-34.205h-26.188v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017 h34.205c4.427,0,8.017-3.589,8.017-8.017v-43.29h18.171V393.353z M144.301,342.046v-35.273h18.171v35.273H144.301z M299.29,495.967h-86.58v-86.58h18.171v43.29c0,4.427,3.589,8.017,8.017,8.017h34.205c4.428,0,8.017-3.589,8.017-8.017v-43.29 h18.171V495.967z M246.914,444.66v-35.273h18.171v35.273H246.914z M487.416,495.967h-69.478V324.409 c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v171.557h-86.58V401.37c0-4.427-3.588-8.017-8.017-8.017 H212.71v-94.597c0-4.427-3.589-8.017-8.017-8.017h-94.597v-69.478h291.808v68.944c0,4.427,3.588,8.017,8.017,8.017 c4.428,0,8.017-3.589,8.017-8.017v-68.944h9.086c4.428,0,8.017-3.589,8.017-8.017V179.04c0-4.427-3.588-8.017-8.017-8.017H84.977 c-4.427,0-8.017,3.589-8.017,8.017v34.205c0,4.427,3.589,8.017,8.017,8.017h9.086v274.706H24.585V174.737L256,17.705 l231.415,157.032V495.967z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M290.205,68.409h-68.409c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409 c4.428,0,8.017-3.589,8.017-8.017S294.633,68.409,290.205,68.409z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M290.205,102.614h-68.409c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409 c4.428,0,8.017-3.589,8.017-8.017S294.633,102.614,290.205,102.614z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M290.205,136.818h-68.409c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409 c4.428,0,8.017-3.589,8.017-8.017S294.633,136.818,290.205,136.818z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M170.489,367.7h-34.205c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h34.205 c4.427,0,8.017-3.589,8.017-8.017C178.505,371.289,174.916,367.7,170.489,367.7z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M170.489,470.313h-34.205c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h34.205 c4.427,0,8.017-3.589,8.017-8.017C178.505,473.903,174.916,470.313,170.489,470.313z"></path>{" "}
            </g>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M273.102,470.313h-34.205c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h34.205 c4.428,0,8.017-3.589,8.017-8.017C281.119,473.903,277.531,470.313,273.102,470.313z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    text1: "Flexible",
    text2: "Road Freight Services",
    img: warehouse,
    icon: (
      <svg
        className="p-2"
        fill="#000000"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M2.84375 13C1.285156 13 0 14.285156 0 15.84375L0 42C0 43.660156 1.339844 45 3 45L7.09375 45C7.570313 47.835938 10.035156 50 13 50C15.964844 50 18.429688 47.835938 18.90625 45L28.15625 45C28.894531 45 29.554688 44.6875 30.0625 44.21875C30.582031 44.675781 31.246094 44.992188 32 45L33.09375 45C33.570313 47.835938 36.035156 50 39 50C42.300781 50 45 47.300781 45 44C45 40.699219 42.300781 38 39 38C36.035156 38 33.570313 40.164063 33.09375 43L32 43C31.8125 43 31.527344 42.871094 31.3125 42.65625C31.097656 42.441406 31 42.183594 31 42L31 23C31 22.625 31.625 22 32 22L40 22C40.785156 22 41.890625 22.839844 42.65625 23.75C42.664063 23.761719 42.679688 23.769531 42.6875 23.78125L42.84375 24L38 24C36.40625 24 35 25.289063 35 27L35 31C35 31.832031 35.375 32.5625 35.90625 33.09375C36.4375 33.625 37.167969 34 38 34L48 34L48 42C48 42.375 47.375 43 47 43L45 43L45 45L47 45C48.660156 45 50 43.660156 50 42L50 32.375C50 30.085938 48.40625 28.0625 48.40625 28.0625L48.375 28.0625L44.25 22.5625L44.25 22.53125L44.21875 22.5C43.296875 21.386719 41.914063 20 40 20L32 20C31.644531 20 31.316406 20.074219 31 20.1875L31 15.90625C31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15L28.1875 15C28.617188 15 29 15.414063 29 15.90625L29 42.15625C29 42.625 28.628906 43 28.15625 43L18.90625 43C18.429688 40.164063 15.964844 38 13 38C10.035156 38 7.570313 40.164063 7.09375 43L3 43C2.625 43 2 42.371094 2 42L2 15.84375C2 15.375 2.367188 15 2.84375 15 Z M 38 26L44.34375 26L46.78125 29.25C46.78125 29.25 47.6875 30.800781 47.875 32L38 32C37.832031 32 37.5625 31.875 37.34375 31.65625C37.125 31.4375 37 31.167969 37 31L37 27C37 26.496094 37.59375 26 38 26 Z M 13 40C15.222656 40 17 41.777344 17 44C17 46.222656 15.222656 48 13 48C10.777344 48 9 46.222656 9 44C9 41.777344 10.777344 40 13 40 Z M 39 40C41.222656 40 43 41.777344 43 44C43 46.222656 41.222656 48 39 48C36.777344 48 35 46.222656 35 44C35 41.777344 36.777344 40 39 40Z"></path>
        </g>
      </svg>
    ),
  },
];
