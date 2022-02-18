import React, { createElement } from 'react'

import Button from 'src/elements/Button'
import Icon from 'src/elements/Icon'
import Image from 'src/elements/Image'
import Label from 'src/elements/Label'
import { numberToWord, SUI } from 'src/lib'
import implementsShorthandProp from './implementsShorthandProp'
import { noClassNameFromBoolProps, noDefaultClassNameFromProp } from './classNameHelpers'
import helpers from './commonHelpers'

/**
 * Assert that a Component correctly implements a Button shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='button'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsButtonProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'button',
    ShorthandComponent: Button,
    mapValueToProps: (val) => ({ content: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an HTML iframe shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsHTMLIFrameProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'iframe',
    ShorthandComponent: 'iframe',
    mapValueToProps: (src) => ({ src }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an HTML input shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsHTMLInputProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'input',
    ShorthandComponent: 'input',
    mapValueToProps: (val) => ({ type: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an HTML label shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsHTMLLabelProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'label',
    ShorthandComponent: 'label',
    mapValueToProps: (val) => ({ children: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an Icon shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {boolean} [options.alwaysPresent] Whether or not the shorthand exists by default.
 * @param {boolean} [options.autoGenerateKey=false] Whether or not automatic key generation is
 *   allowed for the shorthand component.
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsIconProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    assertExactMatch: false,
    propKey: 'icon',
    ShorthandComponent: Icon,
    mapValueToProps: (val) => ({ name: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an Image shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {boolean} [options.autoGenerateKey=false] Whether or not automatic key generation is
 *   allowed for the shorthand component.
 * @param {string} [options.propKey='image'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsImageProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'image',
    ShorthandComponent: Image,
    mapValueToProps: (val) => ({ src: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements a Label shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {boolean} [options.autoGenerateKey=false] Whether or not automatic key generation is
 *   allowed for the shorthand component.
 * @param {string} [options.propKey='label'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export const implementsLabelProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'label',
    ShorthandComponent: Label,
    mapValueToProps: (val) => ({ content: val }),
    ...options,
  })
}

/**
 * Assert that a Component correctly implements the "only" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 */
export const implementsMultipleProp = (Component, propKey, propValues) => {
  const { assertRequired } = helpers('propKeyAndValueToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')

    noDefaultClassNameFromProp(Component, propKey, propValues)
    noClassNameFromBoolProps(Component, propKey, propValues)

    propValues.forEach((propVal) => {
      it(`adds "${propVal} ${propKey}" to className`, () => {
        shallow(createElement(Component, { [propKey]: propVal })).should.have.className(
          `${propVal} ${propKey}`,
        )
      })
    })

    it('adds all possible values to className', () => {
      const className = propValues.map((prop) => `${prop} ${propKey}`).join(' ')
      const propValue = propValues.join(' ')

      shallow(createElement(Component, { [propKey]: propValue })).should.have.className(className)
    })
  })
}

/**
 * Assert that a Component correctly implements the "textAlign" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {array} [alignments] Array of possible alignment positions.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsTextAlignProp = (
  Component,
  alignments = SUI.TEXT_ALIGNMENTS,
  options = {},
) => {
  const { requiredProps = {} } = options
  const { assertRequired } = helpers('implementsTextAlignProp', Component)

  describe('aligned (common)', () => {
    assertRequired(Component, 'a `Component`')

    noClassNameFromBoolProps(Component, 'textAlign', alignments, options)
    noDefaultClassNameFromProp(Component, 'textAlign', alignments, options)

    alignments.forEach((propVal) => {
      if (propVal === 'justified') {
        it('adds "justified" without "aligned" to className', () => {
          shallow(<Component {...requiredProps} textAlign='justified' />).should.have.className(
            'justified',
          )

          shallow(<Component {...requiredProps} textAlign='justified' />).should.not.have.className(
            'aligned',
          )
        })
      } else {
        it(`adds "${propVal} aligned" to className`, () => {
          shallow(<Component {...requiredProps} textAlign={propVal} />).should.have.className(
            `${propVal} ${'aligned'}`,
          )
        })
      }
    })
  })
}

/**
 * Assert that a Component correctly implements the "verticalAlign" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {array} [alignments] Array of possible alignment positions.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsVerticalAlignProp = (
  Component,
  alignments = SUI.VERTICAL_ALIGNMENTS,
  options = {},
) => {
  const { requiredProps = {} } = options
  const { assertRequired } = helpers('implementsVerticalAlignProp', Component)

  describe('verticalAlign (common)', () => {
    assertRequired(Component, 'a `Component`')

    noClassNameFromBoolProps(Component, 'verticalAlign', alignments, options)
    noDefaultClassNameFromProp(Component, 'verticalAlign', alignments, options)

    alignments.forEach((propVal) => {
      it(`adds "${propVal} aligned" to className`, () => {
        const wrapper = shallow(<Component {...requiredProps} verticalAlign={propVal} />, {
          autoNesting: true,
        })

        wrapper.should.have.className(`${propVal} ${'aligned'}`)
      })
    })
  })
}

/**
 * Assert that a Component correctly implements a width prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {array} [widths] Array of possible widths.
 * @param {object} [options={}]
 * @param {string} [options.propKey] The prop name that accepts a width value.
 * @param {string} [options.widthClass] The className that follows the wordToNumber className.
 *   Examples: one WIDE column, two COLUMN grid, three [none] fields, etc.
 * @param {boolean} [options.canEqual=true] Whether or not to test 'equal width' usage.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsWidthProp = (Component, widths = SUI.WIDTHS, options = {}) => {
  const { canEqual = true, propKey, requiredProps, widthClass } = options
  const { assertRequired } = helpers('implementsWidthProp', Component)
  const propValues = canEqual ? [...widths, 'equal'] : widths

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')

    noClassNameFromBoolProps(Component, propKey, propValues, options)
    noDefaultClassNameFromProp(Component, propKey, propValues, options)

    it('adds numberToWord value to className', () => {
      widths.forEach((width) => {
        const expectClass = widthClass
          ? `${numberToWord(width)} ${widthClass}`
          : numberToWord(width)

        shallow(
          createElement(Component, { ...requiredProps, [propKey]: width }),
        ).should.have.className(expectClass)
      })
    })

    if (canEqual) {
      it('adds "equal width" to className', () => {
        shallow(
          createElement(Component, { ...requiredProps, [propKey]: 'equal' }),
        ).should.have.className('equal width')
      })
    }
  })
}

/**
 * Assert that a Components with a label correctly implements the "id" and "htmlFor" props.
 *
 * @param {React.Component|Function} Component The component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const labelImplementsHtmlForProp = (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = helpers('labelImplementsHtmlForProp', Component)

  describe('htmlFor (common)', () => {
    assertRequired(Component, 'a `Component`')

    it('adds htmlFor to label', () => {
      const id = 'id-for-test'
      const label = 'label-for-test'

      const wrapper = mount(<Component {...requiredProps} id={id} label={label} />)
      const labelNode = wrapper.find('label')

      wrapper.should.to.have.descendants(`#${id}`)
      labelNode.should.have.prop('htmlFor', id)
    })
  })
}
