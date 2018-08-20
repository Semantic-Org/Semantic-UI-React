import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import { Grid, Header, Icon } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'
import { docTypes, examplePathToHash, getFormattedHash, scrollToAnchor } from 'docs/src/utils'
import { isBrowser } from 'src/lib'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'

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
    componentsInfo: PropTypes.objectOf(docTypes.componentInfoShape).isRequired,
    displayName: PropTypes.string.isRequired,
    exampleKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    history: PropTypes.object.isRequired,
    seeTags: docTypes.seeTags.isRequired,
    sidebarSections: docTypes.sidebarSections.isRequired,
  }

  state = {}

  componentWillMount() {
    const { exampleKeys, history } = this.props

    if (isBrowser() && window.location.hash) {
      const activePath = getFormattedHash(exampleKeys, window.location.hash)
      history.replace(`${window.location.pathname}#${activePath}`)
      this.setState({ activePath })
    }
  }

  getChildContext() {
    return {
      onPassed: this.handleExamplePassed,
    }
  }

  componentWillReceiveProps({ displayName }) {
    if (displayName !== this.props.displayName) {
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
    const { componentsInfo, displayName, seeTags, sidebarSections } = this.props
    const { activePath, examplesRef } = this.state
    const componentInfo = componentsInfo[displayName]

    return (
      <DocsLayout additionalTitle={displayName} sidebar>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <Header
                as='h1'
                content={displayName}
                subheader={_.join(componentInfo.docblock.description, ' ')}
              />
              <ComponentDocSee seeTags={seeTags} />
              <ComponentDocLinks
                displayName={displayName}
                parentDisplayName={componentInfo.parentDisplayName}
                repoPath={componentInfo.repoPath}
                type={componentInfo.type}
              />
              <ComponentProps componentsInfo={componentsInfo} displayName={displayName} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples
                  displayName={displayName}
                  examplesExist={componentInfo.examplesExist}
                  type={componentInfo.type}
                />
              </div>
              <div style={exampleEndStyle}>
                This is the bottom <Icon name='pointing down' />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                examplesRef={examplesRef}
                onItemClick={this.handleSidebarItemClick}
                sections={sidebarSections}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DocsLayout>
    )
  }
}

export default withRouteData(ComponentDoc)
