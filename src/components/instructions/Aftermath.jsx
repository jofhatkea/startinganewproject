import React from "react";

export default class Aftermath extends React.Component {
  render() {
    return (
      <article id="Commands" className="instruction story">
        <details>
          <summary>Aftermath</summary>
          <blockquote>
            Aftermath: the consequences or after-effects of a significant
            unpleasant event.
          </blockquote>
          <cite> - a dictionary</cite>
          <pre>
            <code className="terminal">{this.props.aftermath.join("\n")}</code>
          </pre>
        </details>
      </article>
    );
  }
}
