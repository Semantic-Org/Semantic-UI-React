import _ from 'lodash'
import React, { createElement } from 'react'

import { consoleUtil } from 'test/utils'

export const classNamePropValueBeforePropName = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  propValues.forEach((propVal) => {
    it(`adds "${propVal} ${className}" to className`, () => {
      // Heads up! It's a temporary solution until all other components will be wrapped with
      // the new <ElementType> component and withComputedType HOC
      // TODO: Remove this after all components will be updated
      try {
        shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))
          .should.have.className(`${propVal} ${className}`)
      } catch (e) {
        shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))
          .dive()
          .should.have.className(`${propVal} ${className}`)
      }
    })
  })
}

export const noClassNameFromBoolProps = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  _.each([true, false], bool => it(`does not add any className when ${bool}`, () => {
    consoleUtil.disableOnce()

    // Heads up! It's a temporary solution until all other components will be wrapped with
    // the new <ElementType> component and withComputedType HOC
    // TODO: Remove this after all components will be updated
    try {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: bool }))

      wrapper.should.not.have.className(className)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      propValues.forEach(propVal => wrapper.should.not.have.className(propVal.toString()))
    } catch (e) {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: bool })).dive()

      wrapper.should.not.have.className(className)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      propValues.forEach(propVal => wrapper.should.not.have.className(propVal.toString()))
    }
  }))
}

export const noDefaultClassNameFromProp = (Component, propKey, propValues, options = {}) => {
  const { defaultProps = {} } = Component
  const { className = propKey, requiredProps = {} } = options
  // required props may include a prop that creates a className
  // if so, we cannot assert that it doesn't exist by default because it is required to exist
  // skip assertions for required props
  if (propKey in defaultProps) return
  if (propKey in requiredProps) return

  it('is not included in className when not defined', () => {
    // Heads up! It's a temporary solution until all other components will be wrapped with
    // the new <ElementType> component and withComputedType HOC
    // TODO: Remove this after all components will be updated
    try {
      const wrapper = shallow(<Component {...requiredProps} />)
      wrapper.should.not.have.className(className)

      // ensure that none of the prop option values are in className
      // SUI classes ought to be built up using a declarative component API
      propValues.forEach(propValue => wrapper.should.not.have.className(propValue.toString()))
    } catch (e) {
      const wrapper = shallow(<Component {...requiredProps} />).dive()
      wrapper.should.not.have.className(className)

      // ensure that none of the prop option values are in className
      // SUI classes ought to be built up using a declarative component API
      propValues.forEach(propValue => wrapper.should.not.have.className(propValue.toString()))
    }
  })
}
