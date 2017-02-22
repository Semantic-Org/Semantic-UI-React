import _ from 'lodash'
import { numberToWord } from './numberToWord'

/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */
export const useKeyOnly = (val, key) => val && key

/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */
export const useValueAndKey = (val, key) => val && val !== true && `${val} ${key}`

/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */
export const useKeyOrValueAndKey = (val, key) => val && (val === true ? key : `${val} ${key}`)

//
// Prop to className exceptions
//

/**
 * The "larger" prop.
 *
 * @param {*} value The value of the "larger" prop
 * @param {array} values The possible values of the "larger" prop
 * @param {string} key A props key
 *
 * @example
 * <Grid.Row onlyLarger='computer' />
 * <div class="computer large screen widescreen only row"></div>
 */
export const useLargerProp = (value, values, key) => {
  const index = values.indexOf(value)

  if(index === -1) return
  return `${values.slice(index).map(_.lowerCase).join(' ')} ${key}`
}

/**
 * The "smaller" prop.
 *
 * @param {*} value The value of the "smaller" prop
 * @param {array} values The possible values of the "smaller" prop
 * @param {string} key A props key
 *
 * @example
 * <Grid.Row onlySmaller='computer' />
 * <div class="mobile tablet computer only row"></div>
 */
export const useSmallerProp = (value, values, key) => {
  const index = values.indexOf(value)

  if(index === -1) return
  return `${values.slice(0, index).map(_.lowerCase).join(' ')} ${key}`
}

/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */
export const useTextAlignProp = val => val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned')

/**
 * The "verticalAlign" prop follows the useValueAndKey.
 *
 * @param {*} val The value of the "verticalAlign" prop
 *
 * @example
 * <Grid verticalAlign='middle' />
 * <div class="ui middle aligned grid"></div>
 */
export const useVerticalAlignProp = val => useValueAndKey(val, 'aligned')

/**
 * Create "X", "X wide" and "equal width" classNames.
 * "X" is a numberToWord value and "wide" is configurable.
 * @param {*} val The prop value
 * @param {string} [widthClass=''] The class
 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
 *
 * @example
 * <Grid columns='equal' />
 * <div class="ui equal width grid"></div>
 *
 * <Form widths='equal' />
 * <div class="ui equal width form"></div>
 *
 * <FieldGroup widths='equal' />
 * <div class="equal width fields"></div>
 *
 * @example
 * <Grid columns={4} />
 * <div class="ui four column grid"></div>
 */
export const useWidthProp = (val, widthClass = '', canEqual = false) => {
  if (canEqual && val === 'equal') {
    return 'equal width'
  }
  const valType = typeof val
  if ((valType === 'string' || valType === 'number') && widthClass) {
    return `${numberToWord(val)} ${widthClass}`
  }
  return numberToWord(val)
}
