import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useKeyOnly, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function Progress(props) {
  const {
    active, attached, autoSuccess, color, children, className, disabled, error, indicating,
    inverted, label, percent, precision, progress, size, success, total, value, warning,
  } = props

  const isAutoSuccess = autoSuccess && (percent >= 100 || value >= total)

  const showProgress = progress
    || label
    || !_.isUndefined(precision)
    || !(_.every([total, value], _.isUndefined))

  let _percent
  if (!_.isUndefined(percent)) {
    _percent = percent
  } else if (!_.isUndefined(total) && !_.isUndefined(value)) {
    _percent = value / total * 100
  }

  _percent = _.clamp(_percent, 0, 100)

  if (!_.isUndefined(precision)) {
    _percent = _.round(_percent, precision)
  }

  let progressText
  if (label === 'percent' || label === true || _.isUndefined(label)) {
    progressText = `${_percent}%`
  } else if (label === 'ratio') {
    progressText = `${value}/${total}`
  }

  const classes = cx(
    'ui',
    size,
    color,
    useKeyOnly(active || indicating, 'active'),
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

  const rest = getUnhandledProps(Progress, props)

  return (
    <div {...rest} className={classes} data-percent={_percent}>
      <div className='bar' style={{ width: `${_percent}%` }}>
        {showProgress && <div className='progress'>{progressText}</div>}
      </div>
      {children && <div className='label'>{children}</div>}
    </div>
  )
}

Progress._meta = {
  library: META.library.semanticUI,
  name: 'Progress',
  type: META.type.module,
  props: {
    attached: ['top', 'bottom'],
    color: sui.colors,
    label: ['ratio', 'percent'],
    size: _.without(sui.sizes, 'mini', 'huge', 'massive'),
  },
}

Progress.propTypes = {
  /** A progress bar can show activity. */
  active: PropTypes.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: PropTypes.oneOf(Progress._meta.props.attached),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: PropTypes.bool,

  /** A progress bar can have different colors. */
  color: PropTypes.oneOf(Progress._meta.props.color),

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
    customPropTypes.any([
      customPropTypes.require(['percent']),
      customPropTypes.require(['total', 'value']),
    ]),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(Progress._meta.props.label),
    ]),
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
  size: PropTypes.oneOf(Progress._meta.props.size),

  /** A progress bar can show a success state. */
  success: PropTypes.bool,

  /**
   * For use with value.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
  total: customPropTypes.all([
    customPropTypes.require(['value']),
    customPropTypes.mutuallyExclusive(['percent']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /**
   * For use with total.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
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

export default Progress
