import React, { Component } from "react";

export default class Commands extends Component {
  render() {
    return (
      <article id="Commands" className="instruction story">
        <details>
          <summary>Commands</summary>
          <pre>{this.props.commands.join("\n")}</pre>
        </details>
      </article>
    );
  }
}
