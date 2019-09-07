import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" style={{ color: "white", marginLeft: 20 }}>
        React Reading List{" "}
      </Link>
      <Link to="/" style={{ color: "white", marginLeft: 20 }}>
        {" "}
        Home
      </Link>
      <Link to="/save" style={{ color: "white", marginLeft: 20 }}>
        Save
      </Link>
    </nav>
  );
}

export default Nav;
