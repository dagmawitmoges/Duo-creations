// React
import { useState } from "react";

// local imports
import heroImage from "../assets/bg6.jpg";
import logo from "../assets/download.png";
import contact from "../assets/contact.png";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Landing = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="h-screen relative flex flex-col items-center "
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      
      <div
        className="relative w-full max-w-[1390px]  flex justify-between  "
      >
        <img src={logo} alt="" 
        
        style={{width:100, marginLeft:-50 , marginTop:25, }}
        
        />
        <div  className="relative w-full  flex 
        items-center justify-between  mx-auto  "style={{marginLeft:250 , marginTop:25, }} >
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="location">Location</NavLink>
          <NavLink to="reference">Events</NavLink>
          <NavLink to="reference">Events</NavLink>

          <NavLink to="book">Book</NavLink>
        </ul>

        <img src={contact} className="hidden md:block cursor-pointer" alt="" style={{marginLeft:250 , marginTop:-15 , width:50,}} />

        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
</div>
        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="locations" mobileMenu>
              location
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="book" mobileMenu>
              book
            </NavLink>
          </ul>

          <img src={contact} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white
              text-base xs:text-lg placeholder-white"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Landing;