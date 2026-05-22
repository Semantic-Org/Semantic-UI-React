/* eslint-disable react-hooks/static-components */
import cx from 'clsx'

import { getComponentType, getUnhandledProps } from './lib'

/**
 * A dropdown menu can contain dividers to separate related content.
 */
function DropdownDivider(props) {
  const { ref } = props
  const { className } = props

  const classes = cx('divider', className)

  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = getComponentType(props)

  return <ElementType {...rest} className={classes} ref={ref} />
}

DropdownDivider.displayName = 'DropdownDivider'
export default DropdownDivider
