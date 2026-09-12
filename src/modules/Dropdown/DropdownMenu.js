/* eslint-disable react-hooks/static-components */
import cx from 'clsx'

import {
  childrenUtils,
  getComponentType,
  getUnhandledProps,
  getKeyOnly,
} from './lib'

/**
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  const { ref } = props

  const { children, className, content, direction, open, scrolling } = props

  const classes = cx(
    direction,
    getKeyOnly(open, 'visible'),
    getKeyOnly(scrolling, 'scrolling'),
    'menu transition',
    className
  )

  const rest = getUnhandledProps(DropdownMenu, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

DropdownMenu.displayName = 'DropdownMenu'
export default DropdownMenu
