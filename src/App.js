import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Step1 from "./components/steps/Step1";

class App extends Component {
  state = {
    step: 1
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main>
          <Step1 active={this.state.step === 1} />
        </Main>
      </div>
    );
  }
}

export default App;
