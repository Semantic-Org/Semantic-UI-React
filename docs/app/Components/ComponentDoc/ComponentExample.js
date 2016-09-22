import React, { Component, createElement, PropTypes } from 'react'

import { exampleContext } from 'docs/app/utils'
import Editor from 'docs/app/Components/Editor/Editor'
import { getUnhandledProps } from 'src/lib'
import { Grid, Header, Icon } from 'stardust'

const codeIconStyle = {
  position: 'absolute',
  top: '0.6em',
  right: '0.5em',
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
    description: PropTypes.node,
    examplePath: PropTypes.string.isRequired,
    exampleSrc: PropTypes.node,
    title: PropTypes.node,
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
    const { examplePath } = this.props
    const { showCode } = this.state
    if (!showCode) return

    return (
      <Grid.Column>
        <Editor id={examplePath} value={this.fileContents} readOnly />
      </Grid.Column>
    )
  }

  render() {
    const { children, description, title } = this.props
    const { showCode } = this.state
    const rest = getUnhandledProps(ComponentExample, this.props)

    const style = { marginBottom: '4em', transition: 'box-shadow 0 ease-out' }
    if (showCode) {
      style.transitionDuration = '0.2s'
      style.boxShadow = '0 0 30px #ccc'
    }

    return (
      <Grid columns={1} style={style}>
        <Grid.Column>
          <Grid>
            <Grid.Column width={12}>
              {title && <Header as='h3' style={{ marginBottom: 0 }}>{title}</Header>}
              {description ? <p>{description}</p> : children}
            </Grid.Column>
            <Grid.Column width={4} textAlign='right'>
              <Icon name='code link' color='grey' onClick={this.toggleShowCode} style={codeIconStyle} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {description && children && <Grid.Column>{children}</Grid.Column>}
        <Grid.Column className='rendered-example'>
          {createElement(this.component, rest)}
        </Grid.Column>
        {this.renderCode()}
      </Grid>
    )
  }
}
