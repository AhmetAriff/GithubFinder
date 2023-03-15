import React from "react";

const Alert = ({ error }) => {
  return (
    error != null && (
      <div className="container">
        <div className={`alert alert-${error.type}`}>{error.msg}</div>
      </div>
    )
  );
};

export default Alert;
