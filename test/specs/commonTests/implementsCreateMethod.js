import React, { isValidElement } from 'react'
import { consoleUtil, getComponentName } from 'test/utils'

/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.Component|Function} Component The component to test.
 */
export default function implementsCreateMethod(Component) {
  describe('create shorthand method (common)', () => {
    const name = getComponentName(Component)

    beforeEach(() => {
      // we generate prop values which may throw warnings
      // prevent failures due to console activity
      consoleUtil.disableOnce()
    })
    it('is a static method', () => {
      Component.should.have.any.keys('create')
      Component.create.should.be.a('function')
    })

    it(`creates a ${name} from a string`, () => {
      isValidElement(Component.create('foo')).should.equal(true)
    })

    it(`creates a ${name} from a number`, () => {
      isValidElement(Component.create(123)).should.equal(true)
    })

    it(`creates a ${name} from a number 0`, () => {
      isValidElement(Component.create(0)).should.equal(true)
    })

    it(`creates a ${name} from a props object`, () => {
      isValidElement(Component.create({ 'data-foo': 'bar' })).should.equal(true)
    })

    it(`creates a ${name} from an array`, () => {
      // not all components support array shorthand, suppress warnings
      consoleUtil.disableOnce()
      isValidElement(Component.create(['foo', 123, { 'data-foo': 'bar' }])).should.equal(true)
    })

    it(`creates a ${name} from an element`, () => {
      isValidElement(Component.create(<div />)).should.equal(true)
    })

    it('returns null when passed null', () => {
      expect(Component.create(null)).to.equal(null)
    })

    it('returns null when passed undefined', () => {
      expect(Component.create(undefined)).to.equal(null)
    })

    it('returns null when passed true', () => {
      expect(Component.create(true)).to.equal(null)
    })

    it('returns null when passed false', () => {
      expect(Component.create(false)).to.equal(null)
    })
  })
}
