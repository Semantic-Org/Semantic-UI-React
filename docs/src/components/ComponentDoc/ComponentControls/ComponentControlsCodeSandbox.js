import PropTypes from 'prop-types'
import * as React from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { Menu } from 'semantic-ui-react'

import createPackageJson from './createPackageJson'
import enhanceExampleCode from './enhanceExampleCode'

const appTemplate = `import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import Example from "./example";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React {pkg.version} 😊</Header>
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

function CodeSandboxIcon() {
  return (
    <i aria-hidden className='grey icon'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        height='100%'
        viewBox='0 0 24 24'
        width='100%'
      >
        <path d='M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z' />
      </svg>
    </i>
  )
}

class ComponentControlsCodeSandbox extends React.Component {
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
          'package.json': createPackageJson(exampleCode),
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
              icon={loading ? { loading, name: 'spinner' } : () => <CodeSandboxIcon />}
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

ComponentControlsCodeSandbox.propTypes = {
  exampleCode: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default ComponentControlsCodeSandbox
