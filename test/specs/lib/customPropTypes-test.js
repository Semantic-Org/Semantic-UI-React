import PropTypes from 'prop-types'
import { customPropTypes } from 'src/lib'

import { consoleUtil, sandbox } from 'test/utils'

/* eslint-disable no-console */

describe('customPropTypes', () => {
  beforeEach(() => {
    consoleUtil.disable()
    sandbox.spy(console, 'error')
  })

  describe('every', () => {
    it('should throw error when a non-array argument given', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.every('foo'),
        },
        { name: 'foo' },
        'name',
        'FooComponent',
      )

      console.error.should.have.been.calledWithMatch(
        /Invalid argument supplied to every, expected an instance of array/,
      )
    })

    it('should throw error when a non-function argument given', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.every([{}]),
        },
        { name: 'foo' },
        'name',
        'FooComponent',
      )

      console.error.should.have.been.calledWithMatch(
        /argument "validators" should contain functions/,
      )
    })

    it('should execute all validators', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.every([PropTypes.string]),
        },
        { name: 1 },
        'name',
        'FooComponent',
      )

      console.error.should.have.been.calledWithMatch(
        /Invalid name `name` of type `number` supplied/,
      )
    })

    it('should execute all validators including custom', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.every([customPropTypes.suggest(['foo']), PropTypes.number]),
        },
        { name: 'bar' },
        'name',
        'FooComponent',
      )

      console.error.should.have.been.calledWithMatch(/Instead of `bar`, did you mean:/)
    })
  })

  describe('suggest', () => {
    it('should throw error when non-array argument given', () => {
      expect(() => customPropTypes.suggest('foo')).to.throw(
        Error,
        /Invalid argument supplied to suggest, expected an instance of array./,
      )
    })

    it('should return undefined when prop is valid', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.suggest(['foo', 'bar', 'baz']),
        },
        { name: 'foo' },
        'name',
        'FooComponent',
      )

      console.error.should.have.not.been.called()
    })

    it('should return Error with suggestions when prop is invalid', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.suggest(['foo', 'bar', 'baz']),
        },
        { name: 'bad' },
        'name',
        'FooComponent',
      )

      console.error.should.have.been
        .calledWithMatch(`Invalid prop \`name\` of value \`bad\` supplied to \`FooComponent\`.

Instead of \`bad\`, did you mean:
  - bar
  - baz
  - foo
`)
    })

    it('should return Error with suggestions when prop contains multiple words and is invalid', () => {
      PropTypes.checkPropTypes(
        {
          name: customPropTypes.suggest(['foo', 'bar', 'baz']),
        },
        { name: 'bat words' },
        'name',
        'FooComponent',
      )

      console.error.should.have.been
        .calledWithMatch(`Invalid prop \`name\` of value \`bat words\` supplied to \`FooComponent\`.

Instead of \`bat words\`, did you mean:
  - bar
  - baz
  - foo
`)
    })
  })
})
