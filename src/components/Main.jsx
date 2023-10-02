import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-bottom scale-x-[-1]"
        src="https://images.unsplash.com/photo-1610719941783-77f2371b57b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Man Alone"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Shiva Kumar Sunki</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Mobile App Developer",
                1000,
                "Python Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <FaTwitter size={20} className="cursor-pointer" />
              <FaFacebook size={20} className="cursor-pointer" />
              <FaInstagram size={20} className="cursor-pointer" />
              <FaLinkedin size={20} className="cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
