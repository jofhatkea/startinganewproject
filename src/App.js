import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step1";

class App extends Component {
  state = {
    step: 1,
    chosen: []
  };
  questions = [
    { q: "git", key: "git", d: "" },
    { q: "node modules", d: ' (as in import x from "x")', key: "node_modules" },
    { q: "SASS", key: "sass", d: "" },
    {
      q: "ESlint",
      key: "eslint",
      d:
        "(as in you completed xxx and would like the editor help you writing error free JS)"
    }
  ];
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
          <Step1
            onSubmit={this.step1Submit}
            questions={this.questions}
            active={this.state.step === 1}
          />
        </Main>
      </div>
    );
  }
}

export default App;
/*
<Step2
            onSubmit={this.step2Submit}
            chosen={this.state.chosen}
            active={this.state.step === 2}
          />*/
