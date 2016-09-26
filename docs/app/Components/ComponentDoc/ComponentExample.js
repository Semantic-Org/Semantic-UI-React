import _ from 'lodash'
import { html } from 'js-beautify'
import React, { Component, createElement, PropTypes } from 'react'

import { exampleContext } from 'docs/app/utils'
import Editor from 'docs/app/Components/Editor/Editor'
import { getUnhandledProps } from 'src/lib'
import { Grid, Header, Icon, Divider } from 'stardust'

const showCodeStyle = {
  position: 'absolute',
  textAlign: 'right',
  top: '1rem',
  right: '1rem',
}

const descriptionStyle = {
  marginRight: '5em',
}

const codeIconStyle = {
  fontWeight: 'bold',
}

const titleStyle = {
  marginBottom: 0,
}

const headerColumnStyle = {
  // provide room for absolutely positions toggle code icons
  minHeight: '4em !important',
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
    this.state = { showCode: false, showHTML: false }
    this.fileContents = props.exampleSrc || require(`!raw!docs/app/Examples/${props.examplePath}`)
    this.component = exampleContext(`./${props.examplePath}.js`).default
  }

  getKebabExamplePath = () => _.kebabCase(this.props.examplePath)

  toggleShowCode = () => this.setState({ showCode: !this.state.showCode })

  toggleShowHTML = () => this.setState({ showHTML: !this.state.showHTML })

  renderCode = () => {
    const { showCode } = this.state
    if (!showCode) return

    return (
      <Grid.Column>
        <Divider horizontal>JSX</Divider>
        <Editor id={`${this.getKebabExamplePath()}-jsx`} value={this.fileContents.replace(/\n$/, '')} readOnly />
      </Grid.Column>
    )
  }

  renderHTML = () => {
    const { showHTML } = this.state
    if (!showHTML) return

    const innerHTML = _.get(document.querySelector(`.${this.getKebabExamplePath()}`), 'innerHTML', '')
    // add new lines between almost all adjacent elements
    // moves inline elements to their own line
      .replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<')

    const beautifiedHTML = html(innerHTML, {
      indent_size: 2,
      indent_char: ' ',
      wrap_attributes: 'auto',
      wrap_attributes_indent_size: 2,
      end_with_newline: false,
    })

    return (
      <Grid.Column>
        <Divider horizontal>Rendered HTML</Divider>
        <Editor id={`${this.getKebabExamplePath()}-html`} mode='html' value={beautifiedHTML} readOnly />
      </Grid.Column>
    )
  }

  render() {
    const { children, description, title } = this.props
    const { showCode, showHTML } = this.state
    const rest = getUnhandledProps(ComponentExample, this.props)
    const active = showCode || showHTML

    const style = { marginBottom: '4em', transition: 'box-shadow 0 ease-out' }
    if (active) {
      style.transitionDuration = '0.2s'
      style.boxShadow = '0 0 30px #ccc'
    }

    return (
      <Grid style={style} divided={active} columns='1'>
        <Grid.Column style={headerColumnStyle}>
          <div style={showCodeStyle}>
            <Icon
              link
              bordered
              name='code'
              color={showCode ? 'green' : 'grey'}
              onClick={this.toggleShowCode}
              style={codeIconStyle}
            />
            <Icon
              link
              bordered
              name='html5'
              color={showHTML ? 'green' : 'grey'}
              onClick={this.toggleShowHTML}
            />
          </div>
          {title && <Header as='h3' style={titleStyle}>{title}</Header>}
          {description && <p style={descriptionStyle}>{description}</p>}
          {children}
        </Grid.Column>
        <Grid.Column className={`rendered-example ${this.getKebabExamplePath()}`}>
          {createElement(this.component, rest)}
        </Grid.Column>
        {showCode && this.renderCode()}
        {showHTML && this.renderHTML()}
      </Grid>
    )
  }
}
