import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-black text-white min-h-[89.5vh]">
      <div className="container mx-auto flex flex-col justify-center items-center py-16 px-6 gap-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          About CreatorHub
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl leading-relaxed">
          Welcome to <strong>CreatorHub</strong>, a crowdfunding platform built
          to empower creators and innovators. Here, we believe that creativity
          thrives in collaboration, and that great ideas can flourish when given
          the right support. CreatorHub enables individuals to share their
          visions, connect with communities, and receive funding from those who
          believe in their ideas.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg w-72">
            <div className="text-6xl text-gray-400 mb-4">
              <BsPersonWorkspace className="size-9" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Help Creators</h2>
            <p className="text-gray-300">
              Join a community that supports creators in achieving their goals
              by offering guidance and expertise.
            </p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg w-72">
            <div className="text-6xl text-gray-400 mb-4">
              <RiMoneyDollarCircleLine />
            </div>
            <h2 className="text-xl font-semibold mb-2">Financial Support</h2>
            <p className="text-gray-300">
              Empower creators by contributing financially to turn their dreams
              into reality.
            </p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg w-72">
            <div className="text-6xl text-gray-400 mb-4">
              <IoIosPeople />
            </div>
            <h2 className="text-xl font-semibold mb-2">Collaborate</h2>
            <p className="text-gray-300">
              Work together with passionate individuals to bring amazing ideas
              to life.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-16 w-full md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At CreatorHub, our mission is simple: to create a platform where
            creators can thrive. We aim to bridge the gap between great ideas
            and the resources they need to succeed. Whether it’s financial
            support, collaboration, or community guidance, CreatorHub is here to
            turn visions into realities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - CreatorHub",
};