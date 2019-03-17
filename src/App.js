import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Step1 from "./components/steps/Step1";
import InstructionsContainer from "./components/instructions/InstructionsContainer";

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
    step: 1,
    chosen: [this.questions[2]]
  };

  step1Submit = data => {
    console.log(data, this.questions);
    const newData = this.questions.filter(q => data.indexOf(q.key) > -1);
    this.setState(prevState => ({
      step: 2,
      chosen: newData
    }));
  };
  step2Submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main>
          {this.state.step === 1 && (
            <Step1 onSubmit={this.step1Submit} questions={this.questions} />
          )}
          {this.state.step === 2 && (
            <InstructionsContainer data={this.state.chosen} />
          )}
        </Main>
      </div>
    );
  }
}
