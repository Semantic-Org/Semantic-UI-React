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

  let dividerJSX = <Breadcrumb.Divider />

  if (divider) {
    dividerJSX = <Breadcrumb.Divider>{divider}</Breadcrumb.Divider>
  }

  if (icon) {
    dividerJSX = <Breadcrumb.Divider icon={icon} />
  }

  return (
    <div className={classes} {...rest}>
      {sections.map((section, index) => {
        const isLast = index === (sections.length - 1)

        return [
          <Breadcrumb.Section {...section}>{section.text}</Breadcrumb.Section>,
          isLast ? null : dividerJSX,
        ]
      })}
    </div>
  )
}

Breadcrumb._meta = {
  library: META.library.semanticUI,
  name: 'Breadcrumb',
  type: META.type.collection,
  props: {
    size: sui.sizes,
  },
}

Breadcrumb.propTypes = {
  /** Primary content of the Breadcrumb */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['sections', 'icon', 'divider']),
    PropTypes.node,
  ]),

  /** Primary content of the Breadcrumb.Divider. */
  divider: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon']),
    PropTypes.string,
  ]),

  /** Render as an `Icon` component with `divider` class instead of a `div` in Breadcrumb.Divider. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['divider']),
    PropTypes.string,
  ]),

  /** Array of props for Breadcrumb.Section. */
  sections: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    customPropTypes.all([
      React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        link: customPropTypes.all([
          customPropTypes.mutuallyExclusive(['href']),
          PropTypes.bool,
        ]),
        href: customPropTypes.all([
          customPropTypes.mutuallyExclusive(['link']),
          PropTypes.string,
        ]),
        onClick: PropTypes.func,
      })),
    ]),
  ]),

  /** Size of Breadcrumb */
  size: PropTypes.oneOf(Breadcrumb._meta.props.size),
}

Breadcrumb.Divider = BreadcrumbDivider
Breadcrumb.Section = BreadcrumbSection

export default Breadcrumb
