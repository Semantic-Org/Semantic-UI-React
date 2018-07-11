import _ from 'lodash'
import { shallow } from 'enzyme'
import React, { isValidElement } from 'react'
import { createShorthand, createShorthandFactory } from 'src/lib'
import { consoleUtil } from 'test/utils'

// ----------------------------------------
// Utils
// ----------------------------------------
/**
 * Returns the result of a shorthand factory.
 */
const getShorthand = ({
  Component = 'div',
  defaultProps,
  mapValueToProps = () => ({}),
  overrideProps,
  value,
}: any) => createShorthand(Component, mapValueToProps, value, { defaultProps, overrideProps })

// ----------------------------------------
// Common tests
// ----------------------------------------

const itReturnsNull = value => {
  test('returns null', () => {
    expect(getShorthand({ value })).toBe(null)
  })
}

const itReturnsNullGivenDefaultProps = value => {
  test('returns null given defaultProps object', () => {
    expect(getShorthand({ value, defaultProps: { 'data-foo': 'foo' } })).toBe(null)
  })
}

const itReturnsAValidElement = value => {
  test('returns a valid element', () => {
    expect(isValidElement(getShorthand({ value }))).toBe(true)
  })
}

const itAppliesDefaultProps = value => {
  test('applies defaultProps', () => {
    const defaultProps = { some: 'defaults' }

    expect(shallow(getShorthand({ value, defaultProps })).props()).toEqual(defaultProps)
  })
}

const itDoesNotIncludePropsFromMapValueToProps = value => {
  test('does not include props from mapValueToProps', () => {
    const props = { 'data-foo': 'foo' }
    const wrapper = shallow(getShorthand({ value, mapValueToProps: () => props }))

    _.each(props, (val, key) => {
      expect(wrapper.props()).not.toHaveProperty(key, val)
    })
  })
}

const itMergesClassNames = (classNameSource, extraClassName, shorthandConfig) => {
  test(`merges defaultProps className and ${classNameSource} className`, () => {
    const defaultProps = { className: 'default' }
    const overrideProps = { className: 'override' }

    expect(
      shallow(getShorthand({ defaultProps, overrideProps, ...shorthandConfig })).hasClass(
        `default override ${extraClassName}`,
      ),
    ).toBe(true)
  })
}

const itAppliesProps = (propsSource, expectedProps, shorthandConfig) => {
  test(`applies props from the ${propsSource} props`, () => {
    expect(shallow(getShorthand(shorthandConfig)).props()).toEqual(expectedProps)
  })
}

const itOverridesDefaultProps = (propsSource, defaultProps, expectedProps, shorthandConfig) => {
  test(`overrides defaultProps with ${propsSource} props`, () => {
    expect(shallow(getShorthand({ defaultProps, ...shorthandConfig })).props()).toEqual(
      expectedProps,
    )
  })
}

const itOverridesDefaultPropsWithFalseyProps = (propsSource, shorthandConfig) => {
  test(`overrides defaultProps with falsey ${propsSource} props`, () => {
    const defaultProps = { undef: '-', nil: '-', zero: '-', empty: '-' }
    const expectedProps = { undef: undefined, nil: null, zero: 0, empty: '' }

    expect(shallow(getShorthand({ defaultProps, ...shorthandConfig })).props()).toEqual(
      expectedProps,
    )
  })
}

// ----------------------------------------
// Assertions
// ----------------------------------------

