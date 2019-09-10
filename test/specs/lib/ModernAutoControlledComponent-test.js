/* eslint-disable no-console */
import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { ModernAutoControlledComponent as AutoControlledComponent } from 'src/lib'
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

const toDefaultName = (prop) => `default${prop.slice(0, 1).toUpperCase() + prop.slice(1)}`

const makeProps = () => ({
  computer: 'hardware',
  flux: 'capacitor',
  ion: 'belt',
})

const makeDefaultProps = (props) =>
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

  it('getAutoControlledStateFromProps', () => {
    consoleUtil.disableOnce()

    TestClass = createTestClass({
      autoControlledProps: ['open'],
      defaultProps: ['defaultOpen'],
      state: { open: false, value: 'initial' },
    })
    TestClass.getAutoControlledStateFromProps = (props, state) => {
      return {
        openProp: props.open,
        openState: state.open,
        modifiedValue: `${state.value} + auto`,
      }
    }
    const wrapper = shallow(<TestClass open />)

    wrapper.should.have.state('open', true)
    wrapper.should.have.state('openProp', true)

    // will be "true" because logic of ACC was executed before
    wrapper.should.have.state('openState', true)

    // "getAutoControlledStateFromProps" has access to whole state
    wrapper.should.have.state('modifiedValue', 'initial + auto')
    // original "value" will be kept
    wrapper.should.have.state('value', 'initial')
  })

  describe('setState', () => {
    it('sets state for autoControlledProps', () => {
      consoleUtil.disableOnce()

      const autoControlledProps = _.keys(makeProps())
      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.verb()

      TestClass = createTestClass({ autoControlledProps })
      const wrapper = shallow(<TestClass />)

      wrapper.setState({ [randomProp]: randomValue })
      wrapper.should.have.state(randomProp, randomValue)
    })

    it('does not set state for props defined by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setState({ [randomProp]: randomValue })

      // not updated
      wrapper.should.not.have.state(randomProp, randomValue)

      // is original value
      wrapper.should.have.state(randomProp, props[randomProp])
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

      wrapper.setState({ [randomProp]: randomValue })

      wrapper.should.have.state(randomProp, randomValue)
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

      wrapper.setState({ [randomProp]: randomValue })

      // not updated
      wrapper.should.not.have.state(randomProp, randomValue)

      // is original value
      wrapper.should.have.state(randomProp, props[randomProp])
    })
  })

  describe('initial state', () => {
    it('is derived from autoControlledProps in props', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      _.each(props, (val, key) => wrapper.should.have.state(key, val))
    })

    it('does not include non autoControlledProps', () => {
      const props = makeProps()
      const wrapper = shallow(<TestClass {...props} />)

      _.each(props, (val, key) => wrapper.should.not.have.state(key, val))
    })

    it('includes non autoControlled state', () => {
      const props = makeProps()

      TestClass = createTestClass({ autoControlledProps: [], state: { foo: 'bar' } })
      shallow(<TestClass {...props} />).should.have.state('foo', 'bar')
    })

    it('uses the initial state if default and regular props are undefined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: undefined }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: { foo: 'bar' } })

      shallow(<TestClass foo={undefined} />).should.have.state('foo', 'bar')
    })

    it('uses the default prop if the regular prop is undefined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: 'default' }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })

      shallow(<TestClass foo={undefined} />).should.have.state('foo', 'default')
    })

    it('uses the regular prop when a default is also defined', () => {
      consoleUtil.disableOnce()

      const defaultProps = { defaultFoo: 'default' }
      const autoControlledProps = ['foo']

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })

      shallow(<TestClass foo='initial' />).should.have.state('foo', 'initial')
    })

    it('defaults "checked" to false if not present', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('checked')

      shallow(<TestClass />).should.have.state('checked', false)
    })

    it('defaults "value" to an empty string if not present', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('value')

      shallow(<TestClass />).should.have.state('value', '')
    })

    it('defaults "value" to an empty array if "multiple"', () => {
      consoleUtil.disableOnce()
      TestClass.autoControlledProps.push('value')

      shallow(<TestClass multiple />)
        .should.have.state('value')
        .to.eql([])
    })
  })

  describe('default props', () => {
    it('are applied to state for props in autoControlledProps', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      _.each(props, (val, key) => wrapper.should.have.state(key, val))
    })

    it('are not applied to state for normal props', () => {
      const props = makeProps()
      const defaultProps = makeDefaultProps(props)

      const wrapper = shallow(<TestClass {...defaultProps} />)

      _.each(props, (val, key) => wrapper.should.not.have.state(key, val))
    })

    it('allows setState to work on non-default autoControlledProps', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)
      const defaultProps = makeDefaultProps(props)

      const randomProp = _.sample(autoControlledProps)
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...defaultProps} />)

      wrapper.setState({ [randomProp]: randomValue })
      wrapper.should.have.state(randomProp, randomValue)
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

      wrapper.should.have.state(randomProp, randomValue)
    })

    it('does not set state for props not in autoControlledProps', () => {
      consoleUtil.disableOnce()
      const props = makeProps()

      const randomProp = _.sample(_.keys(props))
      const randomValue = faker.hacker.phrase()

      TestClass = createTestClass({ autoControlledProps: [], state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setProps({ [randomProp]: randomValue })

      wrapper.should.not.have.state(randomProp, randomValue)
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

      wrapper.should.not.have.state(randomDefaultProp, randomValue)
    })

    it('does not return state to default props when setting props undefined', () => {
      consoleUtil.disableOnce()

      const autoControlledProps = ['foo']
      const defaultProps = { defaultFoo: 'default' }

      TestClass = createTestClass({ autoControlledProps, defaultProps, state: {} })
      const wrapper = shallow(<TestClass foo='initial' />)

      // default value
      wrapper.should.have.state('foo', 'initial')

      wrapper.setProps({ foo: undefined })

      wrapper.should.have.state('foo', 'initial')
    })

    it('does not set state for props passed as null by the parent', () => {
      consoleUtil.disableOnce()

      const props = makeProps()
      const autoControlledProps = _.keys(props)

      const randomProp = _.sample(autoControlledProps)

      TestClass = createTestClass({ autoControlledProps, state: {} })
      const wrapper = shallow(<TestClass {...props} />)

      wrapper.setProps({ [randomProp]: null })

      wrapper.should.have.state(randomProp, null)
    })
  })
})
