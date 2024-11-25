"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser,updateProfile } from "../actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";


const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

   const getData = useCallback(async () => {
     if (session?.user?.name) {
       let u = await fetchuser(session.user.name);
       setform(u);
     }
   },[session]);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session, router,getData]);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    let a = await updateProfile(form, session.user.name);
    toast("Profile Updated", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="min-h-[89.5vh] flex justify-center items-center">
        <form
          className="bg-white text-black flex flex-col items-center justify-center md:w-[30%] m-auto gap-4 p-7 rounded-xl"
          action={handleSubmit}
        >
          <h1 className="font-bold text-3xl">Welcome to the Dashboard</h1>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              value={form.name ? form.name : ""}
              type="text"
              name="name"
              onChange={handleChange}
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              id="name"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              value={form.email ? form.email : ""}
              name="email"
              type="text"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="username" className="font-bold">
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              name="username"
              type="text"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="username"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="profile-picture" className="font-bold">
              Profile Picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              name="profilepic"
              type="text"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="profile-picture"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="cover-picture" className="font-bold">
              Cover Picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              type="text"
              name="coverpic"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="cover-picture"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="razorpay-id" className="font-bold">
              Razorpay ID
            </label>
            <input
              value={form.razorpayid ? form.razorpayid : ""}
              type="text"
              name="razorpayid"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="razorpay-id"
            />
          </div>
          <div className="flex flex-col w-[75%] mx-auto">
            <label htmlFor="razorpay-secret" className="font-bold">
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              type="password"
              name="razorpaysecret"
              className="border-2 outline-none w-full py-2 px-5 rounded-xl"
              onChange={handleChange}
              id="razorpay-secret"
            />
          </div>
          <button className="button-style w-[75%] mt-4">Save</button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
