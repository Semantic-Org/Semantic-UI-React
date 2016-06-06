import * as Babel from 'babel-standalone'
import ExperimentBanner from 'docs/app/Components/ExperimentBanner/ExperimentBanner'

// use require() to preserve variable names,
// eval() needs to reference them
const _ = require('lodash')
const React = require('react')
const { Component } = React
const ReactDOM = require('react-dom')

/* eslint-disable no-unused-vars */
const faker = require('faker')

// put all components in scope so examples can use them
import * as stardust from 'stardust'
const {
  // addons
  Confirm, Radio, Select, TextArea,
  // collections
  Breadcrumb, Form, Grid, Menu, Message, Table,
  // elements
  Button, Container, Divider, Flag, Header, Icon, Image, Input, Label, List, Loader, Rail, Segment, Step,
  // modules
  Accordion, Checkbox, Dropdown, Modal, Progress, Rating,
  // views
  Card, Feed, Item, Statistic,
} = stardust
/* eslint-enable no-unused-vars */

import docgenInfo from '../docgenInfo.json'
import babelrc from '../../../.babelrc'
const babelConfig = { presets: babelrc.presets }

import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/theme/tomorrow'
import AceEditor from 'react-ace'

// Set up custom completers by using a ace extension
// https://github.com/thlorenz/brace/issues/19
const languageTools = ace.acequire('ace/ext/language_tools')

const stardustCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    const completions = []
    _.each(stardust, (stardustComponent, name) => {
      // exclude sub-components
      if (stardustComponent._meta.parent) return

      // Component name
      completions.push({
        caption: name,
        value: name,
        meta: 'Stardust Component',
      })

      // Component propTypes
      _.each(stardustComponent.propTypes, (val, propName) => {
        completions.push({
          caption: propName,
          value: propName + '=',
          meta: 'Stardust Prop',
        })
      })

      // TODO could also autocomplete prop values here
    })
    callback(null, completions)
  },
}

const lodashCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    callback(null, _.map(_, (val, key) => ({
      caption: key,
      value: key,
      meta: 'lodash',
    })))
  },
}

languageTools.addCompleter(stardustCompleter)
languageTools.addCompleter(lodashCompleter)

// load up a component's docs/info and the initial editor content
const initialComponent = 'Label'
import initialExample from '!raw!src/elements/Label/Default-example'
// import initialExample from '!raw!src/elements/Label/className-example'

export default class NewDoc extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      sourceCode: initialExample,
    }
  }

  componentDidMount() {
    this.handleChangeCode(this.state.sourceCode)
  }

  handleChangeCode = (newValue) => {
    let error
    const IIFE = `(function() {\n${newValue}\nreturn Example\n}())`
    try {
      const transformed = Babel.transform(IIFE, babelConfig).code
      const Example = eval(transformed) // eslint-disable-line

      // handle examples as class/function or expression
      const instance = _.isFunction(Example) ? <Example /> : Example
      ReactDOM.render(instance, document.getElementById('example'))
    } catch (err) {
      error = err.message
    }
    this.setState({
      error,
      sourceCode: newValue,
    })
  }

  renderError() {
    const { error } = this.state
    if (!error) return null

    return <Message className='bottom attached error'>{error}</Message>
  }

  renderEditor() {
    const { sourceCode } = this.state
    return (
      <AceEditor
        mode='jsx'
        theme='tomorrow'
        width='100%'
        value={sourceCode}
        onChange={this.handleChangeCode}
        name='ace-editor'
        enableBasicAutocompletion
        enableLiveAutocompletion
        tabSize={2}
        useSoftTabs
        editorProps={{ $blockScrolling: Infinity }}
      />
    )
  }

  render() {
    const componentInfo = _.find(docgenInfo, (val, key) => key.includes(`/${initialComponent}.js`)) || {}

    const propDescriptions = _.map(componentInfo.props, (propDef, propName) => (
      <Grid.Column key={propName}>
        <code>{propName}</code>
        <p>{propDef.docBlock.description}</p>
      </Grid.Column>
    ))

    return (
      <div>
        <ExperimentBanner />
        <Grid className='padded'>
          <Grid.Row className='one column'>
            <Grid.Column>
              <Header.H1 className=''>
                Label
                <Header.Subheader>
                  {componentInfo.docBlock.description}
                </Header.Subheader>
              </Header.H1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='vertically divided two column'>
            <Grid.Column>
              {this.renderEditor()}
              <Segment className='bottom attached blue' icon='blue info'>
                <b>Globals:</b>{' '}
                Stardust components plus{' '}
                <code>React</code>
                lodash <code>_</code>
                and <code>faker</code>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <div id='example' />
              {this.renderError()}
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row className='one column'>
            <Grid.Column>
              <Grid>
                <Grid.Column>
                  <Header.H3>Props</Header.H3>
                  <Grid className='three column'>
                    {propDescriptions}
                  </Grid>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
