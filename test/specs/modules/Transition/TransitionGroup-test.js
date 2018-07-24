import React from 'react'

import Transition from 'src/modules/Transition/Transition'
import TransitionGroup from 'src/modules/Transition/TransitionGroup'
import * as common from 'test/specs/commonTests'

let wrapper

const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('TransitionGroup', () => {
  common.isConformant(TransitionGroup)

  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('children', () => {
    it('wraps all children to Transition', () => {
      shallow(
        <TransitionGroup>
          <div />
          <div />
          <div />
        </TransitionGroup>,
      )
        .children()
        .everyWhere(item => expect(item.type()).toBe(Transition))
    })

    it('passes props to children', () => {
      shallow(
        <TransitionGroup animation='scale' duration={1500}>
          <div />
          <div />
          <div />
        </TransitionGroup>,
      )
        .children()
        .everyWhere((item) => {
          expect(item.prop('animation')).toBe('scale')
          expect(item.prop('duration')).toBe(1500)
          expect(item.type()).toBe(Transition)
        })
    })

    it('wraps new child to Transition and sets transitionOnMount to true', () => {
      wrapperShallow(
        <TransitionGroup>
          <div key='first' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />, <div key='second' />] })

      const child = wrapper.childAt(1)
      expect(child.key()).toBe('.$second')
      expect(child.type()).toBe(Transition)
      expect(child.prop('transitionOnMount')).toBe(true)
    })

    it('skips invalid children', () => {
      wrapperShallow(
        <TransitionGroup>
          <div key='first' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />, '', <div key='second' />] })

      expect(wrapper.children()).toHaveLength(2)
      expect(wrapper.childAt(0).key()).toBe('.$first')
      expect(wrapper.childAt(1).key()).toBe('.$second')
    })

    it('sets visible to false when child was removed', () => {
      wrapperShallow(
        <TransitionGroup>
          <div key='first' />
          <div key='second' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />] })

      expect(wrapper.children()).toHaveLength(2)
      expect(wrapper.childAt(0).type()).toBe(Transition)
      expect(wrapper.childAt(0).prop('visible')).toBe(true)
      expect(wrapper.childAt(1).type()).toBe(Transition)
      expect(wrapper.childAt(1).prop('visible')).toBe(false)
    })

    it('removes child after transition', (done) => {
      wrapperMount(
        <TransitionGroup duration={0}>
          <div key='first' />
          <div key='second' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />] })

      setTimeout(() => {
        expect(wrapper.children()).toHaveLength(1)
        // TODO: Re-enable in future
        // wrapper.childAt(0).key().should.equal('.$first')
        done()
      }, 10)
    })
  })
})
