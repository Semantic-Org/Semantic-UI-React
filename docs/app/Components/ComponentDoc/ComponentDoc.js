import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'

import { repoURL } from 'docs/app/utils'
import { META } from 'src/lib'
import * as semanticUIReact from 'src'
import docgenInfo from '../../docgenInfo.json'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'

const { Divider, Grid, Header, Icon, List } = semanticUIReact

const docgenPaths = _.keys(docgenInfo)

const pathSepRegEx = new RegExp(_.escapeRegExp(__PATH_SEP__), 'g')

const getDocgenPath = componentName => _.find(docgenPaths, path => (
  new RegExp(`${__PATH_SEP__}${componentName}.js$`).test(path)
))

// no matter the OS path separator, use '/'
const getPosixPath = componentName => getDocgenPath(componentName).replace(pathSepRegEx, '/')

const getGithubSourceUrl = (componentName) => {
  const posixPath = getPosixPath(componentName)
  return `${repoURL}/blob/master/${posixPath}`
}

const getGithubEditUrl = (componentName) => {
  const posixPath = getPosixPath(componentName)
  return `${repoURL}/edit/master/${posixPath}`
}

const getSemanticUIDocsUrl = _meta => (
  `https://semantic-ui.com/${_meta.type}s/${_meta.parent || _meta.name}`.toLowerCase()
)

const showPropsStyle = {
  display: 'inline-flex',
  margin: '1em 0.5em',
  marginLeft: 0,
  cursor: 'pointer',
}

const subDescriptionStyle = {
  fontSize: '1.08em',
  color: '#777',
}

const linkListStyle = {
  position: 'absolute',
  padding: '0.5em',
  margin: '0.5em',
  top: '0',
  right: '0',
  boxShadow: '0 0 1em 0.5em #f7f7f7',
  background: '#f7f7f7',
}

export default class ComponentDoc extends Component {
  static propTypes = {
    _meta: PropTypes.object,
  }

  componentWillMount() {
    this.setState({
      showPropsFor: this.props._meta.name,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showPropsFor: this.state.showPropsFor ? nextProps._meta.name : null,
    })
  }

  toggleProps = (name) => {
    this.setState({
      showPropsFor: this.state.showPropsFor === name ? null : name,
    })
  }

  renderSee() {
    const { _meta } = this.props
    const docPath = getDocgenPath(_meta.name)
    const docgen = docgenInfo[docPath]
    const seeTags = _.filter(docgen.docBlock.tags, ['title', 'see'])

    const seeLinks = _.map(seeTags, ({ description }) => {
      const seeMeta = _.get(semanticUIReact[description], '_meta')
      if (!seeMeta) return

      const { type, name } = seeMeta

      return (
        <List.Item as={Link} key={description} to={`/${type}s/${_.kebabCase(name)}`}>
          {description}
        </List.Item>
      )
    })

    // still render empty lists to reserve the whitespace
    return (
      <List link horizontal size='small' style={{ display: 'block' }}>
        <List.Item>
          <Header size='tiny' color='grey'>
            {seeLinks.length > 0 ? 'See:' : ' '}
          </Header>
        </List.Item>
        {seeLinks}
      </List>
    )
  }

  renderSemanticDocsLink = () => {
    const { _meta } = this.props

    if (META.isAddon(_meta)) return null

    return (
      <List.Item>
        <List.Icon name='book' />
        <List.Content>
          <a href={getSemanticUIDocsUrl(_meta)} target='_blank'>
            Semantic UI {_meta.parent || _meta.name} Docs
          </a>
        </List.Content>
      </List.Item>
    )
  }

  renderGithubSourceLink() {
    const { _meta } = this.props
    const docPath = getDocgenPath(_meta.name)
    // no matter the OS path separator, use '/' since these link to github
    const posixPath = docPath.replace(pathSepRegEx, '/')
    return (
      <List.Item>
        <List.Icon name='github' />
        <List.Content>
          <code>
            <a href={getGithubSourceUrl(_meta.name)} target='_blank'>{posixPath}</a>
          </code>
        </List.Content>
      </List.Item>
    )
  }

  renderProps = () => {
    const { _meta } = this.props
    const { showPropsFor } = this.state

    const itemCX = name => cx(showPropsFor === name && 'active', 'link item')
    const selectedDocgen = docgenInfo[getDocgenPath(showPropsFor)]
    const toggleIcon = `toggle ${showPropsFor ? 'on' : 'off'}`

    const subComponents = _.flatMap(semanticUIReact, SDComponent => _.filter(SDComponent, staticValue => (
      _.get(staticValue, '_meta.parent') === _meta.name
    )))

    const hasSubComponents = !_.isEmpty(subComponents)
    const showSubDescription = hasSubComponents && _.get(selectedDocgen, 'docBlock.description')

    const subComponentItems = _.map(subComponents, ({ _meta: { name } }) => (
      <div key={name} className={itemCX(name)} onClick={() => this.toggleProps(name)}>
        {_meta.name}.{name.replace(_meta.name, '')}
      </div>
    ))

    return (
      <div>
        <Header
          as='h4'
          className='no-anchor'
          color={cx(showPropsFor ? 'green' : 'grey')}
          style={showPropsStyle}
          onClick={() => this.toggleProps(showPropsFor || _meta.name)}
        >
          <a style={{ color: 'inherit' }}><Icon name={toggleIcon} /> Props{hasSubComponents && ':'}</a>
        </Header>
        <div className='ui small compact secondary green menu'>
          {hasSubComponents && (
            <div className={itemCX(_meta.name)} onClick={() => this.toggleProps(_meta.name)}>
              {_meta.name}
            </div>
          )}
          {subComponentItems}
        </div>
        {selectedDocgen && (
          <div>
            {showSubDescription && (
              <div style={subDescriptionStyle}>
                {selectedDocgen.docBlock.description}
                <Divider />
              </div>
            )}
            <ComponentProps props={selectedDocgen.props} meta={semanticUIReact[showPropsFor]._meta} />
          </div>
        )}
      </div>
    )
  }

  renderHeader = () => {
    const { _meta } = this.props
    const docgen = docgenInfo[getDocgenPath(_meta.name)]

    return (
      <Header as='h1' style={{ marginBottom: '0.25em' }}>
        {_meta.name}
        <Header.Subheader>
          {/* TODO: Remove once all components have descriptions */}
          {docgen.docBlock.description || (
            <span>
              <a href={getGithubEditUrl(_meta.name)}>Add a description</a>. Instructions are{' '}
              <a href={`${repoURL}/blob/master/.github/CONTRIBUTING.md#components`}>
                here.
              </a>
              {' '}Description is in the SUI Docs, right there <Icon name='pointing right' />
            </span>
          )}
        </Header.Subheader>
      </Header>
    )
  }

  render() {
    const { _meta } = this.props

    return (
      <DocumentTitle title={`${_meta.name} | UI React`}>
        <div>
          <Grid padded columns='1'>
            <Grid.Column>
              {this.renderHeader()}
              {this.renderSee()}
              <List link style={linkListStyle}>
                {this.renderGithubSourceLink()}
                {this.renderSemanticDocsLink()}
              </List>
              {this.renderProps()}
            </Grid.Column>
          </Grid>
          <ComponentExamples name={_meta.name} />
        </div>
      </DocumentTitle>
    )
  }
}
