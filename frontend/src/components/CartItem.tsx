import { useShoppingCart } from "./../utils/shoppingCart";
import featuredItems from "./../data/featuredItems.json";
import { formatCurrency } from "./../utils/formatCurrency";
import allItems from "./../data/allItems.json";
type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  let filteredItems = allItems.filter(
    (item) => !featuredItems.find((featured) => featured[item])
  );
  console.log(filteredItems);
  const item = filteredItems.find((item) => item.id === id);
  console.log(item);
  //const item = featuredItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center justify-between max-md:flex-col my-24 max-md:my-12">
      <div className="flex items-center w-full justify-start max-md:justify-center max-md:ms-12">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-32 rounded-lg object-cover me-12 max-md:me-0"
        />
        <p className="text-lg font-medium text-slate-900 me-24 max-md:mt-4 max-md:ms-4">
          {item.name}
        </p>
        <p className="text-sm text-slate-900 me-24 max-md:flex max-md:mt-4">
          {formatCurrency(item.salePrice)}
        </p>
      </div>
      <div className="flex items-center w-1/2 justify-center text-sm text-slate-900 max-md:mt-6">
        {item.name}
        {quantity > 0 && ` x ${quantity}`}
      </div>
      <div className="flex items-center w-1/4 justify-center text-sm text-slate-900 max-md:mt-2 line-through">
        {formatCurrency(item.price)}
      </div>
      <div className="flex items-center w-1/4 justify-center text-lg font-medium text-slate-900 max-md:mt-4 ">
        {formatCurrency(item.salePrice * quantity)}
      </div>
      <div>
        <button
          className="max-md:mt-4 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
