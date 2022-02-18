import React from 'react'
import _ from 'lodash'

import { consoleUtil } from 'test/utils'
import {
  classNamePropValueBeforePropName,
  noClassNameFromBoolProps,
  noDefaultClassNameFromProp,
} from './classNameHelpers'
import helpers from './commonHelpers'

/**
 * Assert that a Component prop's name and value are required to create a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {array} propValues Array of possible values of prop.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyAndValueToClassName = (Component, propKey, propValues, options = {}) => {
  const { assertRequired } = helpers('propKeyAndValueToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    classNamePropValueBeforePropName(Component, propKey, propValues, options)
    noDefaultClassNameFromProp(Component, propKey, propValues, options)
    noClassNameFromBoolProps(Component, propKey, propValues, options)
  })
}

/**
 * Assert that only a Component prop's name is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.className=propKey] The className to assert exists.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyOnlyToClassName = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options
  const { assertRequired } = helpers('propKeyOnlyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    noDefaultClassNameFromProp(Component, propKey, [], options)

    it('adds prop name to className', () => {
      consoleUtil.disableOnce()

      const element = React.createElement(Component, { ...requiredProps, [propKey]: true })
      const wrapper = mount(element)
      const elementClassName = wrapper.childAt(0).getDOMNode().className

      // ".should.have.className" with "mount" renderer does not handle properly cases when "className" contains
      // multiple classes.
      expect(elementClassName).include(className)
    })

    it('does not add prop value to className', () => {
      consoleUtil.disableOnce()

      const value = 'foo-bar-baz'
      const element = React.createElement(Component, { ...requiredProps, [propKey]: value })
      const wrapper = mount(element)

      wrapper.childAt(0).should.not.have.className(value)
    })
  })
}

/**
 * Assert that a Component prop name or value convert to a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {array} propValues Array of possible values of prop.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyOrValueAndKeyToClassName = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options
  const { assertRequired } = helpers('propKeyOrValueAndKeyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    noDefaultClassNameFromProp(Component, propKey, propValues, options)
    classNamePropValueBeforePropName(Component, propKey, propValues, options)

    beforeEach(() => {
      consoleUtil.disableOnce()
    })

    it('adds only the name to className when true', () => {
      const wrapper = mount(React.createElement(Component, { ...requiredProps, [propKey]: true }))

      wrapper.should.have.className(className)
    })

    it('adds no className when false', () => {
      const wrapper = mount(React.createElement(Component, { ...requiredProps, [propKey]: false }))

      wrapper.should.not.have.className(className)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      _.each(propValues, (propVal) => {
        wrapper.should.not.have.className(propVal)
      })
    })
  })
}

/**
 * Assert that only a Component prop's value is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {array} propValues Array of possible props values.
 * @param {Object} [options={}]
 * @param {Object} [options.className=propKey] The className to assert exists.
 * @param {Number} [options.nestingLevel=0] The nesting level of the component.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const propValueOnlyToClassName = (Component, propKey, propValues, options = {}) => {
  const { nestingLevel = 0, requiredProps = {} } = options
  const { assertRequired } = helpers('propValueOnlyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    noClassNameFromBoolProps(Component, propKey, propValues, options)
    noDefaultClassNameFromProp(Component, propKey, propValues, options)

    it('adds prop value to className', () => {
      propValues.forEach((propValue) => {
        shallow(React.createElement(Component, { ...requiredProps, [propKey]: propValue }), {
          autoNesting: true,
          nestingLevel,
        }).should.have.className(propValue)
      })
    })

    it('does not add prop name to className', () => {
      consoleUtil.disableOnce()

      propValues.forEach((propValue) => {
        shallow(React.createElement(Component, { ...requiredProps, [propKey]: propValue }), {
          autoNesting: true,
          nestingLevel,
        }).should.not.have.className(propKey)
      })
    })
  })
}
