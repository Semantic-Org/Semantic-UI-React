import PropTypes from 'prop-types'
import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {Grid} from 'semantic-ui-react'

import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentSidebar from './ComponentSidebar'

const topRowStyle = {margin: '1em'}

export default class ComponentDoc extends Component {
  static childContextTypes = {
    onTopPassed: PropTypes.func
  }

  static propTypes = {
    _meta: PropTypes.object,
  }

  state = {}

  getChildContext() {
    return {
      onTopPassed: this.handleExampleTopPassed,
    };
  }

  handleExampleTopPassed = (e, { examplePath, title }) => {
    console.log(title)
    this.setState({ activePath: examplePath })
  }

  handleExamplesRef = examplesRef => this.setState({ examplesRef })

  render() {
    const {_meta} = this.props
    const { activePath, examplesRef } = this.state

    return (
      <DocumentTitle title={`${_meta.name} | Semantic UI React`}>
        <Grid>
          <Grid.Row columns='equal' style={topRowStyle}>
            <Grid.Column>
              <ComponentDocHeader componentName={_meta.name}/>
              <ComponentDocSee componentName={_meta.name}/>
              <ComponentDocLinks componentName={_meta.parent || _meta.name} type={_meta.type}/>
              <ComponentProps componentName={_meta.name}/>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}/>
          </Grid.Row>

          <Grid.Row columns='equal'>
            <Grid.Column>
              <div ref={this.handleExamplesRef}>
                <ComponentExamples componentName={_meta.name}/>
              </div>
            </Grid.Column>
            <Grid.Column computer={5} largeScreen={4} widescreen={4}>
              <ComponentSidebar
                activePath={activePath}
                componentName={_meta.parent || _meta.name}
                examplesRef={examplesRef}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DocumentTitle>
    )
  }
}
