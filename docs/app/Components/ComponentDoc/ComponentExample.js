import React, { Component, createElement, PropTypes } from 'react'
import { Grid, Header, Icon } from 'stardust'
import Highlight from 'react-highlight'
import { exampleContext } from 'docs/app/utils'

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
export default class ComponentExample extends Component {
  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    examplePath: PropTypes.string.isRequired,
    title: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    this.state = { showCode: false }
    this.fileContents = require(`!raw!docs/app/Examples/${props.examplePath}`)
    this.component = exampleContext(`./${props.examplePath}.js`).default
    // 'elements/Button/Types/Button' => #Button-Types-Button
    this.anchor = props.examplePath.split('/').slice(1).join('-')
  }

  handleMouseEnter = () => {
    this.setState({ showLink: true })
  }

  handleMouseLeave = () => {
    this.setState({ showLink: false })
  }

  toggleShowCode = () => {
    this.setState({ showCode: !this.state.showCode })
  }

  render() {
    const code = (
      <Grid.Column>
        <Highlight className='language-javascript'>
          {this.fileContents}
        </Highlight>
      </Grid.Column>
    )

    const linkIconStyle = {
      display: this.state.showLink ? 'inline-block' : 'none',
      marginLeft: '0.25em',
    }

    const codeIconStyle = {
      fontSize: '1.5em',
      fontWeight: 'bold',
    }

    const children = <Grid.Column>{this.props.children}</Grid.Column>

    return (
      <Grid className='one column' style={{ marginBottom: '4em' }} id={this.anchor}>
        <Grid.Column>
          <Grid>
            <Grid.Column width={12}>
              <Header
                style={{ marginBottom: 0 }}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                {this.props.title}
                <a href={`#${this.anchor}`}>
                  <Icon className='linkify' style={linkIconStyle} />
                </a>
              </Header>
              <p>{this.props.description}</p>
            </Grid.Column>
            <Grid.Column width={4} className='right aligned'>
              <Icon className='grey code link' onClick={this.toggleShowCode} style={codeIconStyle} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {this.props.children && children}
        <Grid.Column>
          {createElement(this.component)}
        </Grid.Column>
        {this.state.showCode && code}
      </Grid>
    )
  }
}
