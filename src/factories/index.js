import createFactory from './createFactory'

import Icon from '../elements/Icon/Icon'
import Image from '../elements/Image/Image'
import Label from '../elements/Label/Label'

/**
 * Returns an Icon element from an icon name, ReactElement, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createIcon = createFactory(Icon, value => ({ name: value }))

/**
 * Returns an Image element from an img src, ReactElement, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createImage = createFactory(Image, value => ({ src: value }))

/**
 * Returns an img element from an img src, ReactElement, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createImg = createFactory('img', value => ({ src: value }))

/**
 * Returns a Label element from label text, ReactElement, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createLabel = createFactory(Label, value => ({ content: value }))
