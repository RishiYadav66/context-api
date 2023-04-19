import React from "react";

const Product = ({ prod, cart, setcart }) => {
  return (
    <div className="max-w-sm shadow-xl rounded-xl overflow-hidden m-4">
      <img src={prod.image} />
      <div className="flex justify-between p-4 m-2">
        <p className="font-bold text-md">{prod.name}</p>
        <p className="font-bold text-md">${prod.price}</p>
      </div>
      {cart.includes(prod) ? (
        <button
          onClick={() => {
            setcart(cart.filter((c) => c.id !== prod.id));
          }}
          className="flex w-full justify-center p-4 font-bold text-lg bg-gray-200"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setcart([...cart, prod]);
          }}
          className="flex w-full justify-center p-4 font-bold text-lg bg-gray-200"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
