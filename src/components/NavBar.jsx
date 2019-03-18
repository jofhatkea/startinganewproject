import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Link } from "@reach/router";
export default class NavBar extends Component {
  constructor(p) {
    super(p);
    this.link1 = React.createRef();
    this.link2 = React.createRef();
    this.mover = React.createRef();
  }
  state = {
    active: 1
  };
  //TODO: ved redirect trigger animationen ikke
  componentDidMount() {
    this.mover.current.addEventListener("animationend", e => {
      //TODO: refractor for multiple links
      if (this.state.active === 1) {
        this.mover.current.style.left =
          this.link2.current.getBoundingClientRect().x + "px";
        this.setState({
          active: 2
        });
      } else if (this.state.active === 2) {
        this.mover.current.style.left =
          this.link1.current.getBoundingClientRect().x + "px";
        this.setState({
          active: 1
        });
      }
      this.mover.current.classList.remove("animateRight");
      this.mover.current.classList.remove("animateLeft");
    });
  }
  //num: hvor skal der flyttes til
  moveBubble = num => {
    //TODO: refractor for multiple links
    if (num === 1 && this.state.active === 2) {
      this.mover.current.style.setProperty("--width", "270px");
      this.mover.current.style.setProperty("--translateX", "-250px");
      this.mover.current.classList.add("animateLeft");
    } else if (num === 2 && this.state.active === 1) {
      this.mover.current.style.setProperty("--width", "270px");
      this.mover.current.style.setProperty("--translateX", "250px");
      this.mover.current.classList.add("animateRight");
    }
  };
  render() {
    return (
      <Appbar id="NavBar">
        <h1>The almighty setup guide</h1>
        <nav>
          <span className="mover" ref={this.mover}>
            {this.state.active}
          </span>
          <span ref={this.link1}>1</span>
          <Link
            to="/"
            onClick={() => {
              this.moveBubble(1);
            }}
          >
            Setup
          </Link>
          <span ref={this.link2}>2</span>
          <Link
            to="/instructions"
            onClick={() => {
              this.moveBubble(2);
            }}
          >
            Instructions
          </Link>
        </nav>
      </Appbar>
    );
  }
}
