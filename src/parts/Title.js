import cx from 'classnames'
import React, { PropTypes } from 'react'
import { customPropTypes, getUnhandledProps } from '../utils/propUtils'

function Title(props) {
  const { className, children, title } = props
  const classes = cx(className, 'title')
  const rest = getUnhandledProps(Title, props)

  return <div className={classes} {...rest}>{ children || title }</div>
}

Title.propTypes = {
  /** Classes that will be added to the Title className. */
  className: PropTypes.string,

  /** Primary content of the Title. Mutually exclusive with title prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['title']),
    PropTypes.node,
  ]),

  /** Primary content of the Title. Mutually exclusive with children. */
  title: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Title
