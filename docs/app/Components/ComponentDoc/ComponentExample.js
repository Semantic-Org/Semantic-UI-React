import React, { Component, createElement, PropTypes } from 'react'
import { Grid, Column, Button } from 'stardust'
import Highlight from 'react-highlight'
import exampleContext from 'docs/app/utils/ExampleContext'

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
  };

  constructor(props, context) {
    super(props, context)
    this.state = { showCode: false }
    this.fileContents = require(`!raw!docs/app/Examples/${props.examplePath}`)
    this.component = exampleContext(`./${props.examplePath}.js`)
    // 'elements/Button/Types/Button' => #Button-Types-Button
    this.anchor = props.examplePath.split('/').slice(1).join('-')
  }

  handleMouseEnter = () => {
    this.setState({ showLink: true })
  };

  handleMouseLeave = () => {
    this.setState({ showLink: false })
  };

  toggleShowCode = () => {
    this.setState({ showCode: !this.state.showCode })
  };

  render() {
    const code = (
      <Column>
        <Highlight className='language-javascript'>
          {this.fileContents}
        </Highlight>
      </Column>
    )

    const linkIconStyle = {
      display: this.state.showLink ? 'inline-block' : 'none',
      marginLeft: '0.25em',
    }

    const children = <Column>{this.props.children}</Column>

    return (
      <Grid className='one column' style={{ marginBottom: '4em' }} id={this.anchor}>
        <Column>
          <Grid>
            <Column width={12}>
              <h3
                className='ui header'
                style={{ marginBottom: 0 }}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                {this.props.title}
                <a href={`#${this.anchor}`}>
                  <i className='linkify icon' style={linkIconStyle} />
                </a>
              </h3>
              <p>{this.props.description}</p>
            </Column>
            <Column width={4} className='right aligned'>
              <Button className='basic mini labeled icon' onClick={this.toggleShowCode}>
                code
                <i className='code icon' />
              </Button>
            </Column>
          </Grid>
        </Column>
        {this.props.children && children}
        <Column>
          {createElement(this.component)}
        </Column>
        {this.state.showCode && code}
      </Grid>
    )
  }
}
