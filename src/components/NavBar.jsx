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
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps.step, this.props.step);
    if (prevProps.step !== this.props.step) {
      this.moveBubble(this.props.step);
    }
  }
  //FIXME: add comments, this is so strange
  componentDidMount() {
    this.mover.current.addEventListener("animationend", e => {
      //FIXME: refractor for multiple links
      if (this.props.step === 2) {
        this.mover.current.style.left =
          this.link2.current.getBoundingClientRect().x + "px";
      } else if (this.props.step === 1) {
        this.mover.current.style.left =
          this.link1.current.getBoundingClientRect().x + "px";
      }
      this.mover.current.classList.remove("animateRight");
      this.mover.current.classList.remove("animateLeft");
    });
  }
  //num: hvor skal der flyttes til
  moveBubble = num => {
    //FIXME: refractor for multiple links
    if (num === 1) {
      // && this.props.step === 2
      this.mover.current.style.setProperty("--width", "270px");
      this.mover.current.style.setProperty("--translateX", "-250px");
      this.mover.current.classList.add("animateLeft");
    } else if (num === 2) {
      // && this.props.step === 1
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
            {this.props.step}
          </span>
          <span ref={this.link1}>1</span>
          <Link
            to="/"
            onClick={() => {
              this.props.onStepChange(1);
            }}
          >
            Setup
          </Link>
          <span ref={this.link2}>2</span>
          <Link
            to="/instructions"
            onClick={() => {
              this.props.onStepChange(2);
            }}
          >
            Instructions
          </Link>
        </nav>
      </Appbar>
    );
  }
}
