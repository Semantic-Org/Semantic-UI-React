import _ from 'lodash'
import React, { createElement } from 'react'

import { consoleUtil, nestedShallow } from 'test/utils'

export const classNamePropValueBeforePropName = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  propValues.forEach((propVal) => {
    it(`adds "${propVal} ${className}" to className`, () => {
      shallow(
        createElement(Component, { ...requiredProps, [propKey]: propVal }),
      ).should.have.className(`${propVal} ${className}`)
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

      wrapper.should.not.have.className(className)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      propValues.forEach(propVal => wrapper.should.not.have.className(propVal.toString()))
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
    wrapper.should.not.have.className(className)

    // ensure that none of the prop option values are in className
    // SUI classes ought to be built up using a declarative component API
    propValues.forEach(propValue => wrapper.should.not.have.className(propValue.toString()))
  })
}
