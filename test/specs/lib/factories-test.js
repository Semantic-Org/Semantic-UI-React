import _ from 'lodash'
import React, { isValidElement } from 'react'

import { sandbox } from 'test/utils'
import {
  createShorthand,
} from 'src/lib'

// ----------------------------------------
// Utils
// ----------------------------------------

/**
 * Returns the result of a shorthand factory.
 */
const getShorthand = ({
  Component = 'div',
  mapValueToProps = val => ({}),
  value,
  defaultProps,
}) => createShorthand(Component, mapValueToProps, value, defaultProps)

// ----------------------------------------
// Common tests
// ----------------------------------------

const itReturnsNull = (value) => {
  it('returns null', () => {
    expect(getShorthand({ value })).to.equal(null)
  })
}

const itReturnsNullGivenDefaultProps = (value) => {
  it('returns null given defaultProps object', () => {
    expect(getShorthand({ value, defaultProps: { 'data-foo': 'foo' } })).to.equal(null)
  })
}
const itReturnsNullGivenDefaultPropsFunc = (value) => {
  it('returns null with defaultProps function', () => {
    expect(getShorthand({ value, defaultProps: () => ({ 'data-foo': 'foo' }) })).to.equal(null)
  })
}

const itReturnsAValidElement = (value) => {
  it('returns a valid element', () => {
    expect(isValidElement(getShorthand({ value }))).to.equal(true)
  })
}

const itAppliesDefaultProps = (value) => {
  it('applies defaultProps', () => {
    const defaultProps = { some: 'defaults' }

    shallow(getShorthand({ value, defaultProps }))
      .props()
      .should.deep.equal(defaultProps)
  })
}
const itDoesNotIncludePropsFromMapValueToProps = (value) => {
  it('does not include props from mapValueToProps', () => {
    const props = { 'data-foo': 'foo' }
    const wrapper = shallow(getShorthand({ value, mapValueToProps: () => props }))

    _.each(props, (val, key) => {
      wrapper.should.not.have.prop(key, val)
    })
  })
}

const itMergesClassNames = (classNameSource, extraClassName, shorthandConfig) => {
  it(`merges defaultProps className and ${classNameSource} className`, () => {
    const defaultProps = { className: 'default' }

    shallow(getShorthand({ defaultProps, ...shorthandConfig }))
      .should.have.className('default')
      .and.have.className(extraClassName)
  })
}

const itAppliesProps = (propsSource, expectedProps, shorthandConfig) => {
  it(`applies props from the ${propsSource} props`, () => {
    shallow(getShorthand(shorthandConfig))
      .props()
      .should.deep.equal(expectedProps)
  })
}

const itOverridesDefaultProps = (propsSource, defaultProps, expectedProps, shorthandConfig) => {
  it(`overrides defaultProps with ${propsSource} props`, () => {
    shallow(getShorthand({ defaultProps, ...shorthandConfig }))
      .props()
      .should.deep.equal(expectedProps)
  })
}

const itOverridesDefaultPropsWithFalseyProps = (propsSource, shorthandConfig) => {
  it(`overrides defaultProps with falsey ${propsSource} props`, () => {
    const defaultProps = { undef: '-', nil: '-', zero: '-', empty: '-' }
    const expectedProps = { undef: undefined, nil: null, zero: 0, empty: '' }

    shallow(getShorthand({ defaultProps, ...shorthandConfig }))
      .props()
      .should.deep.equal(expectedProps)
  })
}

// ----------------------------------------
// Assertions
// ----------------------------------------

