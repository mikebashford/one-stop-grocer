import React from "react";
import allItems from "../data/allItems.json";
import featuredItems from "../data/featuredItems.json";
import Card from "./Card";

type CardProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  salePrice: number;
};
export default function CategoryItems({
  id,
  img,
  name,
  price,
  salePrice,
}: CardProps) {
  let filteredItems = allItems.filter(
    (item) => !featuredItems.find((featured) => item.id === featured.id)
  );
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {filteredItems.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.image}
          name={item.name}
          price={item.price}
          salePrice={item.salePrice}
        />
      ))}
    </div>
  );
}
