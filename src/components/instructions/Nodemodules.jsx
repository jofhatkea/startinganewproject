import React, { Component } from "react";

export default class Nodemodules extends Component {
  constructor(props) {
    super(props);
    if (this.props.shouldRunNPMInit) {
      this.props.addCommand("npm init -y");
    }

    this.props.addCommand(
      `npm install --save-dev parcel-plugin-static-files-copy`
    );
    this.props.addAftermath(
      `Create a folder called "static" in your root directory`
    );
    this.props.addAftermath(
      `
        Put all "static" files in there (e.g. images that are not used directly
        in the HTML or used in CSS)
      `
    );
    this.props.addAftermath(
      `
        run <code>parcel index.html</code> for a live-server
      `
    );
    this.props.addAftermath(
      `
        run <code>parcel build index.html --public-url ./</code> to create a
        minified, optimized, transpiled version of your site
      `
    );
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
          <ol>
            {this.props.shouldRunNPMInit &&
              `
                First up, we're going to work with node_modules while
                developing, so let's set that up
                <pre>
                  <code className="terminal">npm init -y</code>
                </pre>
              `}
            ` Parcel is not aware of static files (images etc) so we need to
            tell it about them
            <pre>
              <code className="terminal">
                npm install --save-dev parcel-plugin-static-files-copy
              </code>
            </pre>
            ` ` Now go create a folder called "static" in the root of your
            project ` ` Place all your static files in there (stuff you would
            like to copy to the "dist" folder when you build or serve the site `
          </ol>
        </details>
      </article>
    );
  }
}
