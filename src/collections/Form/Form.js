import _ from 'lodash'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { getPluginProps, getComponentProps } from '../../utils/propUtils'

const pluginPropTypes = {
  // form settings
  keyboardShortcuts: PropTypes.bool,
  on: PropTypes.oneOf([
    'blur',
    'change',
    'submit',
  ]),
  revalidate: PropTypes.bool,
  delay: PropTypes.bool,
  inline: PropTypes.bool,
  transition: PropTypes.string,
  duration: PropTypes.number,
  // callbacks
  onValid: PropTypes.func,
  onInvalid: PropTypes.func,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  fields: PropTypes.object,
}

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    settings: PropTypes.object,
  };

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate(prevProps, prevState) {
    this.refresh()
  }

  componentWillUnmount() {
    this.element.off()
  }

  plugin() {
    return this.element.form(...arguments)
  }

  refresh() {
    this.element = $(this.refs.element)
    this.element.form(getPluginProps(this.props, pluginPropTypes))
  }

  serializeJson = () => {
    const form = this.refs.element
    const json = {}

    _.each(['input', 'textarea', 'select'], (tag) => {
      _.each(form.getElementsByTagName(tag), (node, index, arr) => {
        const name = node.getAttribute('name')

        switch (node.getAttribute('type')) {
          case 'checkbox':
            json[name] = { checked: node.checked }
            break

          case 'radio':
            json[name] = {
              value: _.find(arr, { name, checked: true }).value,
            }
            break

          default:
            json[name] = { value: node.value }
            break
        }
      })
    })

    return json
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Form',
    type: META.type.collection,
  };

  render() {
    const classes = classNames(
      'sd-form',
      'ui',
      this.props.className,
      'form'
    )
    const props = getComponentProps(this.props, pluginPropTypes)
    return (
      <form {...props} className={classes} ref='element'>
        {this.props.children}
      </form>
    )
  }
}
