import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { withRouter } from 'react-router'
import { Grid, Header, Icon } from 'semantic-ui-react'

import componentInfoShape from 'docs/src/utils/componentInfoShape'
import { scrollToAnchor, examplePathToHash, getFormattedHash } from 'docs/src/utils'
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

class ComponentDoc extends Component<any, any> {
  static childContextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    info: componentInfoShape.isRequired,
  }

  state: any = {}

  componentWillMount() {
    const { history, location } = this.props

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

  componentWillReceiveProps({ info }) {
    if (info.displayName !== this.props.info.displayName) {
      this.setState({ activePath: undefined })
    }
  }

  handleExamplePassed = (e, { examplePath }) => {
    this.setState({ activePath: examplePathToHash(examplePath) })
  }

  handleExamplesRef = examplesRef => this.setState({ examplesRef })

  handleSidebarItemClick = (e, { examplePath }) => {
    const { history, location } = this.props
    const activePath = examplePathToHash(examplePath)

    history.replace(`${location.pathname}#${activePath}`)
    // set active hash path
    this.setState({ activePath }, scrollToAnchor)
  }

  render() {
    const { info } = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocumentTitle title={`${info.displayName} | Stardust`}>
        <Grid>
          <Grid.Row style={topRowStyle}>
            <Grid.Column>
              <Header
                as="h1"
                content={info.displayName}
                subheader={_.join(info.docblock.description, ' ')}
              />
              <ComponentDocSee displayName={info.displayName} />
              <ComponentDocLinks
                displayName={info.displayName}
                parentDisplayName={info.parentDisplayName}
                repoPath={info.repoPath}
                type={info.type}
              />
              <ComponentProps displayName={info.displayName} props={info.props} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="equal">
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples displayName={info.displayName} />
              </div>
              <div style={exampleEndStyle as any}>
                This is the bottom <Icon name="pointing down" />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                displayName={info.displayName}
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
