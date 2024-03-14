import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Review from "./components/review/Review";

function App() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <Landing />
      <About />
      <OurServices />
      <Review />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
