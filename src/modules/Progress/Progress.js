import $ from 'jquery'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

export default class Progress extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Display progress inside the bar.
     */
    showProgress: PropTypes.bool,

    // progress settings
    autoSuccess: PropTypes.bool,
    label: PropTypes.oneOf(['ratio', 'percent']),
    limitValues: PropTypes.bool,
    onActive: PropTypes.func,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    onWarning: PropTypes.func,
    percent: PropTypes.number,
    precision: PropTypes.number,
    random: PropTypes.bool,
    showActivity: PropTypes.bool,
    total: PropTypes.bool,
    value: PropTypes.bool,
  }

  static defaultProps = {
    showActivity: false,
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate() {
    this.refresh()
  }

  static _meta = {
    library: META.library.stardust,
    name: 'Progress',
    type: META.type.module,
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) onChange(e)
  }

  handleError = (e) => {
    const { onError } = this.props
    if (onError) onError(e)
  }

  plugin(...args) {
    return this.element.progress(...args)
  }

  refresh() {
    this.element = $(this.refs.element)
    this.element.progress({
      autoSuccess: this.props.autoSuccess,
      label: this.props.label,
      limitValues: this.props.limitValues,
      onActive: this.props.onActive,
      onChange: this.props.onChange,
      onError: this.props.onError,
      onSuccess: this.props.onSuccess,
      onWarning: this.props.onWarning,
      percent: this.props.percent,
      precision: this.props.precision,
      random: this.props.random,
      showActivity: this.props.showActivity,
      total: this.props.total,
      value: this.props.value,
    })
  }

  render() {
    const { children, className, onChange, onError, showProgress } = this.props
    const classes = classNames(
      'ui',
      className,
      'progress'
    )

    const labelText = (
      <div className='label'>
        {children}
      </div>
    )

    const props = getUnhandledProps(Progress, this.props)
    return (
      <div {...props} className={classes} ref='element' onChange={onChange} onError={onError}>
        <div className='bar'>
          {showProgress && <div className='progress' />}
        </div>
        {children && labelText}
      </div>
    )
  }
}
