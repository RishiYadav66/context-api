import React, { useEffect, useState } from "react";
import Product from "./Product";

const Cart = ({ cart, setcart }) => {
  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <h1 className="font-bold text-4xl px-5 py-3">My Cart</h1>
      <h2 className="font-medium text-2xl py-3 px-5">Total : ${total}</h2>

      <div className="flex flex-wrap flex-row">
        {cart.map((prod) => (
          <Product prod={prod} cart={cart} setcart={setcart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
