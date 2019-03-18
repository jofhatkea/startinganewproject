import React, { Component } from "react";

export default class Eslint extends Component {
  constructor(props) {
    super(props);
    if (this.props.shouldRunNPMInit) {
      this.props.addCommand("npm init -y");
    }
    this.props.addCommand(
      "npm install --save-dev eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard"
    );
    this.props.addCommand(`echo '{
      "env": {
        "browser": true,
        "es6": true
      },
      "extends": ["standard", "prettier"],
      "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      },
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
      },
      "rules": {}
    }' >.eslintrc.json`);
    this.props.addAftermath(
      `Install the Prettier extension in VS Code (by Esben Petersen)`
    );
    this.props.addAftermath(
      `Install the ESLint extension in VS Code (by Dirk Baeumer)`
    );
    this.props.addAftermath(
      `In VS Code, find your user settings and add the following: "editor.formatOnSave": true`
    );
  }
  render() {
    return (
      <article id="ESLint" className="instruction story">
        <details>
          <summary>ESLint</summary>
          <p>Cool, ESLint is a no-brainer, as in, you really need it :-)</p>
          <p>
            this section assumes you've completed the following two steps
            already
          </p>
          <ul>
            <li>
              <a href="https://github.com/jofhatkea/front-end/blob/master/setting-up-vs-code-part-1.md">
                setting-up-vs-code-part-1.md
              </a>
            </li>
            <li>
              Install the ESLint plugin in VS Code (use the one by Dirk
              Baeumer).
            </li>
          </ul>
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
              We're going to install <code>eslint</code> locally
              <pre>
                <code className="terminal">
                  npm install --save-dev eslint eslint-config-prettier
                  eslint-config-standard eslint-plugin-import eslint-plugin-node
                  eslint-plugin-promise eslint-plugin-standard
                </code>
              </pre>
            </li>
            <li>
              "activate" eslint for your project (this is a "simplified" version
              of npx eslint --init)
              <pre>
                <code className="terminal">{`echo '{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["standard", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {}
}' >.eslintrc.json`}</code>
              </pre>
            </li>
          </ol>
        </details>
      </article>
    );
  }
}
