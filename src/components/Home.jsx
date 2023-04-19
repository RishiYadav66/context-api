import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "./Product";

faker.seed(100);

const Home = ({ cart, setcart }) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(),
  }));
  console.log(productArray);

  const [products] = useState(productArray);

  console.log(cart);
  return (
    <div>
      <div className="flex justify-center flex-wrap m-5">
        {products.map((prod) => (
          <Product prod={prod} cart={cart} setcart={setcart} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
