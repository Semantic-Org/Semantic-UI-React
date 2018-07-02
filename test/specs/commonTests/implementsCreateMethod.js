import _ from 'lodash'
import React, { isValidElement } from 'react'
import { consoleUtil } from 'test/utils'

/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.Component|Function} Component The component to test.
 */
export default (Component) => {
  const { name } = _.get(Component, 'prototype.constructor.name')

  describe('create shorthand method (common)', () => {
    beforeEach(() => {
      // we generate prop values which may throw warnings
      // prevent failures due to console activity
      consoleUtil.disableOnce()
    })
    it('is a static method', () => {
      expect(Component).toHaveProperty('create')
      expect(typeof Component.create).toBe('function')
    })

    it(`creates a ${name} from a string`, () => {
      expect(isValidElement(Component.create('foo'))).toBe(true)
    })

    it(`creates a ${name} from a number`, () => {
      expect(isValidElement(Component.create(123))).toBe(true)
    })

    it(`creates a ${name} from a number 0`, () => {
      expect(isValidElement(Component.create(0))).toBe(true)
    })

    it(`creates a ${name} from a props object`, () => {
      expect(isValidElement(Component.create({ 'data-foo': 'bar' }))).toBe(true)
    })

    it(`creates a ${name} from an array`, () => {
      // not all components support array shorthand, suppress warnings
      consoleUtil.disableOnce()
      expect(isValidElement(Component.create(['foo', 123, { 'data-foo': 'bar' }]))).toBe(true)
    })

    it(`creates a ${name} from an element`, () => {
      expect(isValidElement(Component.create(<div />))).toBe(true)
    })

    it('returns null when passed null', () => {
      expect(Component.create(null)).toBe(null)
    })

    it('returns null when passed undefined', () => {
      expect(Component.create(undefined)).toBe(null)
    })

    it('returns null when passed true', () => {
      expect(Component.create(true)).toBe(null)
    })

    it('returns null when passed false', () => {
      expect(Component.create(false)).toBe(null)
    })
  })
}
