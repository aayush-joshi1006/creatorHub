import React from "react";
import PaymentPage from "../componets/PaymentPage";
import { notFound } from "next/navigation";
import User from "@/app/models/User";

const Username = async ({ params }) => {
  const checkUser = async () => {
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
  };
  await checkUser();
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `${params.username} - CreatorHub`,
  };
}
