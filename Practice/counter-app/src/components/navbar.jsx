import React, { Component } from "react";

// Stateless Fiunctional Components

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light navbar-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
