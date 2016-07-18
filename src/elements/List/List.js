import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import {
  getUnhandledProps,
  useValueAndKey,
  useKeyOrValueAndKey,
  useKeyOnly,
} from '../../utils/propUtils'
import ListItem from './ListItem'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'
import ItemHeader from './ItemHeader'
import Content from '../Content/Content'
import Description from '../Description/Description'

function List(props) {
  const {
    size, aligned, bulleted, link, ordered, animated, celled, divided,
    horizontal, inverted, relaxed, selection, children, className,
    } = props

  const classes = cx(
    'ui',
    size,
    useValueAndKey(aligned, 'aligned'),
    useKeyOnly(bulleted, 'bulleted'),
    useKeyOnly(link, 'link'),
    useKeyOnly(ordered, 'ordered'),
    useKeyOnly(animated, 'animated'),
    useKeyOnly(celled, 'celled'),
    useKeyOnly(divided, 'divided'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useKeyOnly(selection, 'selection'),
    'list',
    className
  )

  const rest = getUnhandledProps(List, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

List.Item = ListItem
List.ItemIcon = Icon
List.ItemImage = Image
List.ItemHeader = ItemHeader
List.ItemContent = Content
List.ItemDescription = Description

List._meta = {
  library: META.library.semanticUI,
  name: 'List',
  type: META.type.element,
  props: {
    size: sui.sizes,
    aligned: sui.verticalAlignments,
    relaxed: 'very',
  },
}

List.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the list className. */
  className: PropTypes.string,

  /** List can be a variety of sizes */
  size: PropTypes.oneOf(List._meta.props.size),

  /** List can be aligned vertically top, middle, bottom */
  aligned: PropTypes.oneOf(List._meta.props.aligned),

  /** List can be bulleted */
  bulleted: PropTypes.bool,

  /** List can be formatted for navigation links */
  link: PropTypes.bool,

  /** List can be ordered numerically */
  ordered: PropTypes.bool,

  /** List can animate to set the current item apart from the list */
  animated: PropTypes.bool,

  /** List can divide its items into cells */
  celled: PropTypes.bool,

  /** List can show divisions between content */
  divided: PropTypes.bool,

  /** List can be formatted to have items appear horizontally */
  horizontal: PropTypes.bool,

  /** List can be inverted to appear on a dark background */
  inverted: PropTypes.bool,

  /** List can relax its padding to provide more negative space */
  relaxed: PropTypes.oneOf(
    List._meta.props.relaxed,
    PropTypes.bool
  ),

  /** A selection list formats list items as possible choices */
  selection: PropTypes.bool,
}

export default List
