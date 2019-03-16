import React, { Component } from "react";
import Checkbox from "../Checkbox";

export default class Step1 extends Component {
  state = {
    chosen: []
  };
  questions = [
    { q: "git", key: "git" },
    { q: 'node modules (as in import x from "x")', key: "node_modules" },
    { q: "sass", key: "sass" },
    {
      q:
        "eslint (as in you completed xxx and would like the editor help you writing error free JS)",
      key: "eslint"
    }
  ];
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
  };
  render() {
    if (!this.props.active) {
      return "";
    }
    const questions = this.questions.map((q, i) => {
      //return <Checkbox name={q.key} value={q.key} label={q.q} />;
      return (
        <Checkbox
          key={i}
          id={"switch_" + i}
          value={q.key}
          label={q.q}
          type="switch"
          onClick={this.checked}
        />
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
