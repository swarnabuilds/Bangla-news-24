import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
 
  subsets: ["latin", "bengali"],
});

 

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "see all latest news ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBengali}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
      <Marquee />

        <main>{children}</main>
        <Footer></Footer>
        </body>
    </html>
  );
}
