import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import { Grid, Header, Icon } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'
import { examplePathToHash, getFormattedHash, propTypes, scrollToAnchor } from 'docs/src/utils'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'

const topRowStyle = { margin: '1em' }
const exampleEndStyle = {
  textAlign: 'center',
  opacity: 0.5,
  paddingTop: '50vh',
}

class ComponentDoc extends Component {
  static childContextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    componentInfo: propTypes.componentInfoShape.isRequired,
    history: PropTypes.object.isRequired,
    seeTags: propTypes.seeTags.isRequired,
    subcomponentsInfo: PropTypes.objectOf(propTypes.componentInfoShape).isRequired,
  }

  state = {}

  componentWillMount() {
    const { history } = this.props

    if (window.location.hash) {
      const activePath = getFormattedHash(window.location.hash)
      history.replace(`${window.location.pathname}#${activePath}`)
      this.setState({ activePath })
    }
  }

  getChildContext() {
    return {
      onPassed: this.handleExamplePassed,
    }
  }

  componentWillReceiveProps({ componentInfo }) {
    if (componentInfo.displayName !== this.props.componentInfo.displayName) {
      this.setState({ activePath: undefined })
    }
  }

  handleExamplePassed = (e, { examplePath }) => {
    this.setState({ activePath: examplePathToHash(examplePath) })
  }

  handleExamplesRef = examplesRef => this.setState({ examplesRef })

  handleSidebarItemClick = (e, { examplePath }) => {
    const { history } = this.props
    const activePath = examplePathToHash(examplePath)

    history.replace(`${location.pathname}#${activePath}`)
    // set active hash path
    this.setState({ activePath }, scrollToAnchor)
  }

  render() {
    const { componentInfo, seeTags, subcomponentsInfo } = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocsLayout additionalTitle={componentInfo.displayName} sidebar>
        <Grid>
          <Grid.Row style={topRowStyle}>
            <Grid.Column>
              <Header
                as='h1'
                content={componentInfo.displayName}
                subheader={_.join(componentInfo.docblock.description, ' ')}
              />
              <ComponentDocSee seeTags={seeTags} />
              <ComponentDocLinks
                displayName={componentInfo.displayName}
                parentDisplayName={componentInfo.parentDisplayName}
                repoPath={componentInfo.repoPath}
                type={componentInfo.type}
              />
              <ComponentProps componentInfo={componentInfo} subcomponentsInfo={subcomponentsInfo} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples displayName={componentInfo.displayName} />
              </div>
              <div style={exampleEndStyle}>
                This is the bottom <Icon name='pointing down' />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                displayName={componentInfo.displayName}
                examplesRef={examplesRef}
                onItemClick={this.handleSidebarItemClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DocsLayout>
    )
  }
}

export default withRouteData(ComponentDoc)
