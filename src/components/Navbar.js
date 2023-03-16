import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i class={icon}></i> {title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
