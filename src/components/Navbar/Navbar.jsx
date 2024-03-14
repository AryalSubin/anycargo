import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../assets/logo1.png";
import logo_text from "../../assets/logo_text.jpg";
import logo_text1 from "../../assets/logo_text1.png";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  // const [prevYPosition, setPreviousYPosition] = useState(0);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (currentYPosition > 10) {
        setBlur(true);
      }
      if (currentYPosition < 10) {
        setBlur(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blur]);

  const comp = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from(["#logo", "#litems", "#search", "#btn"], {
  //       opacity: 0,
  //       duration: 0.5,
  //       delay: 0.2,
  //       stagger: 0.1,
  //       ease: "back.inOut",
  //     });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(["#logo", "#navItems", "#search", "#btn"], {
        opacity: 0,
        x: 200,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.1,
        ease: "back.inOut",
      });
      // tl.from("#nav", {
      //   y: -100,
      //   opacity: 0,
      // });
      // .from(["#logo", "#litems", "#search", "#btn"], {
      //   x: -100,
      //   opacity: 0,
      //   delay: 0.3,
      //   stagger: 0.1,
      //   ease: "expo.inOut",
      // });
    },
    { scope: comp }
  );
  const navData = [
    {
      text: "home",
      href: "#home",
    },
    {
      text: "About Infinity",
      href: "#about",
    },
    {
      text: "services",
      href: "#services",
    },
    {
      text: "review",
      href: "#review",
    },
    {
      text: "contact",
      href: "#contact",
    },
  ];
  const [showHam, setshowHam] = useState(true);

  return (
    <div
      ref={comp}
      className={`fixed z-50 w-full flex justify-between  transition duration-200  py-1 px-[7vw] ${
        blur && "backdrop-blur-md shadow-sm  shadow-gray-300"
      } `}
    >
      {/* <div id="nav"> */}
      <div id="logo" className="flex object-cover p-2 overflow-hidden ">
        <img className="h-[50px]" src={logo_text1} alt="logo" />
      </div>
      <div className=" flex-1 hidden md:flex text-sm md:text-base justify-center items-center  gap-[3vw]">
        {navData.map((item, id) => {
          return (
            <a
              id="navItems"
              href={item.href}
              className="cursor-pointer text-gray-700 capitalize  text-lg"
              key={id}
            >
              {item.text}
            </a>
          );
        })}
      </div>
      <div className="flex items-center">
        <div
          id="btn"
          className="border border-[#26D366] hidden md:block tracking-wide   px-6 py-2 rounded-3xl "
        >
          {/* <div>
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 58 58"
              xml:space="preserve"
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
                <g>
                  {" "}
                  <path
                    style="fill:#2CB742;"
                    d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                  ></path>{" "}
                  <path
                    style="fill:#FFFFFF;"
                    d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div> */}
          WhatsApp Now
        </div>
      </div>
      {/* hamburger  */}
      {showHam ? (
        <div
          onClick={() => {
            setshowHam(false);
          }}
          className="md:hidden  transition duration-200"
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 72 72"
            id="emoji"
            xmlns="http://www.w3.org/2000/svg"
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
              <g id="color"></g> <g id="hair"></g> <g id="skin"></g>{" "}
              <g id="skin-shadow"></g>{" "}
              <g id="line">
                {" "}
                <line
                  x1="16"
                  x2="56"
                  y1="26"
                  y2="26"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></line>{" "}
                <line
                  x1="16"
                  x2="56"
                  y1="36"
                  y2="36"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></line>{" "}
                <line
                  x1="16"
                  x2="56"
                  y1="46"
                  y2="46"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></line>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      ) : (
        <div
          onClick={() => {
            setshowHam(true);
          }}
          className="md:hidden transition duration-200 "
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M19 5L4.99998 19M5.00001 5L19 19"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
