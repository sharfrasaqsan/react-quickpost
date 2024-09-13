import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div>
        <Link to="/">Quick Post</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
