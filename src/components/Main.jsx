import React, { Component } from "react";
import Container from "muicss/lib/react/container";
export default class Main extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
