import React from "react";

export default function Footer() {
  const footerStyle = {
    textAlign: "center",
    padding: "2rem 0"
  };

  return (
    <div className="footer" style={footerStyle}>
      <h4>
        Coded with <i className="fas fa-heart" style={{ color: "red" }}></i> by{" "}
        <a href="https://segunos.tk">SegunOS</a>{" "}
      </h4>
    </div>
  );
}
