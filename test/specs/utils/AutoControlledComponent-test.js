/* eslint-disable no-console */
import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import AutoControlledComponent from 'src/utils/AutoControlledComponent'
import * as consoleUtil from 'test/utils/consoleUtil.js'

let TestClass

/* eslint-disable */
const createTestClass = (options = {}) => class Test extends AutoControlledComponent {
  static autoControlledProps = options.autoControlledProps
  state = options.state
  render = () => <div />
}
/* eslint-enable */

const toDefaultName = (prop) => `default${prop.slice(0, 1).toUpperCase() + prop.slice(1)}`

const makeProps = () => _.transform(_.times(_.random(3, 10)), (res) => {
  res[_.camelCase(faker.hacker.noun())] = faker.hacker.verb()
}, {})

const makeDefaultProps = (props) => _.transform(props, (res, val, key) => {
  res[toDefaultName(key)] = val
})

describe('extending AutoControlledComponent', () => {
  beforeEach(() => {
    TestClass = createTestClass({ autoControlledProps: [], state: {} })
  })

  describe('trySetState', () => {
    it('is an instance method', () => {
      shallow(<TestClass />)
        .instance()
        .trySetState.should.be.a('function')
    })

    it('sets state for autoControlledProps', () => {
      const autoControlledProps = _.keys(makeProps())
      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.verb()

      TestClass = createTestClass({ autoControlledProps })
      const wrapper = shallow(<TestClass />)

      wrapper
        .instance()
        .trySetState({ [randomProp]: randomValue })

      wrapper
        .should.have.state(randomProp, randomValue)
    })

    it('does not set state for non autoControlledProps', () => {
      consoleUtil.disableOnce()

      TestClass = createTestClass({ state: {} })
      const wrapper = shallow(<TestClass />)

      wrapper
        .instance()
        .trySetState({ [faker.hacker.noun()]: faker.hacker.verb() })

      wrapper
        .state()
        .should.be.empty()
    })

    it('does not set state for props defined by the parent', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper
        .instance()
        .trySetState({ [randomProp]: randomValue })

      // not updated
      wrapper
        .should.not.have.state(randomProp, randomValue)

      // is original value
      wrapper
        .should.have.state(randomProp, props[randomProp])
    })
  })

  describe('initial state', () => {
    it('is derived from autoControlledProps in props', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      shallow(<TestClass {...props} />)
        .state()
        .should.deep.equal(props)
    })

    it('does not include non autoControlledProps', () => {
      const props = makeProps()
      const wrapper = shallow(<TestClass {...props} />)

      _.each(props, (val, key) => wrapper.should.not.have.state(key, val))
    })
  })

  describe('default props', () => {
    it('are applied to state for props in autoControlledProps', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      shallow(<TestClass {...defaultProps} />)
        .state()
        .should.deep.equal(props)
    })

    it('are not applied to state for normal props', () => {
      const props = makeProps()
      const defaultProps = makeDefaultProps(props)

      const wrapper = shallow(<TestClass {...defaultProps} />)

      _.each(props, (val, key) => wrapper.should.not.have.state(key, val))
    })

    it('allows trySetState to work on non-default autoControlledProps', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      wrapper
        .instance()
        .trySetState({ [randomProp]: randomValue })

      wrapper
        .should.have.state(randomProp, randomValue)
    })
  })

  describe('changing props', () => {
    it('sets state for props in autoControlledProps', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper
        .setProps({ [randomProp]: randomValue })

      wrapper
        .should.have.state(randomProp, randomValue)
    })

    it('does not set state for props not in autoControlledProps', () => {
      consoleUtil.disableOnce()
      const props = makeProps()

      const randomProp = _.sample(_.keys(props))
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper
        .setProps({ [randomProp]: randomValue })

      wrapper
        .should.not.have.state(randomProp, randomValue)
    })

    it('does not set state for default props when changed', () => {
      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      const randomPropIndex = _.random(0, autoControlledProps.length)
      const randomDefaultProp = _.keys(defaultProps)[randomPropIndex]
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      wrapper
        .setProps({ [randomDefaultProp]: randomValue })

      wrapper
        .should.not.have.state(randomDefaultProp, randomValue)
    })
  })
})
