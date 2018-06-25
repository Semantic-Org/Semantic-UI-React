import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Button, Icon, Form, Menu, Popup, Sticky, Tab } from 'semantic-ui-react'

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
    this.fetchVariables()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.displayName !== nextProps.displayName) {
      this.fetchSections(nextProps)
      this.fetchVariables(nextProps)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const didFieldsChange = !_.isEqual(this.state.fields, prevState.fields)

    if (didFieldsChange) {
      this.modifyVars()
    }
  }

  fetchSections = ({ displayName } = this.props) => {
    import(`docs/src/exampleMenus/${displayName}.examples.json`).then((sections) => {
      this.setState({ sections })
    })
  }

  fetchVariables = ({ displayName } = this.props) => {
    const propertyValueRegExp = /^(@\w+):\s+([\s\S]+?);$/gm

    import(`!raw-loader!docs/src/assets/less/themes/default/elements/${_.kebabCase(
      displayName,
    )}.variables`)
      .then((variables) => {
        const fields = variables.match(propertyValueRegExp).map((match) => {
          const [property, value] = match
            .replace(/;$/, '')
            .split(':')
            .map(part => part.replace(/\n/, '').trim())

          return { property, value, defaultValue: value }
        })
        this.setState({ fields })
      })
      .catch(() => {
        this.setState({ fields: null })
      })
  }

  modifyVars = _.debounce(() => {
    const { fields } = this.state

    this.setState({ error: null })

    const vars = fields.reduce((acc, { property, value }) => {
      acc[property] = value
      return acc
    }, {})

    window.less
      .modifyVars(vars)
      .then(() => {
        this.setState({ error: null })
      })
      .catch((err) => {
        this.setState({ error: err.message })
      })
  }, 500)

  handleVariablesChange = (e, { name, value }) => {
    const fields = _.cloneDeep(this.state.fields)
    const index = _.findIndex(fields, { property: name })

    fields[index].value = value

    this.setState({ error: null, fields })
  }

  handleResetClick = field => () => {
    this.handleVariablesChange(null, { name: field.property, value: field.defaultValue })
  }

  render() {
    const { activePath, examplesRef, onItemClick } = this.props
    const { error, fields, sections } = this.state

    return (
      <Sticky context={examplesRef} offset={15}>
        <Tab
          defaultActiveIndex={1}
          menu={{ secondary: true, pointing: true }}
          panes={[
            {
              key: 'examples',
              menuItem: 'Examples',
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
              key: 'variables',
              menuItem: 'Variables',
              render: () => (
                <div>
                  {error}
                  <Form style={{ maxHeight: '60vh', overflowX: 'hidden' }}>
                    {_.map(fields, field => (
                      <Form.Input
                        key={field.property}
                        name={field.property}
                        value={field.value}
                        label={field.property}
                        action={
                          field.value !== field.defaultValue && (
                            <Popup
                              size='tiny'
                              inverted
                              content={field.defaultValue}
                              trigger={
                                <Button onClick={this.handleResetClick(field)}>
                                  Reset <Icon name='refresh' />
                                </Button>
                              }
                            />
                          )
                        }
                        onChange={this.handleVariablesChange}
                      />
                    ))}
                  </Form>
                </div>
              ),
            },
          ]}
        />
      </Sticky>
    )
  }
}

export default ComponentSidebar
