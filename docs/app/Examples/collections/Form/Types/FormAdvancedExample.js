import _ from 'lodash'
import React from 'react'
import { Form, Checkbox, Dropdown, Input, Button, Message } from 'stardust'

const typeToControl = {
  checkbox: Checkbox,
  dropdown: Dropdown,
  text: Input,
  submit: Button
}

const labelFromNode = (node) =>
  node.label || _.isUndefined(node.label) && _.startCase(node.name)

const createKeyPath = (keys) => keys.join('.')

class AdvancedForm extends React.Component {
  static propTypes = {
    formSchema: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    defaultValues: React.PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      values: _.merge({}, props.defaultValues)
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleNestedAdd = this.handleNestedAdd.bind(this)
    this.handleNestedRemove = this.handleNestedRemove.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (props) {
    this.setState({
      values: _.merge({}, props.defaultValues)
    })
  }

  setValue (keyPath, value) {
    const { values } = this.state

    _.set(values, keyPath, value)

    this.setState({ values })
  }

  handleCheckboxChange (e, result) {
    const { name: keyPath, checked } = result

    this.setValue(keyPath, checked)
  }

  // TODO: Be able to infer name from result
  handleDropdownChange (keyPath, e, value) {
    this.setValue(keyPath, value)
  }

  handleInputChange (e) {
    const { name: keyPath, value } = e.target

    this.setValue(keyPath, value)
  }

  handleNestedAdd (e) {
    e.preventDefault()

    const { name: keyPath } = e.target
    const { values } = this.state

    const originalValue = _.get(values, keyPath) || []

    this.setValue(keyPath, [...originalValue, {}])
  }

  handleNestedRemove (e) {
    e.preventDefault()

    const { name: keyPath } = e.target
    const { values } = this.state

    _.unset(values, keyPath)

    // _.unset leaves an undefined value at the path it removes so we
    // need to compact the array manually.
    const [, basePath] = keyPath.match(/^(.*?)\.\w+$/)
    const originalValue = _.get(values, basePath) || []

    this.setValue(basePath, _.compact(originalValue))
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.onSubmit(e, this.state.values)
  }

  renderFormCollection (node, options = {}) {
    const { values } = this.state
    const { name, schema } = node
    const { prefix = [] } = options

    const keyPath = [...prefix, name].join('.')
    const items = _.get(values, keyPath) || []

    const renderItem = (_item, index) => {
      const itemPrefix = [...prefix, name, index]

      return (
        <Form.Group widths='equal'>
          {this.renderFormSchema(schema, { ...options, prefix: itemPrefix })}
          <Button onClick={this.handleNestedRemove} name={createKeyPath(itemPrefix)} content='Remove' />
        </Form.Group>
      )
    }

    return (
      <Form.Field>
        <label>{labelFromNode(node)}</label>
        {items.map(renderItem)}
        <Button onClick={this.handleNestedAdd} name={keyPath} content='Add' />
      </Form.Field>
    )
  }

  renderFormGroup (node, options = {}) {
    const { schema } = node

    return <Form.Group widths='equal'>{this.renderFormSchema(schema, options)}</Form.Group>
  }

  renderFormNode (node, options = {}) {
    const { values } = this.state
    const { name, placeholder, type } = node
    const { prefix = [] } = options

    if (type === 'group') {
      return this.renderFormGroup(node, options)
    }

    if (type === 'nested') {
      return this.renderFormCollection(node, options)
    }

    const keyPath = createKeyPath([...prefix, name])

    const baseFieldProps = {
      control: typeToControl[type],
      name: keyPath
    }

    let fieldProps

    if (baseFieldProps.control === Input) {
      fieldProps = {
        label: labelFromNode(node),
        onChange: this.handleInputChange,
        placeholder: placeholder || _.startCase(name),
        value: _.get(values, keyPath) || ''
      }
    } else if (baseFieldProps.control === Checkbox) {
      fieldProps = {
        label: labelFromNode(node),
        onChange: this.handleCheckboxChange,
        placeholder: placeholder || _.startCase(name),
        checked: !!_.get(values, keyPath)
      }
    } else if (baseFieldProps.control === Dropdown) {
      fieldProps = {
        label: labelFromNode(node),
        onChange: _.partial(this.handleDropdownChange, name),
        placeholder: placeholder || _.startCase(name),
        value: _.get(values, keyPath) || '',
        options: node.options
      }
    } else if (type === 'submit') {
      fieldProps = {
        onClick: this.handleSubmit,
        content: labelFromNode(node)
      }
    }

    return <Form.Field {...baseFieldProps} {...fieldProps} />
  }

  renderFormSchema (schema, options) {
    return schema.map((node) => this.renderFormNode(node, options))
  }

  render () {
    const { formSchema } = this.props

    return (
      <Form>
        {this.renderFormSchema(formSchema)}
        <Message>
          <pre>state: {JSON.stringify(this.state, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

const formSchema = [
  {
    type: 'group',
    schema: [
      { type: 'text', name: 'firstName' },
      { type: 'text', name: 'lastName' }
    ]
  },
  { type: 'text', name: 'title' },
  { type: 'text', name: 'company' },
  {
    type: 'nested',
    name: 'emailAddresses',
    schema: [
      { type: 'text', name: 'label', label: null },
      { type: 'text', name: 'value', label: null }
    ]
  },
  {
    type: 'dropdown', name: 'gender', options: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ]
  },
  {
    type: 'checkbox', name: 'newsletter', label: 'Interested in receiving newletter'
  },
  { type: 'submit', name: 'Submit' }
]

const onSubmit = (e, values) => console.log('Form submitted: ', values)

const FormAdvancedExample = () => <AdvancedForm formSchema={formSchema} onSubmit={onSubmit} />

export default FormAdvancedExample
