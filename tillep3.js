// const divDig = React.createElement("div",{id: "parent"},
// React.createElement("div", {id: "child"},
//component composition (calling another function inside other function)
// [React.createElement("h1", {id: "h1"}, "This is the first nested h1 tag"), React.createElement("h2", {id: "h2"}, "This is the second nested h2 tag"),React.createElement("p",{id: "p"}, "today i have done some fruitful task")]))
import React from "react";
import ReactDOM from "react-dom/client";
import img from "./dist/images.ba783d93.jpeg";
import profile from "./dist/user icon.png";
import "./index.css";

const Body = () => (
   <>
<header className="header">
   <div className="left">
      <img src={img} alt="company logo" />
   </div>
   <div className="center">
      <img src="https://www.zoopindia.com/_next/image?url=%2Fbanner_21_dec_23.webp&w=580&q=75" />

      <input className="input" type="text" placeholder="Search anything that you want">

      </input>
      <button className="submit">
      <i class="fa fa-search"></i>
      </button>
   </div>
   <div className="right">
      <img src={profile} alt="profilelogo" />
   </div>
</header>
   </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
