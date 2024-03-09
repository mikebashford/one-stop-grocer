import React, { useState } from "react";
import ShopOptionsList from "./ShopOptionsList";
import { useShoppingCart } from "./../utils/shoppingCart";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex flex-col z-10">
      <div className="flex flex-wrap bg-green-700 text-white p-4 justify-center">
        <a href="/" className="font-bold uppercase text-4xl">
          One Stop Grocer
        </a>
      </div>
      <div className="navbar flex flex-wrap bg-green-700 text-white p-4">
        <div className="flex flex-wrap me-auto ms-24 max-xl:ms-12 max-md:ms-2 max-md:flex-nowrap max-md:space-x-8 space-x-12">
          <button
            className="flex"
            onMouseEnter={handleSidebar}
            onClick={handleSidebar}
          >
            Shop
          </button>
          <div className="flex ms-8 w-80 h-8 relative">
            <label htmlFor="search-input" className="flex"></label>
            <input
              type="search"
              placeholder="Search"
              className="flex w-80 rounded-xl p-2 text-black shadow-md"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="flex items-center justify-end rounded-r-2xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    stroke="currentColor"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
        <div className="flex max-md:w-full">
          <ul className="flex justify-center max-xl:me-8 max-md:mt-8 items-center list-none space-x-8 max-md:w-full">
            <li>
              <a href="/login">Log in</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/cart" onClick={openCart}>
                <svg
                  fill="#ffffff"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 902.86 902.86"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />{" "}
                        <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z" />{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div className="rounded-full w-5 h-5 bg-blue-500 flex justify-center items-center absolute -translate-y-3/4 translate-x-1/2">
                  {cartQuantity}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ShopOptionsList
        isSidebarOpen={isSidebarOpen}
        handleSidebar={handleSidebar}
      />
    </div>
  );
}
