import React, { useRef } from "react";
import warehouse from "../../assets/about/warehousing.jpg";
import iExport from "../../assets/ourServices/import-export.jpg";
import projectM from "../../assets/ourServices/projectM.jpg";
import { Cart } from "./Cart";
import image1 from "../../assets/ourServices/projectM.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const OurServices = () => {
  const services = useRef();

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: services.current,
          markers: true,
          scrub: 3,

          start: "top 70%",
          end: "top 20%",
        },
      });

      t1.from(".service", {
        x: -20,
        opacity: 0,

        duration: 2,
        stagger: 0.5,
        rotate: -5,
        ease: "expo.inOut",
      });
    },
    { scope: services }
  );

  return (
    <div ref={services} id="services" className="my-16  ">
      <p className="text-center my-16 text-4xl font-bold">Our Services</p>
      <div className="flex  justify-center flex-wrap gap-4  px-20   ">
        {/* {servicesData.map((item) => {
          return (
            <div className=" ">
              <Cart />
            </div>
            // <div
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //   }}
            //   id={item.id}
            //   className="relative border bg-cover text-gray-200 flex flex-col justify-between border-gray-500  font-bold p-4 text-lg  h-[200px] rounded-3xl w-[250px]"
            // >
            //   <span>{item.text}</span>

            // </div>
          );
        })} */}

        {[
          servicesData.map((item, id) => {
            return (
              <div
                style={{ backgroundColor: item.color }}
                id={id}
                className={`service p-2 w-[320px] h-[110px] border  text-center flex flex-col justify-center items-center  rounded-3xl`}
              >
                <p className="font-bold mb-1">{item.text}</p>
                <p className="font-thin text-[10px] text-gray-700 ">
                  {item.content}
                </p>
              </div>
            );
          }),
        ]}
      </div>
    </div>
  );
};

export default OurServices;
const servicesData = [
  {
    id: 1,
    text: "Import / Export",
    content:
      "Facilitating smooth import and export operations with global reach and local expertise.",
    image: iExport,
    color: "#FF6B6B",
  },
  {
    id: 2,
    text: "International shipping  ",
    text1: "(Air / Sea / Land)",
    content:
      "Connecting continents with reliable and efficient international shipping services, tailored to meet your global trade needs.",

    image: warehouse,
    color: "#48BB78",
  },
  {
    id: 3,
    text: "Project Management",
    content:
      "Delivering your projects on time and within budget through meticulous planning and execution.",

    image: projectM,
    color: "#81E6D9",
  },
  {
    id: 4,
    text: "Supply Chain Management",
    content:
      "Optimizing your supply chain for efficiency and resilience, from supplier to customer.",

    image: iExport,
    color: "#63B3ED",
  },
  {
    id: 5,
    text: "Custom Brokerage ",
    content:
      "Navigating complex customs regulations for you, ensuring fast and compliant clearance.",

    image: iExport,
    color: "#A78BFA",
  },
  {
    id: 6,
    text: "Transition / Haulage",
    content:
      "Providing reliable and efficient haulage solutions for the seamless transition of your goods.",

    image: iExport,
    color: "#F6E05E",
  },
  {
    id: 7,
    text: "Modern Warehousing",
    content:
      "State-of-the-art warehousing solutions that keep your inventory safe, organized, and accessible.",

    image: iExport,
    color: "#FEB2B2",
  },
  {
    id: 8,
    text: "Collection / Packaging / Distribution",
    content:
      "Expert handling, packaging, and distribution services to ensure your products reach their destination in pristine condition.",

    image: iExport,
    color: "#9AE6B4",
  },
  {
    id: 9,
    text: "Insurance",
    content:
      "Offering comprehensive insurance options to protect your cargo against all risks during transit.",

    image: iExport,
    color: "#90CDF4",
  },
  {
    id: 10,
    text: "Door to Door Express Courier",
    content:
      "Speedy, reliable door-to-door express courier services for when time is of the essence.",

    image: iExport,
    color: "#FED7D7",
  },
];
