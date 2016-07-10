import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useKeyOnly, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

const _meta = {
  library: META.library.semanticUI,
  name: 'Progress',
  type: META.type.module,
  props: {
    attached: ['top', 'bottom'],
    color: sui.colors,
    size: _.without(sui.sizes, 'mini', 'massive'),
  },
}
export default class Progress extends Component {
  static propTypes = {
    /** A progress bar can show activity. */
    active: PropTypes.bool,

    /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
    attached: PropTypes.oneOf(_meta.props.attached),

    /** Whether success state should automatically trigger when progress completes. */
    autoSuccess: PropTypes.bool,

    /** A progress bar can have different colors. */
    color: PropTypes.oneOf(_meta.props.color),

    /** Displayed as a label immediately below the progress bar. */
    children: PropTypes.node,

    /** Additional className. */
    className: PropTypes.string,

    /** A progress bar be disabled. */
    disabled: PropTypes.bool,

    /** A progress bar can show a error state. */
    error: PropTypes.bool,

    /** An indicating progress bar visually indicates the current level of progress of a task. */
    indicating: PropTypes.bool,

    /** A progress bar can have its colors inverted. */
    inverted: PropTypes.bool,

    /** Can be set to either to display progress as percent or ratio. */
    label: customPropTypes.all([
      PropTypes.oneOf(['ratio', 'percent']),
      customPropTypes.require(['total', 'value']),
    ]),

    /** Current percent complete. */
    percent: customPropTypes.all([
      customPropTypes.mutuallyExclusive(['total', 'value']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** A progress bar can contain a text value indicating current progress. */
    progress: PropTypes.bool,

    /** Decimal point precision for calculated progress. */
    precision: PropTypes.number,

    /** A progress bar can vary in size. */
    size: PropTypes.oneOf(_meta.props.size),

    /** A progress bar can show a success state. */
    success: PropTypes.bool,

    /** For use with value. Together, these will calculate the percent. Cannot be used with percent. */
    total: customPropTypes.all([
      customPropTypes.require(['value']),
      customPropTypes.mutuallyExclusive(['percent']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** For use with total. Together, these will calculate the percent. Cannot be used with percent. */
    value: customPropTypes.all([
      customPropTypes.require(['total']),
      customPropTypes.mutuallyExclusive(['percent']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** A progress bar can show a warning state. */
    warning: PropTypes.bool,
  }

  static defaultProps = {
    precision: 1,
  }

  static _meta = _meta

  render() {
    const {
      active, attached, autoSuccess, color, children, className, disabled, error, indicating,
      inverted, label, percent, progress, precision, size, success, total, value, warning,
    } = this.props

    const isAutoSuccess = autoSuccess && (percent >= 100 || value >= total)

    let progressText
    let progressValue
    let progressJSX
    if (progress || label) {
      progressValue = (!_.isUndefined(percent) ? percent : value / total * 100)
        .toPrecision(precision + 1)

      if (label === 'percent') {
        progressText = `${progressValue}%`
      } else if (label === 'ratio') {
        progressText = `${value}/${total}`
      }

      progressJSX = <div className='progress'>{progressText}</div>
    }

    const classes = cx(
      'ui',
      size,
      color,
      useKeyOnly(active, 'active'),
      useKeyOnly(isAutoSuccess || success, 'success'),
      useKeyOnly(warning, 'warning'),
      useKeyOnly(error, 'error'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(indicating, 'indicating'),
      useKeyOnly(inverted, 'inverted'),
      useValueAndKey(attached, 'attached'),
      className,
      'progress'
    )

    const rest = getUnhandledProps(Progress, this.props)

    return (
      <div {...rest} className={classes}>
        <div className='bar'>
          {progressJSX}
        </div>
        {children && <div className='label'>{children}</div>}
      </div>
    )
  }
}
