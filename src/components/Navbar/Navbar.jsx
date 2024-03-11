import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#logo", "#litems", "#search", "#btn"], {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.1,
        ease: "back.inOut",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="flex py-2 px-[7vw]">
      <div id="logo" className="flex object-cover p-2 overflow-hidden ">
        <img className="h-[50px]" src={logo} alt="logo" />
      </div>
      <ul className="flex flex-1 justify-center items-center  gap-8">
        {["home", "About Infinity", "Our services", "review", "contact us"].map(
          (item, id) => {
            return (
              <li
                id="litems"
                className="cursor-pointer text-gray-700 capitalize  text-lg"
                key={id}
              >
                {item}
              </li>
            );
          }
        )}
      </ul>
      <div className="flex items-center">
        <div
          id="btn"
          className="bg-[#234664] tracking-wide  text-white px-6 py-2 rounded-3xl "
        >
          WhatsApp Now
        </div>
      </div>
    </div>
  );
};

export default Navbar;