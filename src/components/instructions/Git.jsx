import React, { Component } from "react";

export default class Git extends Component {
  constructor(props) {
    super(props);
    this.props.addCommand("git init");
    this.props.addCommand(`echo "dist/
    node_modules/" >.gitignore`);
    this.props.addCommand(`git add --all && git commit -m "initial commit"`);
    this.props.addAftermath(
      `If you need to use github or similar, you need to set that up manually`
    );
    this.props.addAftermath(`The same goes for collaborators`);
    this.props.addAftermath(
      `Please review the .gitignore file to see if it matches your preferences`
    );
  }
  render() {
    return (
      <article id="Git" className="instruction story">
        <details>
          <summary>Git</summary>

          <p>Cool, git is a no-brainer, as in, you really need it</p>
          <ol>
            <li>Setup your folder structure</li>
            <li>
              Initialize your repository:
              <pre>
                <code className="terminal">git init</code>
              </pre>
            </li>
            <li>
              Create a .gitignore file at the root of the project with the
              things you wish to ignore:
              <pre>
                <code className="terminal">{`echo "dist/
node_modules/" >.gitignore`}</code>
              </pre>
            </li>
            <li>
              Then add all your initial files (run a <code>git status</code> to
              check you're ignoring the right files
              <pre>
                <code className="terminal">
                  git add --all && git commit -m "initial commit"
                </code>
              </pre>
            </li>
            <li>Now go set up your remote on github, add collaborators etc</li>
          </ol>
        </details>
      </article>
    );
  }
}
