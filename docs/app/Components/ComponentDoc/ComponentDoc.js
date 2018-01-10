import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { withRouter } from 'react-router'
import { Grid } from 'semantic-ui-react'

import withDocInfo from 'docs/app/HOC/withDocInfo'
import { scrollToAnchor } from 'docs/app/utils'
import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'

const gridStyle = { paddingBottom: '10em' }
const topRowStyle = { margin: '1em' }

class ComponentDoc extends Component {
  static childContextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    componentGroup: PropTypes.objectOf(
      PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.string),
        props: PropTypes.array,
      }),
    ),
    componentName: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    ghLink: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    seeItems: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
      }),
    ).isRequired,
    suiLink: PropTypes.string,
  }

  state = {}

  getChildContext() {
    return {
      onPassed: this.handleExamplePassed,
    }
  }

  componentWillReceiveProps({ componentName: next }) {
    const { componentName: current } = this.props

    if (current !== next) this.setState({ activePath: undefined })
  }

  handleExamplePassed = (e, { examplePath }) => this.setState({ activePath: examplePath })

  handleExamplesRef = examplesRef => this.setState({ examplesRef })

  handleSidebarItemClick = (e, { path }) => {
    const { history } = this.props
    const aPath = _.kebabCase(_.last(path.split('/')))

    history.replace(`${location.pathname}#${aPath}`)
    scrollToAnchor()
  }

  render() {
    const { componentGroup, componentName, description, ghLink, path, seeItems, suiLink } = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocumentTitle title={`${componentName} | Semantic UI React`}>
        <Grid style={gridStyle}>
          <Grid.Row columns='equal' style={topRowStyle}>
            <Grid.Column>
              <ComponentDocHeader componentName={componentName} description={description} />
              <ComponentDocSee items={seeItems} />
              <ComponentDocLinks
                componentName={componentName}
                ghLink={ghLink}
                path={path}
                suiLink={suiLink}
              />
              <ComponentProps componentGroup={componentGroup} componentName={componentName} />
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4} />
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples componentName={componentName} />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                componentName={componentName}
                examplesRef={examplesRef}
                onItemClick={this.handleSidebarItemClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DocumentTitle>
    )
  }
}

export default withDocInfo(withRouter(ComponentDoc))
