import React, { Component } from "react";
import Checkbox from "../Checkbox";

export default class Step1 extends Component {
  state = {
    chosen: []
  };

  checked = e => {
    e.persist();
    console.log(e.target.value);
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
  submitted = e => {
    console.log("submitted");
    this.props.onSubmit(this.state.chosen);
  };
  render() {
    const questions = this.props.questions.map((q, i) => {
      //return <Checkbox name={q.key} value={q.key} label={q.q} />;
      return (
        <div key={i}>
          <Checkbox
            id={"switch_" + i}
            value={q.key}
            label={q.q}
            type="switch"
            onClick={this.checked}
          />
          <p>{q.d}</p>
        </div>
      );
    });
    return (
      <section id="Step1">
        <h1>What technologies would you like to work with?</h1>
        {questions}
        <button
          disabled={this.state.chosen.length === 0}
          onClick={this.submitted}
        >
          {" "}
          Continue
        </button>
      </section>
    );
  }
}
