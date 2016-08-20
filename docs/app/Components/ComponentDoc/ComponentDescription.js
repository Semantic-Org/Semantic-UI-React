import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import * as stardust from 'stardust'
import { META } from 'src/lib'
import { Link } from 'react-router'
const { Divider, Grid, Header, List } = stardust

const headerStyle = {
  fontSize: '2.2em',
}

const descriptionStyle = {
  fontSize: '1.2em',
}

export default class ComponentDescription extends Component {
  static propTypes = {
    /** Stardust component _meta object. */
    _meta: PropTypes.object.isRequired,

    /** Relative path to the component in the Stardust repo ('src/foo/bar/baz.js'). */
    docPath: PropTypes.string.isRequired,

    /** The gulp-docgen object for this component. */
    docgen: PropTypes.object.isRequired,
  }

  renderSemanticDocsLink = () => {
    const { _meta } = this.props

    if (META.isAddon(_meta)) return null

    const name = META.isParent(_meta) ? _meta.name : _meta.parent
    const url = `http://semantic-ui.com/${_meta.type}s/${name}.html`.toLowerCase()

    return (
      <List.Item icon='book'>
        <a href={url} target='_blank'>
          Semantic UI {name} Docs
        </a>
      </List.Item>
    )
  }

  renderSourceLink() {
    const { docPath } = this.props
    return (
      <List.Item icon='github'>
        <code>
          <a href={`https://github.com/TechnologyAdvice/stardust/blob/master/${docPath}`} target='_blank'>
            {docPath}
          </a>
        </code>
      </List.Item>
    )
  }

  renderRelated() {
    const { docgen: { docBlock: { tags } } } = this.props
    const seeTags = _.filter(tags, ['title', 'see'])
    if (_.isEmpty(seeTags)) return null

    const relatedLinks = _.map(seeTags, ({ description }) => {
      const relatedMeta = _.get(stardust[description], '_meta')
      if (!relatedMeta) return

      const { type, name } = relatedMeta

      return (
        <Link key={description} to={`/${type}s/${_.kebabCase(name)}`} className='item'>
          {description}
        </Link>
      )
    })

    return (
      <Grid.Row columns={1}>
        <Grid.Column>
          <List className='large horizontal'>
            <div className='item'>
              <div className='header'>Related:</div>
            </div>
            {relatedLinks}
          </List>
        </Grid.Column>
      </Grid.Row>
    )
  }

  render() {
    const { _meta, docgen } = this.props
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header.H1 style={headerStyle}>{_meta.name}</Header.H1>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <List className='link' style={{ float: 'right' }}>
              {this.renderSourceLink()}
              {this.renderSemanticDocsLink()}
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <p style={descriptionStyle}>{docgen.docBlock.description}</p>
          </Grid.Column>
        </Grid.Row>
        {this.renderRelated()}
        <Divider className='hidden section' />
      </Grid>
    )
  }
}
