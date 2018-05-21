import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { withRouter } from 'react-router'
import { Grid, Icon } from 'semantic-ui-react'

import withDocInfo from 'docs/src/hoc/withDocInfo'
import { scrollToAnchor, examplePathToHash, getFormattedHash } from 'docs/src/utils'
import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'

const topRowStyle = { margin: '1em' }
const exampleEndStyle = {
  textAlign: 'center',
  opacity: 0.5,
  paddingTop: '75vh',
}

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
  }

  state = {}

  componentWillMount() {
    const { history } = this.props

    if (location.hash) {
      const activePath = getFormattedHash(location.hash)
      history.replace(`${location.pathname}#${activePath}`)
      this.setState({ activePath })
    }
  }

  getChildContext() {
    return {
      onPassed: this.handleExamplePassed,
    }
  }

  componentWillReceiveProps({ componentName: next }) {
    const { componentName: current } = this.props

    if (current !== next) this.setState({ activePath: undefined })
  }

  handleExamplePassed = (e, { examplePath }) =>
    this.setState({ activePath: examplePathToHash(examplePath) })

  handleExamplesRef = examplesRef => this.setState({ examplesRef })

  handleSidebarItemClick = (e, { path }) => {
    const { history } = this.props
    const aPath = examplePathToHash(path)

    history.replace(`${location.pathname}#${aPath}`)
    // set active hash path
    this.setState(
      {
        activePath: aPath,
      },
      scrollToAnchor,
    )
  }

  render() {
    const { componentGroup, componentName, description, ghLink, path, seeItems } = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocumentTitle title={`${componentName} | Semantic UI React`}>
        <Grid>
          <Grid.Row style={topRowStyle}>
            <Grid.Column>
              <ComponentDocHeader componentName={componentName} description={description} />
              <ComponentDocSee items={seeItems} />
              <ComponentDocLinks ghLink={ghLink} path={path} />
              <ComponentProps componentGroup={componentGroup} componentName={componentName} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples componentName={componentName} />
              </div>
              <div style={exampleEndStyle}>
                This is the bottom <Icon name='pointing down' />
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
