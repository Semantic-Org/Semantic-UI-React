import * as React from 'react'
import { CheckboxProps } from '../../modules/Checkbox'

export interface RadioProps extends CheckboxProps {
  [key: string]: any

  /** Format to emphasize the current selection state. */
  slider?: boolean

  /** Format to show an on or off choice. */
  toggle?: boolean

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox' | 'radio'
}

declare const Radio: React.StatelessComponent<RadioProps>

export default Radio
