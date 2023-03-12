import React, { Component } from "react";

export class Alert extends Component {
  render() {
    return (
      this.props.error != null && (
        <div className="container">
          <div className={`alert alert-${this.props.error.type}`}>
            {this.props.error.msg}
          </div>
        </div>
      )
    );
  }
}

export default Alert;
