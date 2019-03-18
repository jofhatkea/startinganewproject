import React, { Component } from "react";

export default class Commands extends Component {
  render() {
    return (
      <article id="Commands" className="instruction story">
        <details>
          <summary>Instant Setup</summary>
          <p>Just paste the following into your terminal</p>
          <pre>{this.props.commands.join("\n")}</pre>
        </details>
      </article>
    );
  }
}
