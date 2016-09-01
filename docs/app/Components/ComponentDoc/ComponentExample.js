import React, { Component, createElement, PropTypes } from 'react'
import Highlight from 'react-highlight'

import { exampleContext } from 'docs/app/utils'
import { getUnhandledProps } from 'src/lib'
import { Grid, Header, Icon } from 'stardust'

const codeIconStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
export default class ComponentExample extends Component {
  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    examplePath: PropTypes.string.isRequired,
    exampleSrc: PropTypes.node,
    title: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    this.state = { showCode: false }
    this.fileContents = props.exampleSrc || require(`!raw!docs/app/Examples/${props.examplePath}`)
    this.component = exampleContext(`./${props.examplePath}.js`).default
  }

  toggleShowCode = () => {
    this.setState({ showCode: !this.state.showCode })
  }

  renderCode = () => {
    const { showCode } = this.state
    if (!showCode) return

    return (
      <Grid.Column>
        <Highlight className='language-javascript'>
          {this.fileContents}
        </Highlight>
      </Grid.Column>
    )
  }

  render() {
    const { children, description, title } = this.props
    const rest = getUnhandledProps(ComponentExample, this.props)

    return (
      <Grid columns={1} style={{ marginBottom: '4em' }}>
        <Grid.Column>
          <Grid>
            <Grid.Column width={12}>
              {title && <Header as='h3' style={{ marginBottom: 0 }}>{title}</Header>}
              {description && <p>{description}</p>}
            </Grid.Column>
            <Grid.Column width={4} textAlign='right'>
              <Icon name='code link' color='grey' onClick={this.toggleShowCode} style={codeIconStyle} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {children && <Grid.Column>{children}</Grid.Column>}
        <Grid.Column className='rendered-example'>
          {createElement(this.component, rest)}
        </Grid.Column>
        {this.renderCode()}
      </Grid>
    )
  }
}
