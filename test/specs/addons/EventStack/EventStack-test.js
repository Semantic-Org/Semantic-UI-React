import _ from 'lodash'
import React from 'react'
import sinon from 'sinon'

import EventStack from 'src/addons/EventStack'
import eventStack from 'src/lib/eventStack'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const requiredProps = {
  name: 'click',
  on: _.noop,
}

describe('EventStack', () => {
  common.isConformant(EventStack, {
    rendersChildren: false,
    requiredProps,
  })

  describe('children', () => {
    it('renders nothing', () => {
      shallow(<EventStack {...requiredProps} />).should.be.blank()
    })
  })

  describe('componentDidUpdate', () => {
    it('calls sub() and unsub()', () => {
      const sub = sandbox.spy(eventStack, 'sub')
      const unsub = sandbox.spy(eventStack, 'unsub')
      const wrapper = mount(<EventStack {...requiredProps} />)

      // Check calls on componentDidMount()
      sub.should.have.been.calledOnce()
      unsub.should.have.not.been.called()

      sub.resetHistory()
      unsub.resetHistory()

      // Check calls on componentDidUpdate()
      wrapper.setProps({ name: 'resize' })

      unsub.should.have.been.calledOnce()
      unsub.should.have.been.calledWithExactly('click', sinon.match.func, sinon.match.object)

      sub.should.have.been.calledAfter(unsub)
      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly('resize', sinon.match.func, sinon.match.object)
    })
  })

  describe('componentWillUnmount', () => {
    it('calls unsub()', () => {
      const unsub = sandbox.spy(eventStack, 'unsub')
      const wrapper = mount(<EventStack {...requiredProps} />)

      wrapper.unmount()
      unsub.should.have.been.calledOnce()
      unsub.should.have.been.calledWithExactly('click', sinon.match.func, sinon.match.object)
    })
  })

  describe('name', () => {
    it('passes "name" to eventStack', () => {
      const sub = sandbox.spy(eventStack, 'sub')

      mount(<EventStack {...requiredProps} name='resize' />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly('resize', sinon.match.func, sinon.match.object)
    })
  })

  describe('on', () => {
    it('passes "on" to eventStack', () => {
      const sub = sandbox.spy(eventStack, 'sub')
      const on = () => {}

      mount(<EventStack {...requiredProps} on={on} />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly(sinon.match.any, on, sinon.match.object)
    })
  })

  describe('pool', () => {
    it('defaults to "default"', () => {
      const sub = sandbox.spy(eventStack, 'sub')

      mount(<EventStack {...requiredProps} />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly(
        sinon.match.any,
        sinon.match.func,
        sinon.match.has('pool', 'default'),
      )
    })

    it('passes "on" to eventStack', () => {
      const sub = sandbox.spy(eventStack, 'sub')

      mount(<EventStack {...requiredProps} pool='foo' />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly(
        sinon.match.any,
        sinon.match.func,
        sinon.match.has('pool', 'foo'),
      )
    })
  })

  describe('target', () => {
    it('defaults to "document"', () => {
      const sub = sandbox.spy(eventStack, 'sub')

      mount(<EventStack {...requiredProps} />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly(
        sinon.match.any,
        sinon.match.func,
        sinon.match.has('target', 'document'),
      )
    })

    it('passes "on" to eventStack', () => {
      const sub = sandbox.spy(eventStack, 'sub')

      mount(<EventStack {...requiredProps} target='window' />)

      sub.should.have.been.calledOnce()
      sub.should.have.been.calledWithExactly(
        sinon.match.any,
        sinon.match.func,
        sinon.match.has('target', 'window'),
      )
    })
  })
})
