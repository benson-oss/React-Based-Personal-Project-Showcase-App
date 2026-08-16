import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-page">
      <h1>Welcome to Product Admin</h1>
      <p>
        This site helps you manage products — add new items, search your catalog,
        edit details, and keep everything organized in one place.
      </p>
      <Link to="/products" className="cta-button">
        View Products
      </Link>
    </div>
  );
}