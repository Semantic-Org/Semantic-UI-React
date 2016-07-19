import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'
import StepGroup from './StepGroup'
import StepTitle from './StepTitle'

/** A step shows the completion status of an activity in a series of activities. */
function Step(props) {
  const { children, className, active, completed, disabled, link, href, onClick } = props
  const classes = cx(
    'ui',
    useKeyOnly(active, 'active'),
    useKeyOnly(completed, 'completed'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(link, 'link'),
    className,
    'step',
  )
  const handleClick = (e) => {
    if (onClick) onClick(e)
  }
  const rest = getUnhandledProps(Step, props)

  if (href) {
    return <a {...rest} className={classes} href={href} onClick={handleClick}>{children}</a>
  }

  if (onClick) {
    return <a {...rest} className={classes} onClick={handleClick}>{children}</a>
  }

  return <div {...rest} className={classes} onClick={handleClick}>{children}</div>
}

Step._meta = {
  library: META.library.semanticUI,
  name: 'Step',
  type: META.type.element,
}

Step.Group = StepGroup
Step.Title = StepTitle

Step.propTypes = {
  /** A step can be highlighted as active. */
  active: PropTypes.bool,

  /** Classes that will be added to the Step className. */
  className: PropTypes.string,

  /** Primary content of the Step. Mutually exclusive with the text prop. */
  children: PropTypes.node,

  /** A step can show that a user has completed it. */
  completed: PropTypes.bool,

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** A step can be link. */
  link: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on Step click. */
  onClick: PropTypes.func,
}

export default Step
