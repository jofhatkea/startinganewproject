import React, { Component } from "react";

export default class Nodemodules extends Component {
  componentDidMount() {
    this.props.onIsParcel();
  }
  render() {
    return (
      <article id="Nodemodules" className="instruction story">
        <details>
          <summary>Node modules</summary>
          <p>Amazing, good for you</p>
          <p>
            Since you chose to work with Node modules, you'll have to, in our
            setup, work with parceljs
          </p>
          <p>Parceljs will handle all bundling &amp; transpiling for you</p>
          <p>And you'll be using it as your "live-server" as well</p>
        </details>
      </article>
    );
  }
}
