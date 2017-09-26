import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { withRouter } from 'react-router'
import { Grid } from 'semantic-ui-react'

import { scrollToAnchor } from 'docs/app/utils'
import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'

const topRowStyle = { margin: '1em' }

class ComponentDoc extends Component {
  static childContextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    _meta: PropTypes.object,
    history: PropTypes.object.isRequired,
  }

  state = {}

  getChildContext() {
    return {
      onPassed: this.handleExamplePassed,
    }
  }

  componentWillReceiveProps() {
    this.setState({ activePath: undefined })
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
    const { _meta } = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocumentTitle title={`${_meta.name} | Semantic UI React`}>
        <Grid>
          <Grid.Row columns='equal' style={topRowStyle}>
            <Grid.Column>
              <ComponentDocHeader componentName={_meta.name} />
              <ComponentDocSee componentName={_meta.name} />
              <ComponentDocLinks componentName={_meta.parent || _meta.name} type={_meta.type} />
              <ComponentProps componentName={_meta.name} />
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4} />
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples componentName={_meta.name} />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                componentName={_meta.parent || _meta.name}
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

export default withRouter(ComponentDoc)
