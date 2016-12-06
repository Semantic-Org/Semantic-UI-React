import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import {
  getElementType,
  getUnhandledProps,
  isBrowser,
  makeDebugger,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Portal from '../../addons/Portal'
import PopupContent from './PopupContent'
import PopupHeader from './PopupHeader'

const debug = makeDebugger('popup')

const _meta = {
  name: 'Popup',
  type: META.TYPES.MODULE,
  props: {
    on: ['hover', 'click', 'focus'],
    positioning: [
      'top left',
      'top right',
      'bottom right',
      'bottom left',
      'right center',
      'left center',
      'top center',
      'bottom center',
    ],
    size: _.without(SUI.SIZES, 'medium', 'big', 'massive'),
    wide: [true, false, 'very'],
  },
}

/**
 * A Popup displays additional information on top of a page.
 */
export default class Popup extends Component {
  static propTypes = {
    /** Display the popup without the pointing arrow */
    basic: PropTypes.bool,

    /** You may pass a content as children of the Popup */
    children: PropTypes.node,

    /** Classes to add to the Popup className. */
    className: PropTypes.string,

    /** Simple text content for the popover */
    content: PropTypes.node,

    /** A Flowing popup have no maximum width and continue to flow to fit its content */
    flowing: PropTypes.bool,

    /** Takes up the entire width of its offset container */
    // TODO: implement the Popup fluid layout
    // fluid: PropTypes.bool,

    /** Header displayed above the content in bold */
    header: PropTypes.string,

    /** Whether the popup should not close on hover */
    hoverable: PropTypes.bool,

    /** Invert the colors of the popup */
    inverted: PropTypes.bool,

    /** The node where the popup should mount.. */
    hideOnScroll: PropTypes.bool,

    /** Horizontal offset in pixels to be applied to the popup */
    offset: PropTypes.number,

    /** Event triggering the popup */
    on: PropTypes.oneOf(_meta.props.on),

    /**
     * Called when a close event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: PropTypes.func,

    /**
     * Called when the portal is mounted on the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onMount: PropTypes.func,

    /**
     * Called when an open event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: PropTypes.func,

    /**
     * Called when the portal is unmounted from the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUnmount: PropTypes.func,

    /** Positioning for the popover */
    positioning: PropTypes.oneOf(_meta.props.positioning),

    /** Popup size */
    size: PropTypes.oneOf(_meta.props.size),

    /** custom popup style */
    style: PropTypes.object,

    /** Element to be rendered in-place where the popup is defined. */
    trigger: PropTypes.node,

    /** Popup width */
    wide: PropTypes.oneOf(_meta.props.wide),
  }

  static defaultProps = {
    positioning: 'top left',
    on: 'hover',
  }

  static _meta = _meta
  static Content = PopupContent
  static Header = PopupHeader

  state = {}

  computePopupStyle(positions) {
    const style = { position: 'absolute' }

    // Do not access window/document when server side rendering
    if (!isBrowser) return style

    const { offset } = this.props
    const { pageYOffset, pageXOffset } = window
    const { clientWidth, clientHeight } = document.documentElement

    if (_.includes(positions, 'right')) {
      style.right = Math.round(clientWidth - (this.coords.right + pageXOffset))
      style.left = 'auto'
    } else if (_.includes(positions, 'left')) {
      style.left = Math.round(this.coords.left + pageXOffset)
      style.right = 'auto'
    } else {  // if not left nor right, we are horizontally centering the element
      const xOffset = (this.coords.width - this.popupCoords.width) / 2
      style.left = Math.round(this.coords.left + xOffset + pageXOffset)
      style.right = 'auto'
    }

    if (_.includes(positions, 'top')) {
      style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset))
      style.top = 'auto'
    } else if (_.includes(positions, 'bottom')) {
      style.top = Math.round(this.coords.bottom + pageYOffset)
      style.bottom = 'auto'
    } else {  // if not top nor bottom, we are vertically centering the element
      const yOffset = (this.coords.height + this.popupCoords.height) / 2
      style.top = Math.round(this.coords.bottom + pageYOffset - yOffset)
      style.bottom = 'auto'

      const xOffset = this.popupCoords.width + 8
      if (_.includes(positions, 'right')) {
        style.right -= xOffset
      } else {
        style.left -= xOffset
      }
    }

    if (offset) {
      if (_.isNumber(style.right)) {
        style.right -= offset
      } else {
        style.left -= offset
      }
    }

    return style
  }

  // check if the style would display
  // the popup outside of the view port
  isStyleInViewport(style) {
    const { pageYOffset, pageXOffset } = window
    const { clientWidth, clientHeight } = document.documentElement

    const element = {
      top: style.top,
      left: style.left,
      width: this.popupCoords.width,
      height: this.popupCoords.height,
    }
    if (_.isNumber(style.right)) {
      element.left = clientWidth - style.right - element.width
    }
    if (_.isNumber(style.bottom)) {
      element.top = clientHeight - style.bottom - element.height
    }

    // hidden on top
    if (element.top < pageYOffset) return false
    // hidden on the bottom
    if (element.top + element.height > pageYOffset + clientHeight) return false
    // hidden the left
    if (element.left < pageXOffset) return false
    // hidden on the right
    if (element.left + element.width > pageXOffset + clientWidth) return false

    return true
  }

  setPopupStyle() {
    if (!this.coords || !this.popupCoords) return
    let positioning = this.props.positioning
    let style = this.computePopupStyle(positioning)

    // Lets detect if the popup is out of the viewport and adjust
    // the position accordingly
    const positions = _.without(_meta.props.positioning, positioning)
    for (let i = 0; !this.isStyleInViewport(style) && i < positions.length; i++) {
      style = this.computePopupStyle(positions[i])
      positioning = positions[i]
    }

    // Append 'px' to every numerical values in the style
    style = _.mapValues(style, value => _.isNumber(value) ? value + 'px' : value)
    this.setState({ style, positioning })
  }

  getPortalProps() {
    const portalProps = {}

    const { on, hoverable } = this.props

    if (hoverable) {
      portalProps.closeOnPortalMouseLeave = true
      portalProps.mouseLeaveDelay = 300
    }

    if (on === 'click') {
      portalProps.openOnTriggerClick = true
      portalProps.closeOnTriggerClick = true
      portalProps.closeOnDocumentClick = true
    } else if (on === 'focus') {
      portalProps.openOnTriggerFocus = true
      portalProps.closeOnTriggerBlur = true
    } else if (on === 'hover') {
      portalProps.openOnTriggerMouseOver = true
      portalProps.closeOnTriggerMouseLeave = true
      // Taken from SUI: https://git.io/vPmCm
      portalProps.mouseLeaveDelay = 70
      portalProps.mouseOverDelay = 50
    }

    return portalProps
  }

  hideOnScroll = (e) => {
    this.setState({ closed: true })
    window.removeEventListener('scroll', this.hideOnScroll)
    setTimeout(() => this.setState({ closed: false }), 50)
  }

  handleClose = (e) => {
    debug('handleClose()')
    const { onClose } = this.props
    if (onClose) onClose(e, this.props)
  }

  handleOpen = (e) => {
    debug('handleOpen()')
    this.coords = e.currentTarget.getBoundingClientRect()

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)
  }

  handlePortalMount = (e) => {
    debug('handlePortalMount()')
    if (this.props.hideOnScroll) {
      window.addEventListener('scroll', this.hideOnScroll)
    }

    const { onMount } = this.props
    if (onMount) onMount(e, this.props)
  }

  handlePortalUnmount = (e) => {
    debug('handlePortalUnmount()')
    const { onUnmount } = this.props
    if (onUnmount) onUnmount(e, this.props)
  }

  popupMounted = (ref) => {
    debug('popupMounted()')
    this.popupCoords = ref ? ref.getBoundingClientRect() : null
    this.setPopupStyle()
  }

  render() {
    const {
      basic,
      children,
      className,
      content,
      flowing,
      header,
      inverted,
      size,
      trigger,
      wide,
    } = this.props

    const { positioning, closed } = this.state
    const style = _.assign({}, this.state.style, this.props.style)
    const classes = cx(
      'ui',
      positioning,
      size,
      useKeyOrValueAndKey(wide, 'wide'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(flowing, 'flowing'),
      useKeyOnly(inverted, 'inverted'),
      'popup transition visible',
      className,
    )

    if (closed) return trigger

    const unhandled = getUnhandledProps(Popup, this.props)
    const portalPropNames = _.keys(Portal.propTypes)

    const rest = _.omit(unhandled, portalPropNames)
    const portalProps = _.pick(unhandled, portalPropNames)
    const ElementType = getElementType(Popup, this.props)

    const popupJSX = (
      <ElementType {...rest} className={classes} style={style} ref={this.popupMounted}>
        {children}
        {!children && PopupHeader.create(header)}
        {!children && PopupContent.create(content)}
      </ElementType>
    )

    const mergedPortalProps = { ...this.getPortalProps(), ...portalProps }
    debug('portal props:', mergedPortalProps)

    return (
      <Portal
        {...mergedPortalProps}
        trigger={trigger}
        onClose={this.handleClose}
        onMount={this.handlePortalMount}
        onOpen={this.handleOpen}
        onUnmount={this.handlePortalUnmount}
      >
        {popupJSX}
      </Portal>
    )
  }
}
