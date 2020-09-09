import _ from 'lodash'
import React, { isValidElement } from 'react'

import { createShorthand, createShorthandFactory } from 'src/lib'
import { consoleUtil, sandbox } from 'test/utils'

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
  autoGenerateKey,
  value,
}) =>
  createShorthand(Component, mapValueToProps, value, {
    defaultProps,
    overrideProps,
    autoGenerateKey,
  })

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

const itReturnsAValidElement = (value) => {
  it('returns a valid element', () => {
    expect(isValidElement(getShorthand({ value }))).to.equal(true)
  })
}

const itAppliesDefaultProps = (value) => {
  it('applies defaultProps', () => {
    const defaultProps = { some: 'defaults' }

    shallow(getShorthand({ value, defaultProps })).props().should.deep.equal(defaultProps)
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
    const overrideProps = { className: 'override' }

    shallow(
      getShorthand({ defaultProps, overrideProps, ...shorthandConfig }),
    ).should.have.same.className(`default override ${extraClassName}`)
  })
}

const itAppliesProps = (propsSource, expectedProps, shorthandConfig) => {
  it(`applies props from the ${propsSource} props`, () => {
    shallow(getShorthand(shorthandConfig)).props().should.deep.equal(expectedProps)
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
  describe('createShorthandFactory', () => {
    it('is a function', () => {
      createShorthandFactory.should.be.a('function')
    })

    it('does not throw if passed a function Component', () => {
      const goodUsage = () =>
        createShorthandFactory(
          () => <div />,
          () => ({}),
        )

      expect(goodUsage).not.to.throw()
    })

    it('does not throw if passed a string Component', () => {
      const goodUsage = () => createShorthandFactory('div', () => ({}))

      expect(goodUsage).not.to.throw()
    })

    it('throw if passed Component that is not a string nor function', () => {
      const badComponents = [undefined, null, true, false, [], {}, 123]

      _.each(badComponents, (badComponent) => {
        const badUsage = () => createShorthandFactory(badComponent, () => ({}))

        expect(badUsage).to.throw()
      })
    })
  })

  describe('createShorthand', () => {
    it('is a function', () => {
      createShorthand.should.be.a('function')
    })

    it('does not throw if passed a function Component', () => {
      const goodUsage = () =>
        createShorthand(
          () => <div />,
          () => ({}),
        )

      expect(goodUsage).not.to.throw()
    })

    it('does not throw if passed a string Component', () => {
      const goodUsage = () => createShorthand('div', () => ({}))

      expect(goodUsage).not.to.throw()
    })

    it('throw if passed Component that is not a string nor function', () => {
      const badComponents = [undefined, null, true, false, [], {}, 123]

      _.each(badComponents, (badComponent) => {
        const badUsage = () => createShorthand(badComponent, () => ({}))

        expect(badUsage).to.throw()
      })
    })

    describe('defaultProps', () => {
      it('can be an object', () => {
        const defaultProps = { 'data-some': 'defaults' }
        shallow(getShorthand({ value: 'foo', defaultProps }))
          .props()
          .should.deep.equal(defaultProps)
      })
    })

    describe('key', () => {
      it('is not consumed', () => {
        // silence React "`key` is not a prop" warning due to accessing props.key
        consoleUtil.disableOnce()

        getShorthand({ value: { key: 123 } }).props.should.have.property('key')
      })

      describe('on an element', () => {
        it('works with a string', () => {
          getShorthand({ value: <div key='foo' /> }).should.have.property('key', 'foo')
        })

        it('works with a number', () => {
          getShorthand({ value: <div key={123} /> }).should.have.property('key', '123')
        })

        it('works with falsy values', () => {
          getShorthand({ value: <div key={null} /> }).should.have.property('key', 'null')

          getShorthand({ value: <div key={0} /> }).should.have.property('key', '0')

          getShorthand({ value: <div key='' /> }).should.have.property('key', '')
        })
      })

      describe('on an object', () => {
        it('works with a string', () => {
          getShorthand({ value: { key: 'foo' } }).should.have.property('key', 'foo')
        })

        it('works with a number', () => {
          getShorthand({ value: { key: 123 } }).should.have.property('key', '123')
        })

        it('works with falsy values', () => {
          getShorthand({ value: { key: null } }).should.have.property('key', 'null')

          getShorthand({ value: { key: 0 } }).should.have.property('key', '0')

          getShorthand({ value: { key: '' } }).should.have.property('key', '')
        })
      })

      describe('when value is a string', () => {
        it('is generated from the value', () => {
          getShorthand({ value: 'foo' }).should.have.property('key', 'foo')
        })

        it('is not generated if autoGenerateKey is false', () => {
          getShorthand({ value: 'foo', autoGenerateKey: false }).should.have.property('key', null)
        })
      })

      describe('when value is a number', () => {
        it('is generated from the value', () => {
          getShorthand({ value: 123 }).should.have.property('key', '123')
        })

        it('is not generated if autoGenerateKey is false', () => {
          getShorthand({ value: 123, autoGenerateKey: false }).should.have.property('key', null)
        })
      })
    })

    describe('childKey', () => {
      it('is consumed', () => {
        getShorthand({ value: { childKey: 123 } }).props.should.not.have.property('childKey')
      })

      it('is called with the final `props` if it is a function', () => {
        const props = { foo: 'bar', childKey: sandbox.spy(({ foo }) => foo) }
        const element = getShorthand({ value: props })

        props.childKey.should.have.been.calledOnce()
        props.childKey.should.have.been.calledWithExactly({ foo: 'bar', key: 'bar' })

        element.key.should.equal('bar')
      })

      describe('on an element', () => {
        it('works with a string', () => {
          getShorthand({ value: <div childKey='foo' /> }).should.have.property('key', 'foo')
        })

        it('works with a number', () => {
          getShorthand({ value: <div childKey={123} /> }).should.have.property('key', '123')
        })

        it('works with falsy values', () => {
          getShorthand({ value: <div childKey={null} /> }).should.have.property('key', null)

          getShorthand({ value: <div childKey={0} /> }).should.have.property('key', '0')

          getShorthand({ value: <div childKey='' /> }).should.have.property('key', '')
        })
      })

      describe('on an object', () => {
        it('works with a string', () => {
          getShorthand({ value: { childKey: 'foo' } }).should.have.property('key', 'foo')
        })

        it('works with a number', () => {
          getShorthand({ value: { childKey: 123 } }).should.have.property('key', '123')
        })

        it('works with falsy values', () => {
          getShorthand({ value: { childKey: null } }).should.have.property('key', null)

          getShorthand({ value: { childKey: 0 } }).should.have.property('key', '0')

          getShorthand({ value: { childKey: '' } }).should.have.property('key', '')
        })
      })
    })

    describe('overrideProps', () => {
      it('can be an object', () => {
        const overrideProps = { 'data-some': 'overrides' }

        shallow(getShorthand({ value: 'foo', overrideProps }))
          .props()
          .should.deep.equal(overrideProps)
      })

      it('can be a function that returns defaultProps', () => {
        const overrideProps = () => ({ 'data-some': 'overrides' })

        shallow(getShorthand({ value: 'foo', overrideProps }))
          .props()
          .should.deep.equal(overrideProps())
      })

      it("is called with the user's element's and default props", () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = sandbox.spy(() => ({}))
        const userProps = { 'data-user': 'props' }
        const value = <div {...userProps} />

        shallow(getShorthand({ defaultProps, overrideProps, value }))
        overrideProps.should.have.been.calledWith({ ...defaultProps, ...userProps })
      })

      it("is called with the user's props object", () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = sandbox.spy(() => ({}))
        const userProps = { 'data-user': 'props' }

        shallow(getShorthand({ defaultProps, overrideProps, value: userProps }))
        overrideProps.should.have.been.calledWith({ ...defaultProps, ...userProps })
      })

      it('is called with the result of mapValueToProps', () => {
        const defaultProps = { 'data-some': 'defaults' }
        const overrideProps = sandbox.spy(() => ({}))
        const value = 'foo'
        const mapValueToProps = (val) => ({ 'data-mapped': val })

        shallow(getShorthand({ defaultProps, mapValueToProps, overrideProps, value }))
        overrideProps.should.have.been.calledWith({ ...defaultProps, ...mapValueToProps(value) })
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
      itMergesClassNames('element', 'user', { value: <div className='user' /> })
      itAppliesProps('element', { foo: 'foo' }, { value: <div foo='foo' /> })
      itOverridesDefaultProps(
        'element',
        { some: 'defaults', overridden: false },
        { some: 'defaults', overridden: true },
        { value: <div overridden /> },
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

      describe('children', () => {
        it('is called once', () => {
          const children = sandbox.spy()

          getShorthand({ value: { children } })
          children.should.have.been.calledOnce()
        })

        it('is called with Component, props, children', () => {
          const children = sandbox.spy(() => <div />)

          getShorthand({ Component: 'p', value: { children } })
          children.should.have.been.calledWithExactly('p', { children: undefined })
        })

        it('receives defaultProps in its props argument', () => {
          const children = sandbox.spy(() => <div />)
          const defaultProps = { defaults: true }

          getShorthand({ Component: 'p', defaultProps, value: { children } })
          children.should.have.been.calledWithExactly('p', { ...defaultProps, children: undefined })
        })

        it('receives overrideProps in its props argument', () => {
          const children = sandbox.spy(() => <div />)
          const overrideProps = { overrides: true }

          getShorthand({ Component: 'p', overrideProps, value: { children } })
          children.should.have.been.calledWithExactly('p', {
            ...overrideProps,
            children: undefined,
          })
        })
      })
    })

    // TODO: V3 remove this test
    describe('from a function', () => {
      beforeEach(() => {
        consoleUtil.disableOnce()
      })

      itReturnsAValidElement(() => <div />)
      itDoesNotIncludePropsFromMapValueToProps(() => <div />)

      it('is called once', () => {
        const spy = sandbox.spy()

        getShorthand({ value: spy })
        spy.should.have.been.calledOnce()
      })

      it('is called with Component, props, children', () => {
        const value = sandbox.spy(() => <div />)

        getShorthand({ Component: 'p', value })
        value.should.have.been.calledWithExactly('p', {}, undefined)
      })

      it('receives defaultProps in its props argument', () => {
        const value = sandbox.spy(() => <div />)
        const defaultProps = { defaults: true }

        getShorthand({ Component: 'p', defaultProps, value })
        value.should.have.been.calledWithExactly('p', defaultProps, undefined)
      })

      it('receives overrideProps in its props argument', () => {
        const value = sandbox.spy(() => <div />)
        const overrideProps = { overrides: true }

        getShorthand({ Component: 'p', overrideProps, value })
        value.should.have.been.calledWithExactly('p', overrideProps, undefined)
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
      it('merges style prop', () => {
        const defaultProps = { style: { left: 5 } }
        const userProps = { style: { bottom: 5 } }
        const overrideProps = { style: { right: 5 } }

        shallow(getShorthand({ defaultProps, overrideProps, value: userProps }))
          .should.have.prop('style')
          .deep.equal({ left: 5, bottom: 5, right: 5 })
      })

      it('merges style prop and handles override by userProps', () => {
        const defaultProps = { style: { left: 10, bottom: 5 } }
        const userProps = { style: { bottom: 10 } }

        shallow(getShorthand({ defaultProps, value: userProps }))
          .should.have.prop('style')
          .deep.equal({ left: 10, bottom: 10 })
      })

      it('merges style prop and handles override by overrideProps', () => {
        const userProps = { style: { bottom: 10, right: 5 } }
        const overrideProps = { style: { right: 10 } }

        shallow(getShorthand({ overrideProps, value: userProps }))
          .should.have.prop('style')
          .deep.equal({ bottom: 10, right: 10 })
      })

      it('merges style prop from defaultProps and overrideProps', () => {
        const defaultProps = { style: { left: 10, bottom: 5 } }
        const overrideProps = { style: { bottom: 10 } }

        shallow(getShorthand({ defaultProps, overrideProps, value: 'foo' }))
          .should.have.prop('style')
          .deep.equal({ left: 10, bottom: 10 })
      })
    })
  })
})
