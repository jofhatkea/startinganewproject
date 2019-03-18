import React, { Component } from "react";

export default class Sass extends Component {
  constructor(props) {
    super(props);
    if (this.props.shouldRunNPMInit) {
      this.props.addCommand("npm init -y");
    }

    this.props.addCommand(`npm install --save-dev node-sass`);
    this.props.addAftermath(
      `Add the sass-watcher script to your package.json (see above)`
    );
    this.props.addAftermath(
      `run <code>npm run watchsass</code> to compile SASS and watch for changes`
    );
  }
  render() {
    return (
      <article id="Sass" className="instruction story">
        <details>
          <summary>SASS</summary>
          <p>SASS is kinda cool, so congrats, let's go:</p>
          <ol>
            {this.props.shouldRunNPMInit && (
              <li>
                First up, we're going to work with node_modules while
                developing, so let's set that up
                <pre>
                  <code className="terminal">npm init -y</code>
                </pre>
              </li>
            )}

            <li>
              Install SASS locally
              <pre>
                <code className="terminal">
                  npm install --save-dev node-sass
                </code>
              </pre>
            </li>
            {!this.props.isParcel && (
              <>
                <li>
                  Add a "script" to your package.json containing
                  <pre>
                    <code className="terminal">
                      "watchsass":"node-sass --output-style expanded myfile.scss
                      output.css -w"
                    </code>
                  </pre>
                  adjusting the file names to match your preferences
                </li>

                <li>
                  In your HTML file, point to the stylesheet called "
                  <code>output.css</code>" or whatever you changed it to
                </li>
                <li>
                  Start up a terminal and run
                  <pre>
                    <code className="terminal">npm run watchsass</code>
                  </pre>
                </li>
              </>
            )}
            {this.props.isParcel && (
              <>
                <li>
                  Parcel will do all the heavy lifting for you, so just point to
                  the <code>.scss</code> file diretly from your{" "}
                  <code>.html file</code>
                </li>
              </>
            )}
          </ol>
        </details>
      </article>
    );
  }
}
