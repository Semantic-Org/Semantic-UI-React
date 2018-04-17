import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createComponent,
  customPropTypes,
  META,
  SUI,
} from '../../lib'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'
import LabelDetail from './LabelDetail'
import LabelGroup from './LabelGroup'

import * as labelRules from './labelRules'
import labelVariables from './labelVariables'

/**
 * A label displays content classification.
 */
class Label extends React.Component {
  static contextTypes = {
    renderer: PropTypes.any,
  }
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.string),
    ElementType: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    rest: PropTypes.object,

    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A label can be active. */
    active: PropTypes.bool,

    /** A label can attach to a content segment. */
    attached: PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

    /** A label can reduce its complexity. */
    basic: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** A label can be circular. */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Color of the label. */
    color: PropTypes.oneOf(SUI.COLORS),

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A label can position itself in the corner of an element. */
    corner: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['left', 'right']),
    ]),

    /** Shorthand for LabelDetail. */
    detail: customPropTypes.itemShorthand,

    /** Formats the label as a dot. */
    empty: customPropTypes.every([
      PropTypes.bool,
      customPropTypes.demand(['circular']),
    ]),

    /** Float above another element in the upper right corner. */
    floating: PropTypes.bool,

    /** A horizontal label is formatted to label content along-side it horizontally. */
    horizontal: PropTypes.bool,

    /** Shorthand for Icon. */
    icon: customPropTypes.itemShorthand,

    /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
    image: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Adds an "x" icon, called when "x" is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onRemove: PropTypes.func,

    /** A label can point to content next to it. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['above', 'below', 'left', 'right']),
    ]),

    /** Shorthand for Icon to appear as the last child and trigger onRemove. */
    removeIcon: customPropTypes.itemShorthand,

    /** A function to render the content part. */
    renderContent: PropTypes.func,

    /** A function to render the detail part. */
    renderDetail: PropTypes.func,

    /** A function to render the icon part. */
    renderIcon: PropTypes.func,

    /** A function to render the image part. */
    renderImage: PropTypes.func,

    /** A label can appear as a ribbon attaching itself to an element. */
    ribbon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['right']),
    ]),

    /** A label can have different sizes. */
    size: PropTypes.oneOf(SUI.SIZES),

    /** A label can appear as a tag. */
    tag: PropTypes.bool,
  }

  static defaultProps = {
    renderContent: ({ content }) => content,
    renderDetail: ({ detail }) => LabelDetail.create(detail),
    renderIcon: ({ icon }) => Icon.create(icon),
    renderImage: ({ image }) => Image.create(image),
  }

  static _meta = {
    name: 'Label',
    type: META.TYPES.ELEMENT,
  }

  static Detail = LabelDetail
  static Group = LabelGroup

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  handleIconOverrides = predefinedProps => ({
    onClick: (e) => {
      _.invoke(predefinedProps, 'onClick', e)
      _.invoke(this.props, 'onRemove', e, this.props)
    },
  })

  render() {
    const {
      // active,
      // attached,
      // basic,
      children,
      // circular,
      className,
      // color,
      content,
      // corner,
      detail,
      // empty,
      // floating,
      // horizontal,
      icon,
      image,
      onRemove,
      // pointing,
      removeIcon,
      renderContent,
      renderDetail,
      renderIcon,
      renderImage,
      // ribbon,
      // size,
      // tag,
      styles,
      ElementType,
      rest,
    } = this.props

    // const pointingClass = (pointing === true && 'pointing')
    //   || ((pointing === 'left' || pointing === 'right') && `${pointing} pointing`)
    //   || ((pointing === 'above' || pointing === 'below') && `pointing ${pointing}`)
    //
    // const classes = cx(
    //   'ui',
    //   color,
    //   pointingClass,
    //   size,
    //   useKeyOnly(active, 'active'),
    //   useKeyOnly(basic, 'basic'),
    //   useKeyOnly(circular, 'circular'),
    //   useKeyOnly(empty, 'empty'),
    //   useKeyOnly(floating, 'floating'),
    //   useKeyOnly(horizontal, 'horizontal'),
    //   useKeyOnly(image === true, 'image'),
    //   useKeyOnly(tag, 'tag'),
    //   useKeyOrValueAndKey(corner, 'corner'),
    //   useKeyOrValueAndKey(ribbon, 'ribbon'),
    //   useValueAndKey(attached, 'attached'),
    //   'label',
    //   className,
    // )

    const classes = cx(
      styles.label,
      {
        [styles.link]: ElementType === 'a',
        [styles.image]: image === true,
      },
      className,
    )

    if (!childrenUtils.isNil(children)) {
      return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
    }

    const removeIconShorthand = _.isUndefined(removeIcon) ? 'delete' : removeIcon

    return (
      <ElementType className={classes} onClick={this.handleClick} {...rest}>
        {renderIcon(this.props)}
        {renderImage(this.props)}
        {renderContent(this.props)}
        {renderDetail(this.props)}
        {(onRemove && Icon.create(removeIconShorthand, { overrideProps: this.handleIconOverrides }))}
      </ElementType>
    )
  }
}

export default createComponent({
  Component: Label,
  shorthand: value => ({ content: value }),
  rules: labelRules,
  variables: labelVariables,
  // getDefaultElement: (props) => 'div',
})
