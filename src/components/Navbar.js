import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i class={props.icon}></i> {props.title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
