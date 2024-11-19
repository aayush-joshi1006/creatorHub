import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";
import SessionWrapper from "./componets/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CreatorHub",
  description: "CreatorHub is a crowdfunding platform for projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <SessionWrapper>
        <NavBar />
        <div className="bg-black text-white min-h-[86.5vh]">
        {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
