import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Form, Menu, Sticky, Tab } from 'semantic-ui-react'

import ComponentSidebarSection from './ComponentSidebarSection'

const sidebarStyle = {
  background: '#fff',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  paddingLeft: '1em',
  paddingBottom: '0.1em',
  paddingTop: '0.1em',
}

class ComponentSidebar extends Component {
  static propTypes = {
    activePath: PropTypes.string,
    displayName: PropTypes.string,
    examplesRef: PropTypes.object,
    onItemClick: PropTypes.func,
  }

  state = {}

  componentDidMount() {
    this.fetchSections()
  }

  componentWillReceiveProps(nextProps) {
    this.fetchSections(nextProps)
  }

  fetchSections = ({ displayName } = this.props) => {
    import(`docs/src/exampleMenus/${displayName}.examples.json`).then((sections) => {
      this.setState({ sections })
    })
  }

  handleVariablesChange = _.debounce((e, { value }) => {
    try {
      // eslint-disable-next-line no-eval
      const varsObject = eval(`(function(){ return ${value} })()`)
      if (!varsObject) return

      this.setState({ error: null, isLessCompiling: true })
      window.less
        .modifyVars(varsObject)
        .then(() => {
          this.setState({ error: null, isLessCompiling: false })
        })
        .catch((err) => {
          this.setState({ error: err.message, isLessCompiling: false })
        })
    } catch (err) {
      this.setState({ error: err.message, isLessCompiling: false })
    }
  }, 500)

  render() {
    const { activePath, examplesRef, onItemClick } = this.props
    const { error, isLessCompiling, sections } = this.state

    return (
      <Sticky context={examplesRef} offset={15}>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={[
            {
              menuItem: { key: 'Examples', as: 'div', content: 'Examples' },
              render: () => (
                <Menu as={Accordion} fluid style={sidebarStyle} text vertical>
                  {_.map(sections, ({ examples, sectionName }) => (
                    <ComponentSidebarSection
                      activePath={activePath}
                      examples={examples}
                      key={sectionName}
                      sectionName={sectionName}
                      onItemClick={onItemClick}
                    />
                  ))}
                </Menu>
              ),
            },
            {
              menuItem: { key: 'Variables', as: 'div', content: 'Variables' },
              render: () => (
                <Form loading={isLessCompiling}>
                  <Form.TextArea autoHeight rows={1} onChange={this.handleVariablesChange} />
                  {error}
                </Form>
              ),
            },
          ]}
        />
      </Sticky>
    )
  }
}

export default ComponentSidebar
