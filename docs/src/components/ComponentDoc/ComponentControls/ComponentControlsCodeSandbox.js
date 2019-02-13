import * as _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { Menu } from 'semantic-ui-react'

import { externals } from 'docs/src/components/ComponentDoc/ComponentExample/renderConfig'
import { updateForKeys } from 'docs/src/hoc'

const appTemplate = `import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Example from "./example";
import pkg from "./package.json";

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

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);
`
const dependencies = {
  ..._.mapValues(externals, () => 'latest'),
  'semantic-ui-css': 'latest',
}

class ComponentControlsShowCode extends React.Component {
  static propTypes = {
    exampleCode: PropTypes.string.isRequired,
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
    const { exampleCode } = this.props
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

    return (
      <CodeSandboxer
        afterDeploy={this.handleDeploy}
        examplePath='/'
        example={exampleCode}
        dependencies={dependencies}
        /* Magic trick to reload sources on passed code update */
        key={exampleCode}
        name='semantic-ui-react-example'
        providedFiles={{
          'index.js': { content: appTemplate },
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
    )
  }
}

export default updateForKeys(['exampleCode'])(ComponentControlsShowCode)
