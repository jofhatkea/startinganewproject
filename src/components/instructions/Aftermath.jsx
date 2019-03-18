import React from "react";

export default class Aftermath extends React.Component {
  render() {
    const aftermath = this.props.aftermath.map((a, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: a }} />
    ));
    return (
      <article id="Commands" className="instruction story">
        <details>
          <summary>Aftermath & Manual Stuff</summary>
          <blockquote>
            Aftermath: the consequences or after-effects of a significant
            unpleasant event.
            <br />
            <cite> - a dictionary</cite>
          </blockquote>
          <h3>Please review the following</h3>

          <ul>{aftermath}</ul>
        </details>
      </article>
    );
  }
}