describe('factories', () => {
  describe('createShorthandFactory', () => {
    test('is a function', () => {
      expect(typeof createShorthandFactory).toBe('function')
    })

    test('does not throw if passed a function Component', () => {
      const goodUsage = () => createShorthandFactory(() => <div />, () => ({}))

      expect(goodUsage).not.toThrowError()
    })

    test('does not throw if passed a string Component', () => {
      const goodUsage = () => createShorthandFactory('div', () => ({}))

      expect(goodUsage).not.toThrowError()
    })

    test('throw if passed Component that is not a string nor function', () => {
      const badComponents = [undefined, null, true, false, [], {}, 123]

      _.each(badComponents, badComponent => {
        const badUsage = () => createShorthandFactory(badComponent, () => ({}))

        expect(badUsage).toThrowError()
      })
    })
  })

  describe('createShorthand', () => {
    test('is a function', () => {
      expect(typeof createShorthand).toBe('function')
    })

    test('does not throw if passed a function Component', () => {
      const goodUsage = () => createShorthand(() => <div />, () => ({}))

      expect(goodUsage).not.toThrowError()
    })

    test('does not throw if passed a string Component', () => {
      const goodUsage = () => createShorthand('div', () => ({}))

      expect(goodUsage).not.toThrowError()
    })

    test('throw if passed Component that is not a string nor function', () => {
      const badComponents = [undefined, null, true, false, [], {}, 123]

      _.each(badComponents, badComponent => {
        const badUsage = () => createShorthand(badComponent, () => ({}))

        expect(badUsage).toThrowError()
      })
    })

    describe('defaultProps', () => {
      test('can be an object', () => {
        const defaultProps = { 'data-some': 'defaults' }
        expect(shallow(getShorthand({ defaultProps, value: 'foo' })).props()).toEqual(defaultProps)
      })
    })

    describe('key', () => {
      beforeEach(() => {
        // silence React's warning about accessing the `key` prop
        consoleUtil.disableOnce()
      })

      test('is not consumed', () => {
        expect(getShorthand({ value: { key: 123 } }).props).toHaveProperty('key')
      })

      describe('on an element', () => {
        test('works with a string', () => {
          expect(getShorthand({ value: <div key="foo" /> })).toHaveProperty('key', 'foo')
        })

        test('works with a number', () => {
          expect(getShorthand({ value: <div key={123} /> })).toHaveProperty('key', '123')
        })

        test('works with falsy values', () => {
          expect(getShorthand({ value: <div key={null} /> })).toHaveProperty('key', 'null')

          expect(getShorthand({ value: <div key={0} /> })).toHaveProperty('key', '0')

          expect(getShorthand({ value: <div key="" /> })).toHaveProperty('key', '')
        })
      })

      describe('on an object', () => {
        test('works with a string', () => {
          expect(getShorthand({ value: { key: 'foo' } })).toHaveProperty('key', 'foo')
        })

        test('works with a number', () => {
          expect(getShorthand({ value: { key: 123 } })).toHaveProperty('key', '123')
        })

        test('works with falsy values', () => {
          expect(getShorthand({ value: { key: null } })).toHaveProperty('key', 'null')

          expect(getShorthand({ value: { key: 0 } })).toHaveProperty('key', '0')

          expect(getShorthand({ value: { key: '' } })).toHaveProperty('key', '')
        })
      })
    })

    describe('overrideProps', () => {
      test('can be an object', () => {
        const overrideProps = { 'data-some': 'overrides' }

        expect(shallow(getShorthand({ overrideProps, value: 'foo' })).props()).toEqual(
          overrideProps,
        )
      })

      test('can be a function that returns defaultProps', () => {
        const overrideProps = () => ({ 'data-some': 'overrides' })

        expect(shallow(getShorthand({ overrideProps, value: 'foo' })).props()).toEqual(
          overrideProps(),
        )
      })

      test("is called with the user's element's and default props", () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = jest.fn(() => ({}))
        const userProps = { 'data-user': 'props' }
        const value = <div {...userProps} />

        shallow(getShorthand({ defaultProps, overrideProps, value }))
        expect(overrideProps).toHaveBeenCalledWith({ ...defaultProps, ...userProps })
      })

      test("is called with the user's props object", () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = jest.fn(() => ({}))
        const userProps = { 'data-user': 'props' }

        shallow(getShorthand({ defaultProps, overrideProps, value: userProps }))
        expect(overrideProps).toHaveBeenCalledWith({ ...defaultProps, ...userProps })
      })

      test('is called with the result of mapValueToProps', () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = jest.fn(() => ({}))
        const value = 'foo'
        const mapValueToProps = val => ({ 'data-mapped': val })

        shallow(getShorthand({ defaultProps, mapValueToProps, overrideProps, value }))
        expect(overrideProps).toHaveBeenCalledWith({ ...defaultProps, ...mapValueToProps(value) })
      })
    })

    describe('from undefined', () => {
      itReturnsNull(undefined)
      itReturnsNullGivenDefaultProps(undefined)
    })

    describe('from null', () => {
      itReturnsNull(null)
      itReturnsNullGivenDefaultProps(null)
    })

    describe('from true', () => {
      itReturnsNull(true)
      itReturnsNullGivenDefaultProps(true)
    })

    describe('from false', () => {
      itReturnsNull(false)
      itReturnsNullGivenDefaultProps(false)
    })

    describe('from an element', () => {
      itReturnsAValidElement(<div />)
      itAppliesDefaultProps(<div />)
      itDoesNotIncludePropsFromMapValueToProps(<div />)
      itMergesClassNames('element', 'user', { value: <div className="user" /> })
      itAppliesProps('element', { foo: 'foo' }, { value: <div {...{ foo: 'foo' } as any} /> })
      itOverridesDefaultProps(
        'element',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        { value: <div {...{ overridden: true } as any} /> },
      )
      itOverridesDefaultPropsWithFalseyProps('element', {
        value: <div {...{ undef: undefined, nil: null, zero: 0, empty: '' } as any} />,
      })
    })

    describe('from a string', () => {
      itReturnsAValidElement('foo')
      itAppliesDefaultProps('foo')
      itMergesClassNames('mapValueToProps', 'mapped', {
        value: 'foo',
        mapValueToProps: () => ({ className: 'mapped' }),
      })

      itAppliesProps(
        'mapValueToProps',
        { 'data-prop': 'present' },
        {
          value: 'foo',
          mapValueToProps: () => ({ 'data-prop': 'present' }),
        },
      )

      itOverridesDefaultProps(
        'mapValueToProps',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        {
          value: 'a string',
          mapValueToProps: () => ({ overridden: true }),
        },
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
        },
      )

      itOverridesDefaultPropsWithFalseyProps('props object', {
        value: { undef: undefined, nil: null, zero: 0, empty: '' },
      })
    })

    describe('from a function', () => {
      itReturnsAValidElement(() => <div />)
      itDoesNotIncludePropsFromMapValueToProps(() => <div />)

      test('is called once', () => {
        const spy = jest.fn()

        getShorthand({ value: spy })

        expect(spy).toHaveBeenCalledTimes(1)
      })

      test('is called with Component, props, children', () => {
        const spy = jest.fn(() => <div />)

        getShorthand({ Component: 'p', value: spy })

        expect(spy).toHaveBeenCalledWith('p', {}, undefined)
      })

      test('receives defaultProps in its props argument', () => {
        const spy = jest.fn(() => <div />)
        const defaultProps = { defaults: true }

        getShorthand({ defaultProps, Component: 'p', value: spy })

        expect(spy).toHaveBeenCalledWith('p', defaultProps, undefined)
      })

      test('receives overrideProps in its props argument', () => {
        const spy = jest.fn(() => <div />)
        const overrideProps = { overrides: true }

        getShorthand({ overrideProps, Component: 'p', value: spy })

        expect(spy).toHaveBeenCalledWith('p', overrideProps, undefined)
      })
    })

    describe('from an array', () => {
      itReturnsAValidElement(['foo'])
      itAppliesDefaultProps(['foo'])
      itMergesClassNames('mapValueToProps', 'mapped', {
        value: ['foo'],
        mapValueToProps: () => ({ className: 'mapped' }),
      })

      itAppliesProps(
        'mapValueToProps',
        { 'data-prop': 'present' },
        {
          value: ['foo'],
          mapValueToProps: () => ({ 'data-prop': 'present' }),
        },
      )

      itOverridesDefaultProps(
        'mapValueToProps',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        {
          value: ['an array'],
          mapValueToProps: () => ({ overridden: true }),
        },
      )

      itOverridesDefaultPropsWithFalseyProps('mapValueToProps', {
        value: ['an array'],
        mapValueToProps: () => ({ undef: undefined, nil: null, zero: 0, empty: '' }),
      })
    })

    describe('style', () => {
      test('merges style prop', () => {
        const defaultProps = { style: { left: 5 } }
        const userProps = { style: { bottom: 5 } }
        const overrideProps = { style: { right: 5 } }

        expect(
          shallow(getShorthand({ defaultProps, overrideProps, value: userProps })).prop('style'),
        ).toEqual({ left: 5, bottom: 5, right: 5 })
      })

      test('merges style prop and handles override by userProps', () => {
        const defaultProps = { style: { left: 10, bottom: 5 } }
        const userProps = { style: { bottom: 10 } }

        expect(shallow(getShorthand({ defaultProps, value: userProps })).prop('style')).toEqual({
          left: 10,
          bottom: 10,
        })
      })

      test('merges style prop and handles override by overrideProps', () => {
        const userProps = { style: { bottom: 10, right: 5 } }
        const overrideProps = { style: { right: 10 } }

        expect(shallow(getShorthand({ overrideProps, value: userProps })).prop('style')).toEqual({
          bottom: 10,
          right: 10,
        })
      })

      test('merges style prop from defaultProps and overrideProps', () => {
        const defaultProps = { style: { left: 10, bottom: 5 } }
        const overrideProps = { style: { bottom: 10 } }

        expect(
          shallow(getShorthand({ defaultProps, overrideProps, value: 'foo' })).prop('style'),
        ).toEqual({ left: 10, bottom: 10 })
      })
    })
  })
})
