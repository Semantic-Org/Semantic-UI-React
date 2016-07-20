import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, iconPropRenderer, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import StepDescription from './StepDescription'
import StepGroup from './StepGroup'
import StepTitle from './StepTitle'

/** A step shows the completion status of an activity in a series of activities. */
function Step(props) {
  const { active, children, className, completed, description, disabled, icon, link, href, onClick, title } = props
  const classes = cx(
    'ui',
    useKeyOnly(active, 'active'),
    useKeyOnly(completed, 'completed'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(link, 'link'),
    className,
    'step',
  )
  const getChildren = () => {
    if (children) return children

    return [<Step.Title>{title}</Step.Title>, <Step.Description>{description}</Step.Description>].map((item) => item)
  }
  const getContent = () => {
    if (!icon) return <div className='content'>{getChildren()}</div>

    return [iconPropRenderer(icon), <div className='content'>{getChildren()}</div>].map((item) => item)
  }
  const handleClick = (e) => {
    if (onClick) onClick(e)
  }
  const rest = getUnhandledProps(Step, props)

  if (href) {
    return <a {...rest} className={classes} href={href} onClick={handleClick}>{getContent(props)}</a>
  }

  if (onClick) {
    return <a {...rest} className={classes} onClick={handleClick}>{getContent(props)}</a>
  }

  return (
    <div {...rest} className={classes} onClick={handleClick}>{getContent(props)}</div>
  )
}

Step._meta = {
  library: META.library.semanticUI,
  name: 'Step',
  type: META.type.element,
}

Step.Description = StepDescription
Step.Group = StepGroup
Step.Title = StepTitle

Step.propTypes = {
  /** A step can be highlighted as active. */
  active: PropTypes.bool,

  /** Classes that will be added to the Step className. */
  className: PropTypes.string,

  /** Primary content of the Step. Mutually exclusive with description and title props. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    PropTypes.node,
  ]),

  /** A step can show that a user has completed it. */
  completed: PropTypes.bool,

  /** Shorthand prop for StepDescription. Mutually exclusive with children. */
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** A step can contain an icon. */
  icon: PropTypes.string,

  /** A step can be link. */
  link: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on Step click. */
  onClick: PropTypes.func,

  /** Shorthand prop for StepTitle. Mutually exclusive with children. */
  title: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Step
