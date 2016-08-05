import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, iconPropRenderer, imagePropRenderer } from '../../utils/propUtils'

function FeedLabel(props) {
  const { children, className, icon, image } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(FeedLabel, props)

  return (
    <div {...rest} className={classes}>
      {children && children}
      {icon && iconPropRenderer(icon)}
      {image && imagePropRenderer(image)}
    </div>
  )
}

FeedLabel._meta = {
  library: META.library.semanticUI,
  name: 'FeedLabel',
  parent: 'Feed',
  type: META.type.view,
}

FeedLabel.propTypes = {
  /** Primary content of the FeedLabel. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon', 'image']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLabel className. */
  className: PropTypes.string,

  /** An event can contain icon label. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children', 'image']),
    PropTypes.node,
  ]),

  /** An event can contain image label. */
  image: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children', 'icon']),
    PropTypes.node,
  ]),
}

export default FeedLabel
