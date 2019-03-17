import React, { Component } from "react";

export default class Eslint extends Component {
  componentDidMount() {
    this.props.onRunNPMInit();
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
              <a href="https://github.com/jofhatkea/front-end/blob/master/setting-up-vs-code-part-2.md">
                setting-up-vs-code-part-2.md
              </a>
            </li>
          </ul>
          <ol>
            {this.props.hasRunNPMInit && (
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
