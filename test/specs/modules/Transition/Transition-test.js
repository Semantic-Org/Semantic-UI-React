import React from 'react'

import { SUI } from 'src/lib'
import Transition from 'src/modules/Transition/Transition'
import TransitionGroup from 'src/modules/Transition/TransitionGroup'
import {
  TRANSITION_STATUS_ENTERED,
  TRANSITION_STATUS_ENTERING,
  TRANSITION_STATUS_EXITED,
  TRANSITION_STATUS_EXITING,
} from 'src/modules/Transition/utils/computeStatuses'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

let wrapper

const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('Transition', () => {
  common.hasSubcomponents(Transition, [TransitionGroup])
  common.hasValidTypings(Transition)

  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('animation', () => {
    SUI.DIRECTIONAL_TRANSITIONS.forEach((animation) => {
      it(`directional ${animation}`, () => {
        wrapperMount(
          <Transition animation={animation} transitionOnMount>
            <p />
          </Transition>,
        )

        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
        animation.split(' ').forEach((className) => wrapper.should.have.className(className))
        wrapper.should.have.className('in')

        wrapper.setProps({ visible: false })
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
        animation.split(' ').forEach((className) => wrapper.should.have.className(className))
        wrapper.should.have.className('out')
      })
    })

    SUI.STATIC_TRANSITIONS.forEach((animation) => {
      it(`static ${animation}`, () => {
        wrapperMount(
          <Transition animation={animation} transitionOnMount>
            <p />
          </Transition>,
        )

        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
        wrapper.should.have.className(animation)
        wrapper.should.not.have.className('in')

        wrapper.setProps({ visible: false })
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
        wrapper.should.have.className(animation)
        wrapper.should.not.have.className('out')
      })
    })

    it('supports custom animations', () => {
      wrapperMount(
        <Transition animation='jump' transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.className('jump')

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.should.have.className('jump')
    })
  })

  describe('className', () => {
    it("passes element's className", () => {
      wrapperMount(
        <Transition>
          <p className='foo bar' />
        </Transition>,
      )

      wrapper.should.have.className('foo')
      wrapper.should.have.className('bar')
    })

    it('adds classes when ENTERED', () => {
      wrapperMount(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )

      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })

    it('adds classes when ENTERING', () => {
      wrapperMount(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.should.have.className('animating')
      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })

    it('adds classes when EXITED', () => {
      wrapperMount(
        <Transition visible={false} mountOnShow={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      wrapper.should.have.className('hidden')
      wrapper.should.have.className('transition')
    })

    it('adds classes when EXITING', () => {
      wrapperMount(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })

      wrapper.should.have.className('animating')
      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })
  })

  describe('directional', () => {
    it('adds classes when is "true"', () => {
      wrapperMount(
        <Transition directional transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.className('in')

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.should.have.className('out')
    })

    it('do not add classes when is "false"', () => {
      wrapperMount(
        <Transition directional={false} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.not.className('in')

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.should.have.not.className('out')
    })
  })

  describe('children', () => {
    it('clones element', () => {
      wrapperShallow(
        <Transition>
          <p className='foo' />
        </Transition>,
      )
      wrapper.should.have.descendants('p.foo')
    })

    it('returns null when UNMOUNTED', () => {
      wrapperShallow(
        <Transition mountOnShow={false} unmountOnHide={false} visible={false}>
          <p className='foo bar' />
        </Transition>,
      )
      wrapper.should.be.blank()
    })
  })

  describe('constructor', () => {
    it('has default statuses', () => {
      wrapperMount(
        <Transition>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERED)
      wrapper.find('p').should.not.have.data('test-next-status')
    })

    it('sets statuses when `visible` is false', () => {
      wrapperMount(
        <Transition visible={false}>
          <p />
        </Transition>,
      )

      wrapper.should.have.not.descendants('p')
    })

    it('sets statuses when mount is disabled', () => {
      wrapperMount(
        <Transition visible={false} mountOnShow={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITED)
      wrapper.find('p').should.not.have.data('test-next-status')
    })
  })

  describe('duration', () => {
    it('does not apply to style when ENTERED', () => {
      wrapperMount(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )

      wrapper.should.not.have.style('animation-duration')
    })

    it('applies default value to style when ENTERING', () => {
      wrapperMount(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.style('animation-duration', '500ms')
    })

    it('applies numeric value to style when ENTERING', () => {
      wrapperMount(
        <Transition duration={1000} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when ENTERING', () => {
      wrapperMount(
        <Transition duration={{ hide: 1000, show: 2000 }} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.style('animation-duration', '2000ms')
    })

    it('does not apply to style when EXITED', () => {
      wrapperMount(
        <Transition visible={false} mountOnShow={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITED)
      wrapper.should.not.have.style('animation-duration')
    })

    it('applies default value to style when EXITING', () => {
      wrapperMount(
        <Transition>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.should.have.style('animation-duration')
    })

    it('applies numeric value to style when EXITING', () => {
      wrapperShallow(
        <Transition duration={1000} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.should.have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when EXITING', () => {
      wrapperMount(
        <Transition duration={{ hide: 1000, show: 2000 }}>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.should.have.style('animation-duration', '1000ms')
    })
  })

  describe('visible', () => {
    it('updates status when set to false while ENTERING', () => {
      wrapperMount(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)
    })

    it('updates status when set to false while ENTERED', () => {
      wrapperMount(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERED)

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)
    })

    it('updates status when set to true while UNMOUNTED', () => {
      wrapperMount(
        <Transition visible={false}>
          <p />
        </Transition>,
      )
      wrapper.should.have.not.descendants('p')

      wrapper.setProps({ visible: true })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_ENTERED)
    })

    it('updates next status when set to true while performs an ENTERING transition', (done) => {
      wrapperMount(
        <Transition duration={10} transitionOnMount onHide={done}>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)
    })

    it('updates next status when set to true while performs an EXITING transition', (done) => {
      wrapperMount(
        <Transition duration={10} onShow={done} visible>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERED)

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)

      wrapper.setProps({ visible: true })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_ENTERED)
    })
  })

  describe('onComplete', () => {
    it('is called with (null, props) when transition completed', (done) => {
      const onComplete = sandbox.spy()
      const handleComplete = (...args) => {
        onComplete(...args)

        onComplete.should.have.been.calledOnce()
        onComplete.should.have.been.calledWithMatch(null, {
          duration: 0,
          status: TRANSITION_STATUS_ENTERED,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onComplete={handleComplete} transitionOnMount>
          <p />
        </Transition>,
      )
    })

    it('is called after a render with visibility changes', (done) => {
      // This test ensures that a setTimeout will not be cleared on a simple rerender
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/4059

      const onComplete = sandbox.spy()

      wrapperMount(
        <Transition duration={200} onComplete={onComplete} transitionOnMount>
          <p />
        </Transition>,
      )

      setTimeout(() => {
        wrapper.setProps({})
      }, 100)
      setTimeout(() => {
        onComplete.should.have.been.calledOnce()
        done()
      }, 250)
    })
  })

  describe('onHide', () => {
    it('is called with (null, props) when hidden', (done) => {
      const onHide = sandbox.spy()
      const handleHide = (...args) => {
        onHide(...args)

        onHide.should.have.been.calledOnce()
        onHide.should.have.been.calledWithMatch(null, {
          duration: 0,
          status: TRANSITION_STATUS_EXITED,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onHide={handleHide} transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })

    it('depends on the specified duration', (done) => {
      const onHide = sandbox.spy()
      wrapperMount(
        <Transition duration={{ hide: 200 }} onHide={onHide} transitionOnMount={false}>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)

      setTimeout(() => {
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      }, 100)
      setTimeout(() => {
        onHide.should.have.been.calledOnce()
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITED)

        done()
      }, 200)
    })

    it('will be called once even during rerender', (done) => {
      const onStart = sandbox.spy()

      wrapperMount(
        <Transition duration={200} onStart={onStart}>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)

      wrapper.setProps({})

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_EXITED)

      onStart.should.have.been.calledOnce()
      done()
    })
  })

  describe('onShow', () => {
    it('is called with (null, props) when shown', (done) => {
      const onShow = sandbox.spy()
      const handleShow = (...args) => {
        onShow(...args)

        onShow.should.have.been.calledOnce()
        onShow.should.have.been.calledWithMatch(null, {
          duration: 0,
          status: TRANSITION_STATUS_ENTERED,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onShow={handleShow} transitionOnMount>
          <p />
        </Transition>,
      )
    })

    it('depends on the specified duration', (done) => {
      const onShow = sandbox.spy()
      wrapperMount(
        <Transition duration={{ show: 200 }} onShow={onShow} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)

      setTimeout(() => {
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      }, 100)
      setTimeout(() => {
        onShow.should.have.been.calledOnce()
        wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERED)
        done()
      }, 200)
    })
  })

  describe('onStart', () => {
    it('is called with (null, props) when transition started', (done) => {
      const onStart = sandbox.spy()
      const handleStart = (...args) => {
        onStart(...args)

        onStart.should.have.been.calledOnce()
        onStart.should.have.been.calledWithMatch(null, {
          duration: 0,
          status: TRANSITION_STATUS_ENTERING,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onStart={handleStart} transitionOnMount>
          <p />
        </Transition>,
      )
    })

    it('will be called once even during rerender', (done) => {
      const onStart = sandbox.spy()

      wrapperMount(
        <Transition duration={200} onStart={onStart} transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_ENTERED)

      wrapper.setProps({})

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_ENTERED)

      onStart.should.have.been.calledOnce()
      done()
    })
  })

  describe('style', () => {
    it("passes element's style", () => {
      wrapperShallow(
        <Transition>
          <p style={{ bottom: 5, top: 10 }} />
        </Transition>,
      )

      wrapper.should.have.style('bottom', '5px')
      wrapper.should.have.style('top', '10px')
    })
  })

  describe('transitionOnMount', () => {
    it('sets statuses when is true', () => {
      wrapperShallow(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_ENTERING)
      wrapper.find('p').should.have.data('test-next-status', TRANSITION_STATUS_ENTERED)
    })
  })

  describe('unmountOnHide', () => {
    it('unmounts child when true', () => {
      wrapperMount(
        <Transition duration={0} transitionOnMount={false} unmountOnHide>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      wrapper.update()
      wrapper.should.have.not.descendants('p')
    })

    it('lefts mounted when false', () => {
      wrapperMount(
        <Transition duration={0} transitionOnMount={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      wrapper.update()
      wrapper.find('p').should.have.data('test-status', TRANSITION_STATUS_EXITED)
    })
  })
})
