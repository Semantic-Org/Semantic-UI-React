import _ from 'lodash'
import React, { createElement } from 'react'

import { consoleUtil, nestedShallow } from 'test/utils'

export const classNamePropValueBeforePropName = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  propValues.forEach((propVal) => {
    it(`adds "${propVal} ${className}" to className`, () => {
      expect(
        shallow(createElement(Component, { ...requiredProps, [propKey]: propVal })),
      ).have.className(`${propVal} ${className}`)
    })
  })
}

export const noClassNameFromBoolProps = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, nestingLevel = 0, requiredProps = {} } = options

  _.each([true, false], bool =>
    it(`does not add any className when ${bool}`, () => {
      consoleUtil.disableOnce()

      const wrapper = nestedShallow(
        createElement(Component, { ...requiredProps, [propKey]: bool }),
        { nestingLevel },
      )

      expect(wrapper).not.have.className(className)
      expect(wrapper).not.have.className('true')
      expect(wrapper).not.have.className('false')

      propValues.forEach(propVal => expect(wrapper).not.have.className(propVal.toString()))
    }),
  )
}

export const noDefaultClassNameFromProp = (Component, propKey, propValues, options = {}) => {
  const { defaultProps = {} } = Component
  const { className = propKey, nestingLevel = 0, requiredProps = {} } = options
  // required props may include a prop that creates a className
  // if so, we cannot assert that it doesn't exist by default because it is required to exist
  // skip assertions for required props
  if (propKey in defaultProps) return
  if (propKey in requiredProps) return

  it('is not included in className when not defined', () => {
    const wrapper = nestedShallow(<Component {...requiredProps} />, { nestingLevel })
    expect(wrapper).not.have.className(className)

    // ensure that none of the prop option values are in className
    // SUI classes ought to be built up using a declarative component API
    propValues.forEach(propValue => expect(wrapper).not.have.className(propValue.toString()))
  })
}
