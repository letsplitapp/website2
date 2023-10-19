import React, { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";

// Nav
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="bg-blue">
        <div
          className={`burger${toggle ? " open" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <div className="bars"></div>
        </div>
        <div className="container">
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Let's split" width={40} height={40} />
                Let’s Split
              </Link>
            </div>
          </div>
          <div className={`right${toggle ? " open" : ""}`}>
            <Link to="/#how">How it works</Link>
            <Link to="/support/">Support</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
