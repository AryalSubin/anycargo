import React from "react";
import bgImage from "../../assets/contactUs/bg-image.png";
import contact_cargo from "../../assets/contactUs/contact_cargo.jpg";

const ContactUs = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "white",
      }}
      className="  flex px-20 gap-8 py-16  "
    >
      <div className="flex flex-col flex-1 text-sm text-gray-400 h-[400px] p-4 gap-8 rounded-3xl bg-white border border-gray-400 ">
        <h1 className="text-xl text-black font-semibold">Personal Data</h1>
        <div className="flex justify-between gap-8">
          <div className="flex w-full flex-col">
            <label htmlFor="name">First Name</label>
            <input
              className="p-2  border border-gray-500 rounded-md"
              type="text"
              placeholder="Your first name*"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="name">Last Name</label>
            <input
              className="p-2 border border-gray-500 rounded-md"
              type="text"
              placeholder="Your last name*"
            />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex w-full flex-col">
            <label htmlFor="name">Phone</label>
            <input
              className="p-2  border border-gray-500 rounded-md"
              type="tel"
              placeholder="Phone*"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="name">Email</label>
            <input
              className="p-2 border border-gray-500 rounded-md"
              type="email"
              placeholder="Your email*"
            />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex w-full flex-col">
            <label htmlFor="name">Phone</label>
            <input
              className="p-2  border border-gray-500 rounded-md"
              type="tel"
              placeholder="Phone*"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="services">Services</label>
            <select
              className="p-2  border border-gray-500 rounded-md"
              name="services"
              id="services"
            >
              {servicesData.map((service) => (
                <option value={service} key={service.id}>
                  {service.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${contact_cargo})`,
        }}
        className="flex flex-col justify-between gap-12 py-2 flex-[0.5] bg-cover h-[400px] box-border text-left text-white rounded-3xl w-full  "
      >
        <div className="">
          <h1 className="text-xl  px-4">company details</h1>
          <p className="text-left text-gray-300 text-xs mt-4 px-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui
            sit eveniet illo odio quae repudiandae ex corporis error voluptatum,
            veritatis eos reprehenderit velit consequatur! Quidem repellat nam
            reprehenderit ullam.
          </p>
        </div>
        {/* socials  */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="p-2 border cursor-pointer border-gray-500 bg-white rounded-full">
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
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
                <g id="XMLID_834_">
                  {" "}
                  <path
                    id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="p-2 border cursor-pointer border-gray-500 bg-white rounded-full">
            <svg
              width="30px"
              height="30px"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#0F0F0F"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="p-2 border cursor-pointer border-gray-500 bg-white rounded-full">
            <svg
              width="30px"
              height="30px"
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
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="#0F0F0F"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="p-2 border cursor-pointer border-gray-500 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const servicesData = [
  {
    id: 1,
    text: "Import / Export",
    content:
      "Facilitating smooth import and export operations with global reach and local expertise.",
  },
  {
    id: 2,
    text: "International shipping  ",
    text1: "(Air / Sea / Land)",
    content:
      "Connecting continents with reliable and efficient international shipping services, tailored to meet your global trade needs.",
  },
  {
    id: 3,
    text: "Project Management",
    content:
      "Delivering your projects on time and within budget through meticulous planning and execution.",
  },
  {
    id: 4,
    text: "Supply Chain Management",
    content:
      "Optimizing your supply chain for efficiency and resilience, from supplier to customer.",
  },
  {
    id: 5,
    text: "Custom Brokerage ",
    content:
      "Navigating complex customs regulations for you, ensuring fast and compliant clearance.",
  },
  {
    id: 6,
    text: "Transition / Haulage",
    content:
      "Providing reliable and efficient haulage solutions for the seamless transition of your goods.",
  },
  {
    id: 7,
    text: "Modern Warehousing",
    content:
      "State-of-the-art warehousing solutions that keep your inventory safe, organized, and accessible.",
  },
  {
    id: 8,
    text: "Collection / Packaging / Distribution",
    content:
      "Expert handling, packaging, and distribution services to ensure your products reach their destination in pristine condition.",
  },
  {
    id: 9,
    text: "Insurance",
    content:
      "Offering comprehensive insurance options to protect your cargo against all risks during transit.",
  },
  {
    id: 10,
    text: "Door to Door Express Courier",
    content:
      "Speedy, reliable door-to-door express courier services for when time is of the essence.",
  },
];
