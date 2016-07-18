import _ from 'lodash'
import { numberToWordMap } from './numberToWord'

export const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
export const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
export const textAlignments = ['left', 'center', 'right', 'justified']
export const floats = ['left', 'right']
export const widths = [
  ..._.keys(numberToWordMap),
  ..._.keys(numberToWordMap).map(Number),
  ..._.values(numberToWordMap),
]
