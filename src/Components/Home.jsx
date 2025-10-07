import React from "react";
import { Facebook, Twitter, Linkedin, Dribbble } from "lucide-react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-white to-[#f8f5f5]">
      {/* === Left Text Section === */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h3 className="text-orange-500 text-2xl font-semibold">Hello, I'm</h3>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          James Smith
        </h1>

        <p className="text-lg text-gray-600">
          A{" "}
          <span className="text-green-500 font-medium">FrontEnd Developer</span>{" "}
          
        </p>

        <p className="text-gray-500 max-w-md mx-auto md:mx-0">
          I'm a creative designer based in New York, and I'm very passionate and
          dedicated to my work.
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-5 pt-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium">
            About Me
          </button>

          {/* === Social Icons === */}
          <div className="flex space-x-3 text-gray-600">
            <a href="#" className="hover:text-orange-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Dribbble size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* === Right Image Section === */}
      <div className="flex-1 flex justify-center relative mt-10 md:mt-0">
        <div className="relative">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-72 md:w-96 object-cover shadow-xl"
          />

          {/* Floating icons (static now) */}
          <img
            src="/ai.png"
            alt="AI"
            className="absolute top-6 -left-10 w-12"
          />
          <img
            src="/ps.png"
            alt="PS"
            className="absolute top-6 -right-10 w-12"
          />
          <img
            src="/figma.png"
            alt="Figma"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
