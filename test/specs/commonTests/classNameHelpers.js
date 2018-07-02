import _ from 'lodash'
import React, { createElement } from 'react'

import { consoleUtil, nestedShallow } from 'test/utils'

export const classNamePropValueBeforePropName = (Component, propKey, propValues, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  propValues.forEach((propVal) => {
    it(`adds "${propVal} ${className}" to className`, () => {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))

      expect(wrapper.hasClass(`${propVal} ${className}`)).toBeTruthy()
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

      expect(wrapper.hasClass(className)).toBeFalsy()
      expect(wrapper.hasClass('true')).toBeFalsy()
      expect(wrapper.hasClass('false')).toBeFalsy()

      _.forEach(propValues, (propVal) => {
        expect(wrapper.hasClass(propVal.toString())).toBeFalsy()
      })
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
    expect(wrapper.hasClass(className)).toBeFalsy()

    // ensure that none of the prop option values are in className
    // SUI classes ought to be built up using a declarative component API
    _.forEach(propValues, (propValue) => {
      expect(wrapper.hasClass(propValue.toString())).toBeFalsy()
    })
  })
}
