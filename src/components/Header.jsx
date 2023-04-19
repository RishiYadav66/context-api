import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <>
      <h1 className="flex font-bold text-3xl justify-center shadow-md bg-slate-200 p-2">
        React-Context-API
      </h1>
      <div className=" sticky shadow-md  flex justify-between p-5">
        <Link to="/">
          <h3 className="font-bold text-2xl p-3 cursor-pointer">Logo</h3>
        </Link>
        <Link to="/cart">
          <div className="font-bold text-2xl p-3 cursor-pointer">
            🛒 Cart ({cart.length})
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
