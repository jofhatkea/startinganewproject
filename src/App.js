import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Step1 from "./components/steps/Step1";
import InstructionsContainer from "./components/instructions/InstructionsContainer";
import { Router, navigate } from "@reach/router";

export default class App extends Component {
  questions = [
    { q: "git", key: "git", d: "" },
    {
      q: "ESlint",
      key: "eslint",
      d:
        "(as in you've configured VS Code to use Prettier & ESLint, and would like the editor help you writing error free JS)"
    },
    { q: "node modules", d: ' (as in import x from "x")', key: "node_modules" },
    { q: "SASS", key: "sass", d: "" }
  ];
  state = {
    chosen: []
  };
  onChoice = e => {
    e.persist();
    if (e.target.checked) {
      this.setState(prevState => ({
        chosen: prevState.chosen.concat(e.target.value)
      }));
    } else {
      this.setState(prevState => ({
        chosen: prevState.chosen.filter(c => {
          return c !== e.target.value;
        })
      }));
    }
  };
  step1Submit = data => {
    /*console.log(data, this.questions);
    const newData = this.questions.filter(q => data.indexOf(q.key) > -1);
    this.setState(prevState => ({
      chosen: newData
    }));*/
    navigate(`/instructions`);
  };
  render() {
    return (
      <div className="App">
        <NavBar step={this.state.step} />
        <Main>
          <Router>
            <Step1
              path="/"
              onSubmit={this.step1Submit}
              questions={this.questions}
              chosen={this.state.chosen}
              onChoice={this.onChoice}
            />

            <InstructionsContainer
              path="/instructions"
              questions={this.questions}
              chosen={this.state.chosen}
            />
          </Router>
        </Main>
      </div>
    );
  }
}
