import cx from 'classnames'
import React, { PropTypes } from 'react'
import { customPropTypes, getUnhandledProps } from '../utils/propUtils'

function Content(props, context) {
  const { className, children, description, title } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(Content, props)

  if (children) {
    return <div {...rest} className={classes}>{ children }</div>
  }

  const content = []

  if (title) {
    content.push(<context.owner.Title title={title} />)
  }

  if (description) {
    content.push(<context.owner.Description description={description} />)
  }

  return <div {...rest} className={classes}>{ content }</div>
}

Content.contextTypes = {
  owner: React.PropTypes.any.isRequired,
}

Content.propTypes = {
  /** Classes that will be added to the Content className. */
  className: PropTypes.string,

  /** Primary content prop. Mutually exclusive with description and title props. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description']),
    PropTypes.node,
  ]),

  /** Primary content of the Description sub-component. Mutually exclusive with children. */
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** Primary content of the Title sub-component. Mutually exclusive with children. */
  title: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Content
