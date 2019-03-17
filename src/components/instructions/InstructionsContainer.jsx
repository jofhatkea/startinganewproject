import React, { Component } from "react";
import Git from "./Git";
import Nodemodules from "./Nodemodules";
import Sass from "./Sass";
import Eslint from "./Eslint";
export default class InstructionsContainer extends Component {
  state = {
    isParcel: false,
    hasRunNPMInit: false
  };

  setIsParcel = e => {
    this.setState({
      isParcel: true
    });
  };
  setHasRunNPMInit = e => {
    this.setState({
      hasRunNPMInit: true
    });
  };
  render() {
    const filtered = this.props.questions.filter(q => {
      return this.props.chosen.includes(q.key);
    });
    const options = {
      git: Git,
      sass: Sass,
      eslint: Eslint,
      node_modules: Nodemodules
    };
    const chosen = filtered.map(item => {
      const SpecificStory = options[item.key];
      return (
        <SpecificStory
          story={item}
          key={item.key}
          hasRunNPMInit={this.state.hasRunNPMInit}
          isParcel={this.state.isParcel}
          onRunNPMInit={this.setHasRunNPMInit}
          onIsParcel={this.setIsParcel}
        />
      );
    });
    return (
      <section id="InstructionsContainer">
        <h1>Instructions</h1>
        {chosen}
        {/*TODO on empty selections*/}
        {/*additional steps needed (like sass watch)*/}
        {/*While developing container*/}
      </section>
    );
  }
}