describe('factories', () => {
  describe('createShorthand', () => {
    it('is a function', () => {
      createShorthand.should.be.a('function')
    })

    describe('defaultProps', () => {
      it('can be an object', () => {
        const defaultProps = { 'data-some': 'defaults' }
        shallow(getShorthand({ value: 'foo', defaultProps }))
          .props()
          .should.deep.equal(defaultProps)
      })
      it('can be a function that returns defaultProps', () => {
        const defaultProps = () => ({ 'data-some': 'defaults' })

        shallow(getShorthand({ value: 'foo', defaultProps }))
          .props()
          .should.deep.equal(defaultProps())
      })
      it("is called with the user's element's props", () => {
        const defaultProps = sandbox.spy(() => ({}))
        const userProps = { 'data-user': 'props' }
        const value = <div {...userProps} />

        shallow(getShorthand({ value, defaultProps }))

        defaultProps.should.have.been.calledWith(userProps)
      })
      it("is called with the user's props object", () => {
        const defaultProps = sandbox.spy(() => ({}))
        const userProps = { 'data-user': 'props' }

        shallow(getShorthand({ value: userProps, defaultProps }))

        defaultProps.should.have.been.calledWith(userProps)
      })
      it('is called with the result of mapValueToProps', () => {
        const defaultProps = sandbox.spy(() => ({}))
        const value = 'foo'
        const mapValueToProps = (val) => ({ 'data-mapped': val })

        shallow(getShorthand({ value, mapValueToProps, defaultProps }))

        defaultProps.should.have.been.calledWith(mapValueToProps(value))
      })
    })

    describe('from undefined', () => {
      itReturnsNull(undefined)
      itReturnsNullGivenDefaultProps(undefined)
      itReturnsNullGivenDefaultPropsFunc(undefined)
    })

    describe('from null', () => {
      itReturnsNull(null)
      itReturnsNullGivenDefaultProps(null)
      itReturnsNullGivenDefaultPropsFunc(null)
    })

    describe('from true', () => {
      itReturnsNull(true)
      itReturnsNullGivenDefaultProps(true)
      itReturnsNullGivenDefaultPropsFunc(true)
    })

    describe('from false', () => {
      itReturnsNull(false)
      itReturnsNullGivenDefaultProps(false)
      itReturnsNullGivenDefaultPropsFunc(false)
    })

    describe('from an element', () => {
      itReturnsAValidElement(<div />)
      itAppliesDefaultProps(<div />)
      itDoesNotIncludePropsFromMapValueToProps(<div />)
      itMergesClassNames('element', 'user', { value: <div className='user' /> })
      itAppliesProps('element', { foo: 'foo' }, { value: <div foo='foo' /> })
      itOverridesDefaultProps(
        'element',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        { value: <div overridden /> }
      )
      itOverridesDefaultPropsWithFalseyProps('element', {
        value: <div undef={undefined} nil={null} zero={0} empty='' />,
      })
    })

    describe('from a string', () => {
      itReturnsAValidElement('foo')
      itAppliesDefaultProps('foo')
      itMergesClassNames('mapValueToProps', 'mapped', {
        value: 'foo',
        mapValueToProps: () => ({ className: 'mapped' }),
      })

      itAppliesProps('mapValueToProps', { 'data-prop': 'present' }, {
        value: 'foo',
        mapValueToProps: () => ({ 'data-prop': 'present' }),
      })

      itOverridesDefaultProps(
        'mapValueToProps',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        {
          value: 'a string',
          mapValueToProps: (val) => ({ overridden: true }),
        }
      )

      itOverridesDefaultPropsWithFalseyProps('mapValueToProps', {
        value: 'a string',
        mapValueToProps: () => ({ undef: undefined, nil: null, zero: 0, empty: '' }),
      })
    })

    describe('from a props object', () => {
      itReturnsAValidElement({})
      itAppliesDefaultProps({})
      itDoesNotIncludePropsFromMapValueToProps({})
      itMergesClassNames('props object', 'user', {
        value: { className: 'user' },
      })

      itOverridesDefaultProps(
        'props object',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        {
          value: { overridden: true },
        }
      )

      itOverridesDefaultPropsWithFalseyProps('props object', {
        value: { undef: undefined, nil: null, zero: 0, empty: '' },
      })
    })

    describe('from an array', () => {
      itReturnsAValidElement(['foo'])
      itAppliesDefaultProps(['foo'])
      itMergesClassNames('mapValueToProps', 'mapped', {
        value: ['foo'],
        mapValueToProps: () => ({ className: 'mapped' }),
      })

      itAppliesProps('mapValueToProps', { 'data-prop': 'present' }, {
        value: ['foo'],
        mapValueToProps: () => ({ 'data-prop': 'present' }),
      })

      itOverridesDefaultProps(
        'mapValueToProps',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        {
          value: ['an array'],
          mapValueToProps: (val) => ({ overridden: true }),
        }
      )

      itOverridesDefaultPropsWithFalseyProps('mapValueToProps', {
        value: ['an array'],
        mapValueToProps: () => ({ undef: undefined, nil: null, zero: 0, empty: '' }),
      })
    })
  })
})
