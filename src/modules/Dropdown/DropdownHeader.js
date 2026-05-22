/* eslint-disable react-hooks/static-components */
import cx from 'clsx'

import {
  createShorthandFactory,
  getComponentType,
  getUnhandledProps,
} from './lib'

/**
 * A dropdown menu can contain a header.
 */
function DropdownHeader(props) {
  const { ref } = props
  const { children, className, content, icon } = props

  const classes = cx('header', className)
  const rest = getUnhandledProps(DropdownHeader, props)
  const ElementType = getComponentType(props)

  if (children != null) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {icon && <i className={`${icon} icon`} aria-hidden="true" />}

      {content}
    </ElementType>
  )
}

DropdownHeader.displayName = 'DropdownHeader'
DropdownHeader.create = createShorthandFactory(DropdownHeader, (content) => {
  return { content }
})

export default DropdownHeader
