import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from 'src/utils/Meta'
import { customPropTypes } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import BreadcrumbDivider from './BreadcrumbDivider'
import BreadcrumbSection from './BreadcrumbSection'

/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  const {
    children, divider, icon, size, sections, ...rest,
  } = props

  const classes = cx(
    'ui',
    size,
    'breadcrumb'
  )

  if (!sections) {
    return <div className={classes} {...rest}>{children}</div>
  }

  const dividerJSX = <Breadcrumb.Divider icon={icon}>{divider}</Breadcrumb.Divider>
  const sectionsJSX = []

  sections.forEach(({ text, ...restSection }, index) => {
    const key = `${text}-${index}`
    const dividerKey = `$divider-${index}`

    sectionsJSX.push(
      <Breadcrumb.Section {...restSection} key={key}>{text}</Breadcrumb.Section>
    )

    if (index !== sections.length - 1) {
      sectionsJSX.push(React.cloneElement(dividerJSX, { key: dividerKey }))
    }
  })

  return <div className={classes} {...rest}>{sectionsJSX}</div>
}

Breadcrumb._meta = {
  library: META.library.semanticUI,
  name: 'Breadcrumb',
  type: META.type.collection,
  props: {
    size: _.without(sui.sizes, 'medium'),
  },
}

Breadcrumb.propTypes = {
  /** Primary content of the Breadcrumb */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['sections', 'icon', 'divider']),
    PropTypes.node,
  ]),

  /** For use with the sections prop. Primary content of the Breadcrumb.Divider. */
  divider: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon']),
    PropTypes.string,
  ]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['divider']),
    PropTypes.string,
  ]),

  /** Array of props for Breadcrumb.Section. */
  sections: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    React.PropTypes.array,
  ]),

  /** Size of Breadcrumb */
  size: PropTypes.oneOf(Breadcrumb._meta.props.size),
}

Breadcrumb.Divider = BreadcrumbDivider
Breadcrumb.Section = BreadcrumbSection

export default Breadcrumb
