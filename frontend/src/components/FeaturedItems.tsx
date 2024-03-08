import React from "react";
import featuredItems from "../data/featuredItems.json";
import Card from "./Card";

type CardProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  salePrice: number;
};
export default function FeaturedItems({
  id,
  img,
  name,
  price,
  salePrice,
}: CardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {featuredItems.map((item) => (
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
