import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="spinner-grow text-primary">
        <span className="sr-only"></span>
      </div>
    );
  }
}

export default Loading;
