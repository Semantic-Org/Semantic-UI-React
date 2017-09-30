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
        .everyWhere(item => item.type().should.equal(Transition))
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
          item.should.have.prop('animation', 'scale')
          item.should.have.prop('duration', 1500)
          item.type().should.equal(Transition)
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
      child.key().should.equal('.$second')
      child.type().should.equal(Transition)
      child.should.have.prop('transitionOnMount', true)
    })

    it('skips invalid children', () => {
      wrapperShallow(
        <TransitionGroup>
          <div key='first' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />, '', <div key='second' />] })

      wrapper.children().should.have.length(2)
      wrapper.childAt(0).key().should.equal('.$first')
      wrapper.childAt(1).key().should.equal('.$second')
    })

    it('sets visible to false when child was removed', () => {
      wrapperShallow(
        <TransitionGroup>
          <div key='first' />
          <div key='second' />
        </TransitionGroup>,
      )
      wrapper.setProps({ children: [<div key='first' />] })

      wrapper.children().should.have.length(2)
      wrapper.childAt(0).type().should.equal(Transition)
      wrapper.childAt(0).should.have.prop('visible', true)
      wrapper.childAt(1).type().should.equal(Transition)
      wrapper.childAt(1).should.have.prop('visible', false)
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
        wrapper.children().should.have.length(1)
        wrapper.childAt(0).key().should.equal('.$first')

        done()
      }, 10)
    })
  })
})
