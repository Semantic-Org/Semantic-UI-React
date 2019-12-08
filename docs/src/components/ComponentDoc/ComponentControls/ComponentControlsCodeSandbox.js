import PropTypes from 'prop-types'
import * as React from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { Menu } from 'semantic-ui-react'

import createPackageJson from './createPackageJson'
import enhanceExampleCode from './enhanceExampleCode'

const appTemplate = `import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import Example from "./example";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);
`

class ComponentControlsCodeSandbox extends React.Component {
  static propTypes = {
    exampleCode: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }

  state = {
    exampleCode: '',
    sandboxUrl: '',
  }

  static getDerivedStateFromProps(props, state) {
    return {
      exampleCode: props.exampleCode,
      sandboxUrl: props.exampleCode === state.exampleCode ? state.sandboxUrl : '',
    }
  }

  handleDeploy = (embedUrl, sandboxId) => {
    const sandboxUrl = `https://codesandbox.io/s/${sandboxId}?module=/example.js`

    this.setState({ sandboxUrl })
  }

  render() {
    const { exampleCode, visible } = this.props
    const { sandboxUrl } = this.state

    if (sandboxUrl) {
      return (
        <Menu.Item
          as='a'
          content='Click to open'
          href={sandboxUrl}
          icon={{ color: 'green', name: 'checkmark' }}
          target='_blank'
          title='Open in a new tab'
        />
      )
    }

    return visible ? (
      <CodeSandboxer
        afterDeploy={this.handleDeploy}
        examplePath='/'
        example={enhanceExampleCode(exampleCode)}
        providedFiles={{
          'index.js': { content: appTemplate },
          'package.json': createPackageJson(),
        }}
        skipRedirect
        template='create-react-app'
      >
        {({ isLoading, isDeploying }) => {
          const loading = isLoading || isDeploying

          return (
            <Menu.Item
              as='a'
              content={loading ? 'Exporting...' : 'CodeSandbox'}
              icon={{
                loading,
                name: loading ? 'spinner' : 'connectdevelop',
              }}
              title='Export to CodeSandbox'
            />
          )
        }}
      </CodeSandboxer>
    ) : (
      <Menu.Item as='a' content='CodeSandbox' icon={{ loading: true, name: 'spinner' }} />
    )
  }
}

export default ComponentControlsCodeSandbox
