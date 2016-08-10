import React, { Component, createElement, PropTypes } from 'react'
import { Grid, Header, Icon } from 'stardust'
import Highlight from 'react-highlight'
import { exampleContext } from 'docs/app/utils'
import {
  getUnhandledProps,
} from 'src/utils/propUtils'

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

  render() {
    const code = (
      <Grid.Column>
        <Highlight className='language-javascript'>
          {this.fileContents}
        </Highlight>
      </Grid.Column>
    )

    const codeIconStyle = {
      fontSize: '1.5em',
      fontWeight: 'bold',
    }

    const children = <Grid.Column>{this.props.children}</Grid.Column>
    const rest = getUnhandledProps(ComponentExample, this.props)

    return (
      <Grid className='one column' style={{ marginBottom: '4em' }}>
        <Grid.Column>
          <Grid>
            <Grid.Column width={12}>
              {this.props.title && <Header.H3 style={{ marginBottom: 0 }}>
                {this.props.title}
              </Header.H3>}
              {this.props.description && <p>{this.props.description}</p>}
            </Grid.Column>
            <Grid.Column width={4} className='right aligned'>
              <Icon name='code link' color='grey' onClick={this.toggleShowCode} style={codeIconStyle} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {this.props.children && children}
        <Grid.Column>
          {createElement(this.component, rest)}
        </Grid.Column>
        {this.state.showCode && code}
      </Grid>
    )
  }
}
