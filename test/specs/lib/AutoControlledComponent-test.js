/* eslint-disable no-console */
import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { AutoControlledComponent } from 'src/lib'
import { consoleUtil } from 'test/utils'

let TestClass

/* eslint-disable */
const createTestClass = (options = {}) =>
  class Test extends AutoControlledComponent {
    static autoControlledProps = options.autoControlledProps
    static defaultProps = options.defaultProps
    getInitialAutoControlledState() {
      return options.state
    }
    render = () => <div />
  }
/* eslint-enable */

const toDefaultName = prop => `default${prop.slice(0, 1).toUpperCase() + prop.slice(1)}`

const makeProps = () => ({
  computer: 'hardware',
  flux: 'capacitor',
  ion: 'belt',
})

const makeDefaultProps = props =>
  _.transform(props, (res, val, key) => {
    res[toDefaultName(key)] = val
  })

describe('extending AutoControlledComponent', () => {
  beforeEach(() => {
    TestClass = createTestClass({ autoControlledProps: [], state: {} })
  })

  it('does not throw with a `null` state', () => {
    TestClass = createTestClass({ autoControlledProps: [], state: null })
    shallow(<TestClass />)
  })

  describe('trySetState', () => {
    it('is an instance method', () => {
      expect(typeof shallow(<TestClass />).instance().trySetState).toBe('function')
    })

    it('sets state for autoControlledProps', () => {
      consoleUtil.disableOnce()

      const autoControlledProps = _.keys(makeProps())
      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.verb()

      TestClass = createTestClass({ autoControlledProps })
      const wrapper = shallow(<TestClass />)

      wrapper.instance().trySetState({ [randomProp]: randomValue })

      expect(wrapper).have.state(randomProp, randomValue)
    })

    it('does not set state for non autoControlledProps', () => {
      consoleUtil.disableOnce()

      TestClass = createTestClass({ autoControlledProps: [], state: {} })
      const wrapper = shallow(<TestClass />)

      wrapper.instance().trySetState({ [faker.hacker.noun()]: faker.hacker.verb() })

      expect(wrapper.state()).toHaveLength(0)
    })

    it('does not set state for props defined by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.instance().trySetState({ [randomProp]: randomValue })

      // not updated
      expect(wrapper).not.have.state(randomProp, randomValue)

      // is original value
      expect(wrapper).have.state(randomProp, props[randomProp])
    })

    it('sets state for props passed as undefined by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      props[randomProp] = undefined

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.instance().trySetState({ [randomProp]: randomValue })

      expect(wrapper).have.state(randomProp, randomValue)
    })

    it('does not set state for props passed as null by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      props[randomProp] = null

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.instance().trySetState({ [randomProp]: randomValue })

      // not updated
      expect(wrapper).not.have.state(randomProp, randomValue)

      // is original value
      expect(wrapper).have.state(randomProp, props[randomProp])
    })
  })

  describe('initial state', () => {
    it('is derived from autoControlledProps in props', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      expect(shallow(<TestClass {...props} />).state()).toEqual(props)
    })

    it('does not include non autoControlledProps', () => {
      const props = makeProps()
      const wrapper = shallow(<TestClass {...props} />)

      _.each(props, (val, key) => expect(wrapper).not.have.state(key, val))
    })

    it('includes non autoControlled state', () => {
      const props = makeProps()

      TestClass = createTestClass({ autoControlledProps: [], state: { foo: 'bar' } })
      expect(shallow(<TestClass {...props} />)).have.state('foo', 'bar')
    })

    it('uses the initial state if default and regular props are undefined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: undefined }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: { foo: 'bar' } })

      expect(shallow(<TestClass foo={undefined} />)).have.state('foo', 'bar')
    })

    it('uses the default prop if the regular prop is undefined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: 'default' }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })

      expect(shallow(<TestClass foo={undefined} />)).have.state('foo', 'default')
    })

    it('uses the regular prop when a default is also defined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: 'default' }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })

      expect(shallow(<TestClass foo='initial' />)).have.state('foo', 'initial')
    })

    it('defaults "checked" to false if not present', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('checked')

      expect(shallow(<TestClass />)).have.state('checked', false)
    })

    it('defaults "value" to an empty string if not present', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('value')

      expect(shallow(<TestClass />)).have.state('value', '')
    })

    it('defaults "value" to an empty array if "multiple"', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('value')

      expect(shallow(<TestClass multiple />).state()).toEqual({ value: [] })
    })
  })

  describe('default props', () => {
    it('are applied to state for props in autoControlledProps', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      expect(shallow(<TestClass {...defaultProps} />).state()).toEqual(props)
    })

    it('are not applied to state for normal props', () => {
      const props = makeProps()
      const defaultProps = makeDefaultProps(props)

      const wrapper = shallow(<TestClass {...defaultProps} />)

      _.each(props, (val, key) => expect(wrapper).not.have.state(key, val))
    })

    it('allows trySetState to work on non-default autoControlledProps', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      wrapper.instance().trySetState({ [randomProp]: randomValue })

      expect(wrapper).have.state(randomProp, randomValue)
    })
  })

  describe('changing props', () => {
    it('sets state for props in autoControlledProps', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setProps({ [randomProp]: randomValue })

      expect(wrapper).have.state(randomProp, randomValue)
    })

    it('does not set state for props not in autoControlledProps', () => {
      consoleUtil.disableOnce()
      const props = makeProps()

      const randomProp = _.sample(_.keys(props))
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps: [], state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setProps({ [randomProp]: randomValue })

      expect(wrapper).not.have.state(randomProp, randomValue)
    })

    it('does not set state for default props when changed', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      const randomDefaultProp = _.sample(defaultProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      wrapper.setProps({ [randomDefaultProp]: randomValue })

      expect(wrapper).not.have.state(randomDefaultProp, randomValue)
    })

    it('does not return state to default props when setting props undefined', () => {
      consoleUtil.disableOnce()

      const autoControlledProps = ['foo']
      const defaultProps = { defaultFoo: 'default' }

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })
      const wrapper = shallow(<TestClass foo='initial' />)

      // default value
      expect(wrapper).have.state('foo', 'initial')

      wrapper.setProps({ foo: undefined })

      expect(wrapper).not.have.state('foo', 'foo')
    })

    it('sets state to undefined for props passed as undefined by the parent', () => {
      consoleUtil.disableOnce()
      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      // state exists initially
      expect(wrapper).have.state(randomProp)

      wrapper.setProps({ [randomProp]: undefined })

      // use "should not have" to assert undefined state
      expect(wrapper).not.have.state(randomProp)
    })

    it('does not set state for props passed as null by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setProps({ [randomProp]: null })

      expect(wrapper).have.state(randomProp, null)
    })
  })
})
