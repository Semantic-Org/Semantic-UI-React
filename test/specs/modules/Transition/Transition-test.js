import React from 'react'

import { SUI } from 'src/lib'
import Transition from 'src/modules/Transition/Transition'
import TransitionGroup from 'src/modules/Transition/TransitionGroup'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

let wrapper

const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('Transition', () => {
  common.hasSubComponents(Transition, [TransitionGroup])
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
        wrapperShallow(
          <Transition animation={animation} transitionOnMount={false}>
            <p />
          </Transition>,
        )

        wrapper.setState({ status: Transition.ENTERING })
        wrapper.should.have.className(animation)
        wrapper.should.have.className('in')

        wrapper.setState({ status: Transition.EXITING })
        wrapper.should.have.className(animation)
        wrapper.should.have.className('out')
      })
    })

    SUI.STATIC_TRANSITIONS.forEach((animation) => {
      it(`static ${animation}`, () => {
        wrapperShallow(
          <Transition animation={animation} transitionOnMount={false}>
            <p />
          </Transition>,
        )

        wrapper.setState({ status: Transition.ENTERING })
        wrapper.should.have.className(animation)
        wrapper.should.not.have.className('in')

        wrapper.setState({ status: Transition.EXITING })
        wrapper.should.have.className(animation)
        wrapper.should.not.have.className('out')
      })
    })
  })

  describe('className', () => {
    it("passes element's className", () => {
      wrapperShallow(
        <Transition>
          <p className='foo bar' />
        </Transition>,
      )

      wrapper.should.have.className('foo')
      wrapper.should.have.className('bar')
    })

    it('adds classes when ENTERED', () => {
      wrapperShallow(<Transition transitionOnMount={false}><p /></Transition>)

      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })

    it('adds classes when ENTERING', () => {
      wrapperShallow(<Transition transitionOnMount={false}><p /></Transition>)
      wrapper.setState({ animating: true, status: Transition.ENTERING })

      wrapper.should.have.className('animating')
      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })

    it('adds classes when EXITED', () => {
      wrapperShallow(<Transition><p /></Transition>)
      wrapper.setState({ status: Transition.EXITED })

      wrapper.should.have.className('hidden')
      wrapper.should.have.className('transition')
    })

    it('adds classes when EXITING', () => {
      wrapperShallow(<Transition transitionOnMount={false}><p /></Transition>)
      wrapper.setState({ animating: true, status: Transition.EXITING })

      wrapper.should.have.className('animating')
      wrapper.should.have.className('visible')
      wrapper.should.have.className('transition')
    })
  })

  describe('children', () => {
    it('clones element', () => {
      wrapperShallow(
        <Transition>
          <p className='foo' />
        </Transition>,
      ).should.have.descendants('p.foo')
    })

    it('returns null when UNMOUNTED', () => {
      wrapperShallow(
        <Transition>
          <p className='foo bar' />
        </Transition>,
      )

      wrapper.setState({ status: Transition.UNMOUNTED })
      wrapper.should.be.blank()
    })
  })

  describe('constructor', () => {
    it('has default statuses', () => {
      wrapperShallow(<Transition><p /></Transition>)

      wrapper.should.have.state('status', Transition.ENTERED)
      wrapper.instance().should.include({ nextStatus: undefined })
    })

    it('sets statuses when `visible` is false', () => {
      wrapperShallow(<Transition visible={false}><p /></Transition>)

      wrapper.should.have.state('status', Transition.UNMOUNTED)
      wrapper.instance().should.include({ nextStatus: undefined })
    })

    it('sets statuses when mount is disabled', () => {
      wrapperShallow(
        <Transition
          visible={false}
          mountOnShow={false}
          unmountOnHide={false}
        >
          <p />
        </Transition>,
      )

      wrapper.should.have.state('status', Transition.EXITED)
      wrapper.instance().should.include({ nextStatus: undefined })
    })
  })

  describe('duration', () => {
    it('does not apply to style when ENTERED', () => {
      wrapperShallow(<Transition transitionOnMount={false}><p /></Transition>)
        .should.not.have.style('animation-duration')
    })

    it('applies default value to style when ENTERING', () => {
      wrapperShallow(<Transition><p /></Transition>)

      wrapper.setState({ status: Transition.ENTERING })
      wrapper.should.have.style('animation-duration', '500ms')
    })

    it('applies numeric value to style when ENTERING', () => {
      wrapperShallow(<Transition duration={1000}><p /></Transition>)

      wrapper.setState({ status: Transition.ENTERING })
      wrapper.should.have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when ENTERING', () => {
      wrapperShallow(<Transition duration={{ hide: 1000, show: 2000 }}><p /></Transition>)

      wrapper.setState({ status: Transition.ENTERING })
      wrapper.should.have.style('animation-duration', '2000ms')
    })

    it('does not apply to style when EXITED', () => {
      wrapperShallow(<Transition><p /></Transition>)

      wrapper.setState({ status: Transition.EXITED })
      wrapper.should.not.have.style('animation-duration')
    })

    it('applies default value to style when EXITING', () => {
      wrapperShallow(<Transition><p /></Transition>)

      wrapper.setState({ animating: true, status: Transition.EXITING })
      wrapper.should.have.style('animation-duration')
    })

    it('applies numeric value to style when EXITING', () => {
      wrapperShallow(<Transition duration={1000}><p /></Transition>)
      wrapper.setState({ status: Transition.ENTERING })

      wrapper.should.have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when EXITING', () => {
      wrapperShallow(<Transition duration={{ hide: 1000, show: 2000 }}><p /></Transition>)

      wrapper.setState({ status: Transition.EXITING })
      wrapper.should.have.style('animation-duration', '1000ms')
    })
  })

  describe('visible', () => {
    it('updates status when set to false while ENTERING', () => {
      wrapperShallow(<Transition transitionOnMount={false}><p /></Transition>)
      wrapper.setState({ status: Transition.ENTERING })
      wrapper.setProps({ visible: false })

      wrapper.instance().should.include({ nextStatus: Transition.EXITING })
    })

    it('updates status when set to false while ENTERED', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })

      wrapper.instance().should.include({ nextStatus: Transition.EXITING })
    })

    it('updates status when set to true while UNMOUNTED', () => {
      wrapperShallow(
        <Transition visible={false}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: true })

      wrapper.should.have.state('status', Transition.EXITED)
      wrapper.instance().should.include({ nextStatus: Transition.ENTERING })
    })

    it('updates next status when set to true while performs an ENTERING transition', (done) => {
      wrapperMount(
        <Transition
          duration={10}
          transitionOnMount
          onHide={done}
        >
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })

      wrapper.should.have.state('status', Transition.ENTERING)
      wrapper.instance().should.include({ nextStatus: Transition.EXITING })
    })

    it('updates next status when set to true while performs an EXITING transition', (done) => {
      wrapperMount(
        <Transition duration={10} onShow={done}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
      wrapper.setProps({ visible: true })

      wrapper.should.have.state('status', Transition.EXITING)
      wrapper.instance().should.include({ nextStatus: Transition.ENTERING })
    })
  })

  describe('onComplete', () => {
    it('is called with (null, props) when transition completed', (done) => {
      const onComplete = sandbox.spy()
      const handleComplete = (...args) => {
        onComplete(...args)

        onComplete.should.have.been.calledOnce()
        onComplete.should.have.been.calledWithMatch(null, { duration: 0, status: Transition.ENTERING })

        done()
      }

      wrapperMount(
        <Transition
          duration={0}
          onComplete={handleComplete}
          transitionOnMount
        >
          <p />
        </Transition>,
      )
    })
  })

  describe('onHide', () => {
    it('is called with (null, props) when hidden', (done) => {
      const onHide = sandbox.spy()
      const handleHide = (...args) => {
        onHide(...args)

        onHide.should.have.been.calledOnce()
        onHide.should.have.been.calledWithMatch(null, { duration: 0, status: Transition.EXITED })

        done()
      }

      wrapperMount(
        <Transition
          duration={0}
          onHide={handleHide}
          transitionOnMount={false}
        >
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })
  })

  describe('onShow', () => {
    it('is called with (null, props) when shown', (done) => {
      const onShow = sandbox.spy()
      const handleShow = (...args) => {
        onShow(...args)

        onShow.should.have.been.calledOnce()
        onShow.should.have.been.calledWithMatch(null, { duration: 0, status: Transition.ENTERED })

        done()
      }

      wrapperMount(
        <Transition
          duration={0}
          onShow={handleShow}
          transitionOnMount
        >
          <p />
        </Transition>,
      )
    })
  })

  describe('onStart', () => {
    it('is called with (null, props) when transition started', (done) => {
      const onStart = sandbox.spy()
      const handleStart = (...args) => {
        onStart(...args)

        onStart.should.have.been.calledOnce()
        onStart.should.have.been.calledWithMatch(null, { duration: 0, status: Transition.ENTERING })

        done()
      }

      wrapperMount(
        <Transition
          duration={0}
          onStart={handleStart}
          transitionOnMount
        >
          <p />
        </Transition>,
      )
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

      wrapper.should.have.state('status', Transition.EXITED)
      wrapper.instance().should.include({ nextStatus: Transition.ENTERING })
    })

    it('updates status after mount when is true', () => {
      wrapperMount(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      ).should.have.state('status', Transition.ENTERING)
    })
  })

  describe('unmountOnHide', () => {
    it('unmounts child when true', (done) => {
      const onHide = () => {
        wrapper.should.have.state('status', Transition.UNMOUNTED)
        done()
      }

      wrapperMount(
        <Transition
          duration={0}
          onHide={onHide}
          transitionOnMount={false}
          unmountOnHide
        >
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })

    it('lefts mounted when false', (done) => {
      const onHide = () => {
        wrapper.should.have.state('status', Transition.EXITED)
        done()
      }

      wrapperMount(
        <Transition
          duration={5}
          onHide={onHide}
          transitionOnMount={false}
          unmountOnHide={false}
        >
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })
  })
})
