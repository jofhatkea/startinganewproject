import React, { Component } from "react";
import Git from "./Git";
import Nodemodules from "./Nodemodules";
import Sass from "./Sass";
import Eslint from "./Eslint";
export default class InstructionsContainer extends Component {
  state = {
    forceParcel: false
  };
  componentDidMount() {
    //if() nodemodules chosen: force parcel
    this.setState({
      forceParcel: true
    });
  }
  render() {
    const options = {
      git: Git,
      sass: Sass,
      eslint: Eslint,
      node_modules: Nodemodules
    };
    const chosen = this.props.data.map(item => {
      const SpecificStory = options[item.key];
      return <SpecificStory story={item} isParcel={this.state.forceParcel} />;
    });
    return (
      <section id="InstructionsContainer">
        <h1>Instructions</h1>
        {chosen}
      </section>
    );
  }
}
