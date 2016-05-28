import _ from 'lodash'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import $ from 'jquery'

export default class Checkbox extends Component {
  static propTypes = {
    beforeChecked: PropTypes.func,
    beforeDeterminate: PropTypes.func,
    beforeIndeterminate: PropTypes.func,
    beforeUnchecked: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onChecked: PropTypes.func,
    onDeterminate: PropTypes.func,
    onDisable: PropTypes.func,
    onEnable: PropTypes.func,
    onIndeterminate: PropTypes.func,
    onUnchecked: PropTypes.func,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'checkbox',
  }

  componentDidMount() {
    this.element = $(this.refs.element)
    this.element.checkbox({
      onChange: this.props.onChange,
      onChecked: this.props.onChecked,
      onIndeterminate: this.props.onIndeterminate,
      onDeterminate: this.props.onDeterminate,
      onUnchecked: this.props.onUnchecked,
      beforeChecked: this.props.beforeChecked,
      beforeIndeterminate: this.props.beforeIndeterminate,
      beforeDeterminate: this.props.beforeDeterminate,
      beforeUnchecked: this.props.beforeUnchecked,
      onEnable: this.props.onEnable,
      onDisable: this.props.onDisable,
    })
  }

  componentWillUnmount() {
    _.invoke(this, 'element.off')
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Checkbox',
    type: META.type.module,
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) onChange(e)
  }

  plugin(...args) {
    return this.element.checkbox(...args)
  }

  render() {
    let type = this.props.type
    if (_.includes(this.props.className, 'radio')) {
      type = 'radio'
    }
    const classes = classNames(
      'sd-checkbox',
      'ui',
      this.props.className,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      { fitted: !this.props.label },
      'checkbox'
    )
    const props = getUnhandledProps(Checkbox, this.props)
    return (
      <div className={classes} ref='element'>
        <input {...props} type={type} onChange={this.handleChange} />
        <label>{this.props.label}</label>
      </div>
    )
  }
}
