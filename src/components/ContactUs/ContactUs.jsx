import React from "react";
import bgImage from "../../assets/contactUs/bg-image.png";
import contact_cargo from "../../assets/contactUs/contact_cargo.jpg";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className=" h-[100vh] flex px-20 gap-8 py-[30vh]  "
    >
      <div className="flex flex-1 flex-col text-2xl justify-between p-20   rounded-3xl bg-white ">
        <div className="flex justify-between">
          <div className="flex-col  ">
            <label htmlFor="name">First Name:</label>
            <input className="bg-gray-100 " id="name" type="text" />
          </div>
          <div className="flex-col  ">
            <label htmlFor="name">Last Name:</label>
            <input className="bg-gray-100 " id="name" type="text" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-col ">
            <label htmlFor="">Email:</label>
            <input type="email" />
          </div>
          <div className="flex-col  ">
            <label htmlFor="">Phone:</label>
            <input type="tel" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-col ">
            <label htmlFor="address ">Address:</label>
            <input id="address" type="text" />
          </div>
          <div className="flex-col  ">
            <label htmlFor="">services:</label>
            <input type="tel" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${contact_cargo})`,
        }}
        className="flex flex-[0.5] bg-cover h-[500px] rounded-3xl w-full bg-orange-900 "
      ></div>
    </div>
  );
};

export default ContactUs;
