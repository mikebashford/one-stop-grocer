import React from "react";

export default function ShopOptionsList({
  isSidebarOpen,
  handleSidebar,
}: {
  isSidebarOpen: boolean;
  handleSidebar: () => void;
}) {
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bread",
    "Meat",
    "Snacks",
    "Canned Goods",
    "Frozen",
  ];
  return (
    <div
      className={`${isSidebarOpen ? "flex" : "hidden"}  `}
      onMouseLeave={handleSidebar}
    >
      <div className="flex flex-col absolute rounded-br-3xl rounded-bl-3xl left-16 max-lg:left-0 w-48 bg-green-700 text-white p-4 z-1">
        <p className="text-2xl font-bold mb-4">Categories</p>
        <ul className="list-none">
          {categories.map((category) => (
            <li className="mb-2 hover:bg-green-500" key={category}>
              <button>{category}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
