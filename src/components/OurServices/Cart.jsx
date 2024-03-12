import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import image1 from "../../assets/ourServices/projectM.jpg";

export function Cart() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white   relative group/card   hover:shadow-lg border-gray-500  rounded-2xl p-4 border  ">
        <CardItem
          translateZ="5"
          className="text-lg font-bold text-neutral-600 "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="5"
          className="text-neutral-500 text-xs max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="5" className="w-full mt-4">
          <img
            src={image1}
            className="object-cover rounded-xl group-hover/card:shadow-sm"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={5}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={5}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
