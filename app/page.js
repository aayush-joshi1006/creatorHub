import { CiGift } from "react-icons/ci";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-[86.5vh]">
        <div className="h-[60vh] flex flex-col container mx-auto justify-center items-center gap-6 ">
          <div className="md:text-6xl text-5xl flex justify-center items-center md:gap-4 gap-1">
            <span className="text-center">Fuel the Creativity</span>
            <CiGift />
          </div>
          <div className="md:text-2xl text-xl text-center px-4 font-extralight">
            A crowdfunding platform for creator. Get funded from people who want
            to be contribute. Start now...
          </div>
          <div className="buttons flex justify-center items-center gap-5">
            <Link href={"/login"}>
              <button className="button-style">Start here</button>
            </Link>
            <Link href={"/about"}>
              <button className="button-style">Read More</button>
            </Link>
          </div>
        </div>

        <div className="bg-white h-1"></div>

        <div className="md:h-[60vh] my-3 container mx-auto flex flex-col justify-center md:gap-32 gap-4">
          <div className="font-bold text-4xl text-center">
            Your Community can contribute
          </div>
          <div className=" flex justify-around flex-col md:flex-row items-center gap-4 pb-3">
            <div className="flex flex-col  justify-center items-center gap-2">
              <div className="bg-gray-800 cursor-pointer rounded-full p-5 text-6xl">
                <BsPersonWorkspace />
              </div>
              <div className="text-xl font-bold">want to help</div>
              <div>people who want to help you</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-gray-800 cursor-pointer rounded-full p-5 text-6xl">
                <RiMoneyDollarCircleLine />
              </div>
              <div className="text-xl font-bold">want to contribute</div>
              <div>people who want to contribute financially</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-gray-800 cursor-pointer rounded-full p-5 text-6xl">
                <IoIosPeople />
              </div>
              <div className="text-xl font-bold">want to collaborate</div>
              <div>people who want to collaborate</div>
            </div>
          </div>
        </div>

        <div className="bg-white h-1"></div>

      
        <div className="h-[60vh] container mx-auto flex flex-col justify-center items-center gap-12">
          <div className="font-bold text-4xl">Learn More About Me</div>
          <div className="text-center px-4 md:px-8 text-lg text-gray-300">
            CreatorHub is not just a platform—it's a vision. As the creator of
            this space, I believe in empowering people to share their
            creativity, connect with communities, and bring their ideas to life.
            Whether you're a creator seeking support, a collaborator looking for
            partnerships, or someone who simply wants to make an impact,
            CreatorHub is here to make that possible. Join me on this journey to
            fuel creativity and build something extraordinary together!
          </div>
        </div>

        <div className="bg-white h-1"></div>
      </div>
    </>
  );
}
