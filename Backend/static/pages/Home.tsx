import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturedItems from "../components/FeaturedItems";
import CategoryItems from "./../components/CategoryItems";
export default function Home() {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex flex-col h-dvh">
      <Navbar />
      <div className="flex flex-row justify-center">
        <p className="mt-12 font-bold text-3xl">Featured Deals</p>
      </div>
      <div className="flex justify-center">
        <FeaturedItems />
      </div>
      <div className="flex justify-center">
        <CategoryItems />
      </div>
      <Footer />
    </div>
  );
}
