import React, { Component } from "react";
import Git from "./Git";
import Nodemodules from "./Nodemodules";
import Sass from "./Sass";
import Eslint from "./Eslint";
import Commands from "./Commands";
export default class InstructionsContainer extends Component {
  state = {
    hasRunNPMInit: false,
    commands: []
  };
  addCommand = command => {
    this.setState(prevState => ({
      commands: prevState.commands.concat(command)
    }));
  };

  render() {
    const filtered = this.props.questions.filter(q => {
      return this.props.chosen.includes(q.key);
    });
    const npmINITCandidates = ["eslint", "node_modules", "sass"];
    //TODO breaks if nobody should
    const whoShouldRunINPInit = filtered.find(candidate =>
      npmINITCandidates.includes(candidate.key)
    );
    const isParcel = this.props.chosen.includes("node_modules");
    //console.log(whoShouldRunINPInit);
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
          shouldRunNPMInit={whoShouldRunINPInit.key === item.key}
          isParcel={isParcel}
          addCommand={this.addCommand}
        />
      );
    });
    return (
      <section id="InstructionsContainer">
        <h1>Instructions</h1>
        {chosen}
        {chosen.length === 0 && (
          <h3>Chose a few technologies, then come back :-)</h3>
        )}
        {chosen.length > 0 && <Commands commands={this.state.commands} />}
        {/*TODO*/}
        {/* post notes container (add this to scripts, how to "live-server") */}
        {/*additional steps needed (like sass watch)*/}
        {/*While developing container*/}
      </section>
    );
  }
}
