import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
export default class NavBar extends Component {
  render() {
    return (
      <Appbar id="NavBar">
        <h1>The almighty setup guide</h1>
      </Appbar>
    );
  }
}
