import React from "react";
import warehouse from "../../assets/about/warehousing.jpg";
import iExport from "../../assets/ourServices/import-export.jpg";
import projectM from "../../assets/ourServices/projectM.jpg";
import { Cart } from "./Cart";
import image1 from "../../assets/ourServices/projectM.jpg";

const OurServices = () => {
  return (
    <div className="my-16  ">
      <p className="text-center my-16 text-4xl font-bold">Our Services</p>
      <div className="flex  justify-center flex-wrap gap-4  px-20   ">
        {servicesData.map((item) => {
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
        })}
        {/* <Cart /> <Cart /> <Cart /> <Cart /> <Cart /> */}
      </div>
    </div>
  );
};

export default OurServices;
const servicesData = [
  {
    id: 1,
    text: "Import / Export",
    image: iExport,
  },
  {
    id: 2,
    text: "International shipping  ",
    text1: "(Air / Sea / Land)",
    image: warehouse,
  },
  {
    id: 3,
    text: "Project Management",
    image: projectM,
  },
  {
    id: 4,
    text: "Supply Chain Management",
    image: iExport,
  },
  {
    id: 5,
    text: "Custom Brokerage ",
    image: iExport,
  },
  {
    id: 6,
    text: "Transition / Haulage",
    image: iExport,
  },
  {
    id: 7,
    text: "Modern Warehousing",
    image: iExport,
  },
  {
    id: 8,
    text: "Collection / Packaging / Distribution",
    image: iExport,
  },
  {
    id: 9,
    text: "Insurance",
    image: iExport,
  },
  {
    id: 10,
    text: "Door to Door Express Courier",
    image: iExport,
  },
];
