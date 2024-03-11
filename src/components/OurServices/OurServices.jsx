import React from "react";
import warehouse from "../../assets/about/warehousing.jpg";
import iExport from "../../assets/ourServices/import-export.jpg";
import projectM from "../../assets/ourServices/projectM.jpg";

const OurServices = () => {
  return (
    <div className="h-[80vh]  grid grid-cols-5 py-4 px-20 gap-4 justify-center  w-full">
      {servicesData.map((item) => {
        return (
          <div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            id={item.id}
            className="relative border bg-cover text-gray-200 flex flex-col justify-between border-gray-500  font-bold p-4 text-lg  h-[200px] rounded-3xl w-[250px]"
          >
            <span>{item.text}</span>
            {/* {item.text1 && (
              <p className="text-xs text-gray-400 "> {item.text1}</p>
            )} */}
          </div>
        );
      })}
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
