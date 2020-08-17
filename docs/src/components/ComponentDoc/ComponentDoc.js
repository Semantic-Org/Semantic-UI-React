import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { withRouter, withRouteData } from 'react-static'
import { Grid, Header, Icon, Label, Popup } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'
import { docTypes, examplePathToHash } from 'docs/src/utils'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentSidebar from './ComponentSidebar'
import ComponentDocContext from './ComponentDocContext'

const exampleEndStyle = {
  textAlign: 'center',
  opacity: 0.5,
  paddingTop: '50vh',
}

class ComponentDoc extends Component {
  state = {}
  examplesRef = createRef()

  static getDerivedStateFromProps(props, state) {
    const resetOccurred = props.displayName !== state.displayName

    return {
      displayName: props.displayName,
      exampleStates: resetOccurred ? {} : state.exampleStates,
    }
  }

  handleExampleVisibility = (examplePath, visible) =>
    this.setState((prevState) => ({
      exampleStates: {
        ...prevState.exampleStates,
        [examplePath]: visible,
      },
    }))

  handleSidebarItemClick = (e, { examplePath }) => {
    const { history, location } = this.props

    history.replace(`${location.pathname}#${examplePathToHash(examplePath)}`)
  }

  render() {
    const { componentsInfo, displayName, deprecated, seeTags, sidebarSections } = this.props
    const activePath = _.findKey(this.state.exampleStates)
    const componentInfo = componentsInfo[displayName]
    const contextValue = { ...this.props, onVisibilityChange: this.handleExampleVisibility }

    return (
      /* TODO: use `title` from context */
      <DocsLayout additionalTitle={displayName} sidebar title='Semantic UI React'>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <Header
                as='h1'
                content={
                  <>
                    <span>{displayName}</span>
                    {deprecated && (
                      <Popup trigger={<Label color='black'>Deprecated</Label>}>
                        This component is deprecated and will be removed in the next major release.
                      </Popup>
                    )}
                  </>
                }
                subheader={_.join(componentInfo.docblock.description, ' ')}
              />
              <ComponentDocSee seeTags={seeTags} />
              {componentInfo.repoPath && (
                <ComponentDocLinks
                  displayName={displayName}
                  parentDisplayName={componentInfo.parentDisplayName}
                  repoPath={componentInfo.repoPath}
                  type={componentInfo.type}
                />
              )}
              <ComponentProps componentsInfo={componentsInfo} displayName={displayName} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.examplesRef}>
                <ComponentDocContext.Provider value={contextValue}>
                  <ComponentExamples
                    displayName={displayName}
                    examplesExist={componentInfo.examplesExist}
                    type={componentInfo.type}
                  />
                </ComponentDocContext.Provider>
              </div>
              <div style={exampleEndStyle}>
                This is the bottom <Icon name='pointing down' />
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                examplesRef={this.examplesRef}
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

ComponentDoc.propTypes = {
  componentsInfo: PropTypes.objectOf(docTypes.componentInfoShape).isRequired,
  displayName: PropTypes.string.isRequired,
  deprecated: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  seeTags: docTypes.seeTags.isRequired,
  sidebarSections: docTypes.sidebarSections.isRequired,
  title: PropTypes.string.isRequired,
}

export default withRouteData(withRouter(ComponentDoc))
