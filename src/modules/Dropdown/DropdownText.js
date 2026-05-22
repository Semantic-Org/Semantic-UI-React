/* eslint-disable react-hooks/static-components */
import cx from 'clsx'

import {
  childrenUtils,
  createShorthandFactory,
  getComponentType,
  getUnhandledProps,
} from './lib'

/**
 * A dropdown contains a selected value.
 */
function DropdownText(props) {
  const { ref } = props

  const { children, className, content } = props
  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownText, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType
      aria-atomic="true"
      aria-live="polite"
      role="alert"
      {...rest}
      className={classes}
      ref={ref}
    >
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

DropdownText.displayName = 'DropdownText'
DropdownText.create = createShorthandFactory(DropdownText, (val) => {
  return { content: val }
})

export default DropdownText
