import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Link } from "@reach/router";
export default class NavBar extends Component {
  constructor(p) {
    super(p);
    this.link1 = React.createRef();
    this.link2 = React.createRef();
  }
  moveBubble = num => {
    const style =
      num === 1
        ? window.getComputedStyle(this.link1.current)
        : window.getComputedStyle(this.link2.current);
    //this.link2.current.classList.add("animate");
    console.log(style);
  };
  render() {
    console.log(this.link1);
    return (
      <Appbar id="NavBar">
        <h1>The almighty setup guide</h1>
        <nav>
          <Link
            to="/"
            onClick={() => {
              this.moveBubble(1);
            }}
          >
            <span ref={this.link1}>1</span> Setup
          </Link>
          <Link
            to="/instructions"
            onClick={() => {
              this.moveBubble(2);
            }}
          >
            <span ref={this.link2}>2</span> Instructions
          </Link>
        </nav>
      </Appbar>
    );
  }
}
