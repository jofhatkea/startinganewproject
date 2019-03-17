import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Link } from "@reach/router";
export default class NavBar extends Component {
  render() {
    return (
      <Appbar id="NavBar">
        <h1>The almighty setup guide</h1>
        <nav>
          <Link to="/">
            <span>1</span> Setup
          </Link>
          <Link to="/instructions">
            <span>2</span> Instructions
          </Link>
        </nav>
      </Appbar>
    );
  }
}
