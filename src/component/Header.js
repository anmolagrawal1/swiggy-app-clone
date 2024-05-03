import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnreact, setbtnreact] = useState("Login");
  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-400 h-30 shadow-md m-4  border-r-5 ">
      <div className="companyLogo">
        <img className="w-60" src={LOGO_URL} alt="logo" />
      </div>
      <div className="pr-16 font-sans flex items-center">
        <ul className="flex p-4 m-4 font-medium  text-2xl">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex w-12/12">
                <div className="w-10/12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart4  w-16 h-10 mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
              </div>
              <div className="-m-3">
              ({cartItems.length})
              </div>
              </div>
            </Link>
            {/* <li className="m-4">- ({cartItems.length} Items)</li> */}
          </li>

          <button
            className="px-5 mx-5"
            onClick={() => {
              btnreact === "Login"
                ? setbtnreact("Logout")
                : setbtnreact("Login");
            }}
          >
            {btnreact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
