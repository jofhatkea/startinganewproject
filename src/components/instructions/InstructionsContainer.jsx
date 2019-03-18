import React, { Component } from "react";
import Git from "./Git";
import Nodemodules from "./Nodemodules";
import Sass from "./Sass";
import Eslint from "./Eslint";
import Commands from "./Commands";
import Aftermath from "./Aftermath";

export default class InstructionsContainer extends Component {
  state = {
    hasRunNPMInit: false,
    commands: [],
    aftermath: []
  };
  addCommand = command => {
    this.setState(prevState => ({
      commands: prevState.commands.concat(command)
    }));
  };
  addAftermath = command => {
    this.setState(prevState => ({
      aftermath: prevState.aftermath.concat(command)
    }));
  };

  render() {
    const filtered = this.props.questions.filter(q => {
      return this.props.chosen.includes(q.key);
    });
    const npmINITCandidates = ["eslint", "node_modules", "sass"];
    let whoShouldRunINPInit = filtered.find(candidate =>
      npmINITCandidates.includes(candidate.key)
    );
    if (!whoShouldRunINPInit) {
      whoShouldRunINPInit = { key: "" };
    }
    const isParcel = this.props.chosen.includes("node_modules");

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
          addAftermath={this.addAftermath}
        />
      );
    });
    return (
      <section id="InstructionsContainer">
        <h1>Instructions</h1>
        {chosen.length === 0 && (
          <h3>Chose a few setup options, then come back :-)</h3>
        )}
        {chosen.length > 0 && (
          <>
            <p>Step by step instructions</p>
          </>
        )}
        {chosen}

        <hr />
        <h3>I've done this stuff before, just give me the commands</h3>
        {chosen.length > 0 && <Commands commands={this.state.commands} />}
        <h3>Checklisty kind of reference</h3>
        {chosen.length > 0 && <Aftermath aftermath={this.state.aftermath} />}
        {/*TODO:*/}
        {/* post notes container (add this to scripts, how to "live-server") */}
        {/*additional steps needed (like sass watch)*/}
        {/*While developing container*/}
      </section>
    );
  }
}
