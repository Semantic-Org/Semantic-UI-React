import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import { createIcon } from '../../factories'
import StepContent from './StepContent'
import StepDescription from './StepDescription'
import StepGroup from './StepGroup'
import StepTitle from './StepTitle'

/**
 * A step shows the completion status of an activity in a series of activities.
 */
function Step(props) {
  const {
    active, className, children, completed, description, disabled, icon, href, link, onClick, title,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(completed, 'completed'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(link, 'link'),
    className,
    'step',
  )
  const rest = getUnhandledProps(Step, props)

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }
  const StepComponent = href || onClick ? 'a' : 'div'

  return (
    <StepComponent
      {...rest}
      className={classes}
      href={href}
      onClick={handleClick}
    >
      {!children && createIcon(icon)}
      {children || <StepContent description={description} title={title} />}
    </StepComponent>
  )
}

Step._meta = {
  name: 'Step',
  type: META.TYPES.ELEMENT,
}

Step.propTypes = {
  /** A step can be highlighted as active. */
  active: PropTypes.bool,

  /** Classes that will be added to the Step className. */
  className: PropTypes.string,

  /** Primary content of the Step. Mutually exclusive with description and title props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'title']),
    PropTypes.node,
  ]),

  /** A step can show that a user has completed it. */
  completed: PropTypes.bool,

  /** Shorthand prop for StepDescription. Mutually exclusive with children. */
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** A step can contain an icon. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** A step can be link. */
  link: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on Step click. */
  onClick: PropTypes.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: PropTypes.bool,

  /** Shorthand prop for StepTitle. Mutually exclusive with children. */
  title: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

Step.Content = StepContent
Step.Description = StepDescription
Step.Group = StepGroup
Step.Title = StepTitle

export default Step
