import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>

      <a style={{color: "white"}}className="nav-brand nav-link" id="savedBooks" href="/saved">Saved Books</a>
    </nav>
  );
}

export default Nav;
