import * as React from 'react'

import { ForwardRefComponent, SemanticShorthandContent, SemanticShorthandItem } from '../../generic'
import { IconProps } from '../../elements/Icon'

export interface DropdownHeaderProps extends StrictDropdownHeaderProps {
  [key: string]: any
}

export interface StrictDropdownHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Shorthand for Icon. */
  icon?: SemanticShorthandItem<IconProps>
}

declare const DropdownHeader: ForwardRefComponent<DropdownHeaderProps, HTMLDivElement>

export default DropdownHeader
