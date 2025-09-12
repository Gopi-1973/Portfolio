import React from "react";
import  hero  from "../assets/profile.jpg"
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Hero = () => {
  return (
      <section id="Home" className="  bg-gradient-to-r from -blue-300 to-blue-200 pt-50 pb-30 ">
      <div className="container mx-auto grid  md:grid-cols-2  gap-20">
      <div className="flex flex-col justtify-center items-center text-center mt-20">
      <h3 className=" text-gray-500  text-2xl md:text-5xl font-bold leading-20">
        Hello, Myself
      </h3>
      <h1 className="text-3xl md:text-6xl font-bold text-gray-500">
        Gopi Pandey
      </h1>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-500 leading-20">
        And I'am a <span className="text-cyan-600"> Web Developer</span>
      </h3>
      <p className="mt-4 text-md md:text-xl font-sans text-gray-500 ">
        Passionate Full Stack Developer,with 1 years <br /> of experience as a
        Frontend Developer and <br /> good knowledge of Backend with Python
        Django.
      </p>
      <div className="flex gap-4 mt-4">
        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300 text-[#1877F2] hover:bg-cyan-500">
          <CiFacebook size={26} />
        </div>

        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300  text-[#E4405F] hover:bg-cyan-500">
          <SlSocialInstagram size={22}/>
        </div>

        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300  text-[#0A66C2] hover:bg-cyan-500">
          <SlSocialLinkedin size={22}/>
        </div>

        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300  text-[#1DA1F2] hover:bg-cyan-500">
          <SlSocialTwitter size={22}/>
        </div>

        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300  text-[#25D366] hover:bg-cyan-500">
          <FaWhatsapp size={26}/>
        </div>

        <div className="w-10 h-10 border border-blue-400 flex items-center justify-center rounded-full bg-cyan-300  text-[#FF0000] hover:bg-cyan-500">
          <CiYoutube  size={24}/>
        </div>
      </div>
      </div>

      <div>
        <img src={hero} alt="hero-pic" className="w-[450px] h-[450px] rounded-full mx-auto"/>
      </div>
      </div>
    </section>

  );
};

export default Hero;
