import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useVerticalAlignProp,
  useIsomorphicLayoutEffect,
  useMergedRefs,
} from '../../lib'

/**
 * An inner element for a Dimmer.
 */
const DimmerInner = React.forwardRef(function (props, ref) {
  const {
    active,
    children,
    className,
    content,
    disabled,
    inverted,
    page,
    simple,
    verticalAlign,
  } = props

  const containerRef = useMergedRefs(ref, React.useRef())
  const contentRef = React.useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current?.style) {
      return
    }

    if (active) {
      containerRef.current.style.setProperty('display', 'flex', 'important')
    } else {
      containerRef.current.style.removeProperty('display')
    }
  }, [active])

  const handleClick = (e) => {
    _.invoke(props, 'onClick', e, props)

    if (contentRef.current !== e.target && doesNodeContainClick(contentRef.current, e)) {
      return
    }

    _.invoke(props, 'onClickOutside', e, props)
  }

  const classes = cx(
    'ui',
    useKeyOnly(active, 'active transition visible'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(page, 'page'),
    useKeyOnly(simple, 'simple'),
    useVerticalAlignProp(verticalAlign),
    'dimmer',
    className,
  )
  const rest = getUnhandledProps(DimmerInner, props)
  const ElementType = getElementType(DimmerInner, props)

  const childrenContent = childrenUtils.isNil(children) ? content : children

  return (
    <ElementType {...rest} className={classes} onClick={handleClick} ref={containerRef}>
      {childrenContent && (
        <div className='content' ref={contentRef}>
          {childrenContent}
        </div>
      )}
    </ElementType>
  )
})

DimmerInner.displayName = 'DimmerInner'
DimmerInner.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An active dimmer will dim its parent container. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: PropTypes.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: PropTypes.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: PropTypes.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: PropTypes.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: PropTypes.bool,

  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: PropTypes.oneOf(['bottom', 'top']),
}

export default DimmerInner
