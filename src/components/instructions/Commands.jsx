import React, { Component } from "react";

export default class Commands extends Component {
  render() {
    return (
      <article id="Commands" className="instruction story">
        <details>
          <summary>Instant Setup</summary>
          <p>Just paste the following into your terminal</p>
          <pre>
            <code className="terminal">{this.props.commands.join("\n")}</code>
          </pre>
        </details>
      </article>
    );
  }
}
