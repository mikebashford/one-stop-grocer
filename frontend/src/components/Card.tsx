import React from "react";
import { formatCurrency } from "./../utils/formatCurrency";
import { useShoppingCart } from "../utils/shoppingCart";

type CardProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  salePrice: number;
};
export default function Card({ id, img, name, price, salePrice }: CardProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div
      className="flex flex-col m-10 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg"
      key={id}
    >
      <img className="h-60 rounded-t-lg object-cover" alt={name} src={img} />
      <span className="absolute top-0 left-0 w-32 -translate-x-6 -translate-y-6 -rotate-45 bg-green-700 text-center text-sm text-white">
        Sale
      </span>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-slate-900">
          {name}
        </h5>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900 me-2">
              {formatCurrency(salePrice)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {formatCurrency(price)}
            </span>
          </p>
          <div className="flex">
            {quantity === 0 ? (
              <button
                className="flex flex-col items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={() => increaseCartQuantity(id)}
              >
                Add to cart
              </button>
            ) : (
              <div className="flex items-center justify-center w-full space-x-2">
                <button
                  className="flex border-2 border-green-700 rounded-md bg-green-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span className="text-2xl font-bold text-slate-900 mx-2">
                  {quantity}
                </span>
                <p className="text-sm text-slate-900 mx-2">in cart</p>
                <button
                  className="flex border-2 border-green-700 rounded-md bg-green-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
