import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import featuredItems from "./../data/featuredItems.json";
import allItems from "./../data/allItems.json";
import { formatCurrency } from "./../utils/formatCurrency";
import { useShoppingCart } from "../utils/shoppingCart";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  let filteredItems = allItems.filter(
    (item) => !featuredItems.find((featured) => featured[item])
  );
  console.log(filteredItems);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center mx-24 min-h-screen">
        <div className="flex flex-col justify-center">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-12 font-bold text-3xl">Total Due</h1>
          <div className="font-bold text-xl mb-12">
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = filteredItems.find(
                  (item) => item.id === cartItem.id
                );
                return total + (item?.salePrice || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
