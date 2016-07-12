/**
 * This file exports every component part with support for className and children.
 *
 * The top level API is made of components.(i.e. Button, Card, etc.)
 * Sub components are used to distinguish parts of components from components.
 * See "ui" class here http://semantic-ui.com/introduction/glossary.html#project-terminology.
 *
 * Example, a List is a component and a List.Item is a component part.
 * The List.Item is not in anyway related to the Item component.
 * They do not share capabilities. They only share the same name.
 */
import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from './utils/Meta'
import { getUnhandledProps } from './utils/propUtils'

function makePart(partName) {
  function ComponentPart(props) {
    const { children, className } = props
    const classes = cx(
      _.lowerCase(_.words(partName)),
      className
    )
    const rest = getUnhandledProps(ComponentPart, props)

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }

  ComponentPart._meta = {
    library: META.library.semanticUI,
    type: META.type.part,
    name: partName
  }

  ComponentPart.displayName = partName

  ComponentPart.propTypes = {
    /** Primary content. */
    children: PropTypes.node,

    /** Classes to add to className. */
    className: PropTypes.string,
  }

  return ComponentPart
}

export const Actions = makePart('Actions')
export const Avatar = makePart('Avatar')
export const Bar = makePart('Bar')
export const Content = makePart('Content')
export const Date = makePart('Date')
export const Description = makePart('Description')
export const Divider = makePart('Divider')
export const Event = makePart('Event')
export const Extra = makePart('Extra')
export const ExtraContent = makePart('ExtraContent')
export const Header = makePart('Header')
export const ImageContent = makePart('ImageContent')
export const Item = makePart('Item')
export const Menu = makePart('Menu')
export const Meta = makePart('Meta')
export const Label = makePart('Label')
export const Summary = makePart('Summary')
export const Title = makePart('Title')
export const Value = makePart('Value')
