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
      <div className="flex flex-1 flex-col text-sm text-gray-400 justify-between p-20 h-[500px]  rounded-3xl bg-gray-100 ">
        <div className="flex gap-16 justify-between">
          <div className="flex-col flex flex-1   ">
            <label className="block" htmlFor="name">
              First Name:
            </label>
            <input
              className="bg-gray-100 border-b border-gray-500 focus:outline-none rounded-lg mt-2 "
              id="name"
              type="text"
            />
          </div>
          <div className="flex-col flex flex-1 ">
            <label className="block" htmlFor="name">
              Last Name:
            </label>
            <input
              className="bg-gray-100 border-b border-gray-500 focus:outline-none rounded-lg mt-2 "
              id="name"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-16 justify-between">
          <div className="flex-col flex flex-1 ">
            <label className="block" htmlFor="">
              Email:
            </label>
            <input
              className="bg-gray-100 border-b border-gray-500 focus:outline-none rounded-lg mt-2 "
              type="email"
            />
          </div>
          <div className="flex-col flex flex-1 ">
            <label className="block" htmlFor="">
              Phone:
            </label>
            <input
              className="bg-gray-100 border-b border-gray-500 focus:outline-none rounded-lg mt-2 "
              type="tel"
            />
          </div>
        </div>
        <div className="flex gap-16 justify-between">
          <div className="flex-col flex flex-1 ">
            <label className="block" htmlFor="address ">
              Address:
            </label>
            <input
              className="bg-gray-100 border-b border-gray-500 focus:outline-none rounded-lg mt-2 "
              id="address"
              type="text"
            />
          </div>
          <div className="flex-col flex flex-1  ">
            <label for="services" class="block">
              select a service
            </label>
            <select
              id="services"
              className="bg-gray-100 border-b  rounded-lg border-gray-500 focus:outline-none  mt-2 "
            >
              {/* <option selected>select a service</option> */}
              <option value="US">service1</option>
              <option value="CA">service2</option>
              <option value="FR">service3</option>
              <option value="DE">service4</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="py-2 px-8 text-white hover:bg-[#1BA5C1] bg-[#1ba5c1cb] transition-[0.3] rounded-2xl">
            {" "}
            Send Message{" "}
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${contact_cargo})`,
        }}
        className="flex flex-col gap-12 py-12 flex-[0.5] bg-cover h-[500px] box-border text-left text-white rounded-3xl w-full  "
      >
        <h1 className="text-3xl  px-4">company details</h1>
        <p className="text-left text-sm px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui
          sit eveniet illo odio quae repudiandae ex corporis error voluptatum,
          veritatis eos reprehenderit velit consequatur! Quidem repellat nam
          reprehenderit ullam.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
