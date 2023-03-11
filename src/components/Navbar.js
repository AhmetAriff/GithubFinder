import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i class={this.props.icon}></i> {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
