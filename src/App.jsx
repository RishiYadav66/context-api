import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setcart] = useState([]);
  return (
    <div className="m-0">
      <BrowserRouter>
        <Header cart={cart} setcart={setcart} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home cart={cart} setcart={setcart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setcart={setcart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
