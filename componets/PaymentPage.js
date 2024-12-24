"use client";

import React, { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import { CgProfile } from "react-icons/cg";
import { fetchuser, fetchPayments } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { initiate } from "@/actions/useractions";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Stabilize the getData function with useCallback
  const getData = useCallback(async () => {
    let u = await fetchuser(username);
    setCurrentUser(u);

    let dbpayments = await fetchPayments(username);
    setPayments(dbpayments);
  }, [username]);

  // Fetch data when the component mounts or username changes
  useEffect(() => {
    getData();
  }, [getData]);

  // Handle payment success notification
  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("Payment Done!! Thanks for your donation", {
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

      router.push(`${username}`);
    }
  }, [searchParams, router, username]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "CreatorHub",
      description: "Test Transaction",
      order_id: orderId, // This is the order_id created in the backend
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, // Your success URL
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="min-h-[95vh]">
        <div className="relative">
          <div className="w-full ">
            <img
              className="w-full h-[40vh] object-cover"
              src={
                currentUser.coverpic
                  ? currentUser.coverpic
                  : "https://cdn.vectorstock.com/i/500p/58/43/black-chalkboard-background-vector-4305843.jpg"
              }
              alt="This is a cover picture"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute -bottom-16 md:left-[47%] left-[36%] size-36">
            <img
              width={500}
              height={500}
              className="size-36 object-cover rounded-full overflow-hidden border-2 border-white z-10 bg-black"
              src={
                currentUser.profilepic
                  ? currentUser.profilepic
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="bg-white h-1"></div>
        <div className="flex flex-col mt-16 justify-center items-center px-3">
          <div className="text-2xl font-bold mb-3">@{username}</div>
          <div className="text-lg text-slate-500">
            Lets help {username} with his creativity
          </div>
          <div className="text-lg text-slate-500 text-center">
            {payments.length} Payments have been made • {currentUser.name} has
            raised ₹{payments.reduce((a, b) => a + b.amount, 0) / 100}
          </div>
        </div>
        <div className="w-[80%] mx-auto flex gap-5 my-7 flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-800 min-h-72 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-4">Top Supporters</h2>
            <ul className="flex flex-col ml-8 gap-3">
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.slice(0, 8).map((p, i) => {
                return (
                  <li key={p.id || i} className="flex items-center gap-2">
                    <CgProfile />
                    <span>
                      {p.name} donated{" "}
                      <span className="font-bold">₹{p.amount / 100}</span> with
                      a message &quot;
                      <span className="text-slate-500 italic font-thin">
                        {p.message}
                      </span>
                      &quot;
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-800 min-h-72 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-4">Make a Payment</h2>
            <div className="flex flex-col gap-3">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                className="bg-slate-900 py-2 px-5 rounded-lg outline-none focus:bg-slate-700"
                type="text"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                className="bg-slate-900 py-2 px-5 rounded-lg outline-none focus:bg-slate-700"
                type="text"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                className="bg-slate-900 py-2 px-5 rounded-lg outline-none focus:bg-slate-700"
                type="number"
                min="0"
                placeholder="Enter Amount"
              />
              <button
                className="button-style mt-2 disabled:bg-gray-400"
                disabled={
                  paymentform.name?.length < 1 ||
                  paymentform.message?.length < 1 ||
                  paymentform.amount?.length < 1
                }
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
              >
                Pay
              </button>
              <div className="payButtons flex gap-5 my-2">
                <button
                  className="bg-slate-700 py-2 px-3 rounded-lg border hover:bg-slate-600"
                  aria-label="Pay ₹10"
                  title="Pay ₹10"
                  onClick={() => pay(1000)}
                >
                  Pay ₹10
                </button>
                <button
                  className="bg-slate-700 py-2 px-3 rounded-lg border hover:bg-slate-600"
                  aria-label="Pay ₹20"
                  title="Pay ₹20"
                  onClick={() => pay(2000)}
                >
                  Pay ₹20
                </button>
                <button
                  className="bg-slate-700 py-2 px-3 rounded-lg border hover:bg-slate-600"
                  aria-label="Pay ₹30"
                  title="Pay ₹30"
                  onClick={() => pay(3000)}
                >
                  Pay ₹30
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
