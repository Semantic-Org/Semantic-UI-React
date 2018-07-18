import React from 'react'

import { SUI } from 'src/lib'
import Transition from 'src/modules/Transition/Transition'
import TransitionGroup from 'src/modules/Transition/TransitionGroup'
import * as common from 'test/specs/commonTests'

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
        wrapperShallow(
          <Transition animation={animation} transitionOnMount={false}>
            <p />
          </Transition>,
        )

        wrapper.setState({ status: Transition.ENTERING })
        expect(wrapper).have.className(animation)
        expect(wrapper).have.className('in')

        wrapper.setState({ status: Transition.EXITING })
        expect(wrapper).have.className(animation)
        expect(wrapper).have.className('out')
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
        expect(wrapper).have.className(animation)
        expect(wrapper).not.have.className('in')

        wrapper.setState({ status: Transition.EXITING })
        expect(wrapper).have.className(animation)
        expect(wrapper).not.have.className('out')
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

      expect(wrapper).have.className('foo')
      expect(wrapper).have.className('bar')
    })

    it('adds classes when ENTERED', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )

      expect(wrapper).have.className('visible')
      expect(wrapper).have.className('transition')
    })

    it('adds classes when ENTERING', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setState({ animating: true, status: Transition.ENTERING })

      expect(wrapper).have.className('animating')
      expect(wrapper).have.className('visible')
      expect(wrapper).have.className('transition')
    })

    it('adds classes when EXITED', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )
      wrapper.setState({ status: Transition.EXITED })

      expect(wrapper).have.className('hidden')
      expect(wrapper).have.className('transition')
    })

    it('adds classes when EXITING', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setState({ animating: true, status: Transition.EXITING })

      expect(wrapper).have.className('animating')
      expect(wrapper).have.className('visible')
      expect(wrapper).have.className('transition')
    })
  })

  describe('children', () => {
    it('clones element', () => {
      expect(
        wrapperShallow(
          <Transition>
            <p className='foo' />
          </Transition>,
        ),
      ).have.descendants('p.foo')
    })

    it('returns null when UNMOUNTED', () => {
      wrapperShallow(
        <Transition>
          <p className='foo bar' />
        </Transition>,
      )

      wrapper.setState({ status: Transition.UNMOUNTED })
      expect(wrapper).be.blank()
    })
  })

  describe('constructor', () => {
    it('has default statuses', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )

      expect(wrapper).have.state('status', Transition.ENTERED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: undefined })
    })

    it('sets statuses when `visible` is false', () => {
      wrapperShallow(
        <Transition visible={false}>
          <p />
        </Transition>,
      )

      expect(wrapper).have.state('status', Transition.UNMOUNTED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: undefined })
    })

    it('sets statuses when mount is disabled', () => {
      wrapperShallow(
        <Transition visible={false} mountOnShow={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      expect(wrapper).have.state('status', Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: undefined })
    })
  })

  describe('duration', () => {
    it('does not apply to style when ENTERED', () => {
      expect(
        wrapperShallow(
          <Transition transitionOnMount={false}>
            <p />
          </Transition>,
        ),
      ).not.have.style('animation-duration')
    })

    it('applies default value to style when ENTERING', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )

      wrapper.setState({ status: Transition.ENTERING })
      expect(wrapper).have.style('animation-duration', '500ms')
    })

    it('applies numeric value to style when ENTERING', () => {
      wrapperShallow(
        <Transition duration={1000}>
          <p />
        </Transition>,
      )

      wrapper.setState({ status: Transition.ENTERING })
      expect(wrapper).have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when ENTERING', () => {
      wrapperShallow(
        <Transition duration={{ hide: 1000, show: 2000 }}>
          <p />
        </Transition>,
      )

      wrapper.setState({ status: Transition.ENTERING })
      expect(wrapper).have.style('animation-duration', '2000ms')
    })

    it('does not apply to style when EXITED', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )

      wrapper.setState({ status: Transition.EXITED })
      expect(wrapper).not.have.style('animation-duration')
    })

    it('applies default value to style when EXITING', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )

      wrapper.setState({ animating: true, status: Transition.EXITING })
      expect(wrapper).have.style('animation-duration')
    })

    it('applies numeric value to style when EXITING', () => {
      wrapperShallow(
        <Transition duration={1000}>
          <p />
        </Transition>,
      )
      wrapper.setState({ status: Transition.ENTERING })

      expect(wrapper).have.style('animation-duration', '1000ms')
    })

    it('applies object value to style when EXITING', () => {
      wrapperShallow(
        <Transition duration={{ hide: 1000, show: 2000 }}>
          <p />
        </Transition>,
      )

      wrapper.setState({ status: Transition.EXITING })
      expect(wrapper).have.style('animation-duration', '1000ms')
    })
  })

  describe('visible', () => {
    it('updates status when set to false while ENTERING', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setState({ status: Transition.ENTERING })
      wrapper.setProps({ visible: false })

      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.EXITING })
    })

    it('updates status when set to false while ENTERED', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      expect(wrapper).have.state('status', Transition.ENTERED)

      wrapper.setProps({ visible: false })
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.EXITING })
    })

    it('updates status when set to true while UNMOUNTED', () => {
      wrapperShallow(
        <Transition visible={false}>
          <p />
        </Transition>,
      )
      expect(wrapper).have.state('status', Transition.UNMOUNTED)

      wrapper.instance().mounted = true
      wrapper.setProps({ visible: true })
      expect(wrapper).have.state('status', Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })

    it('updates next status when set to true while performs an ENTERING transition', (done) => {
      wrapperMount(
        <Transition duration={10} transitionOnMount onHide={done}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })

      expect(wrapper).have.state('status', Transition.ENTERING)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.EXITING })
    })

    it('updates next status when set to true while performs an EXITING transition', (done) => {
      wrapperMount(
        <Transition duration={10} onShow={done}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
      wrapper.setProps({ visible: true })

      expect(wrapper).have.state('status', Transition.EXITING)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })
  })

  describe('onComplete', () => {
    it('is called with (null, props) when transition completed', (done) => {
      const onComplete = jest.fn()
      const handleComplete = (...args) => {
        onComplete(...args)

        expect(onComplete).have.been.calledOnce()
        expect(onComplete).have.been.calledWithMatch(null, {
          duration: 0,
          status: Transition.ENTERING,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onComplete={handleComplete} transitionOnMount>
          <p />
        </Transition>,
      )
    })
  })

  describe('onHide', () => {
    it('is called with (null, props) when hidden', (done) => {
      const onHide = jest.fn()
      const handleHide = (...args) => {
        onHide(...args)

        expect(onHide).have.been.calledOnce()
        expect(onHide).have.been.calledWithMatch(null, { duration: 0, status: Transition.EXITED })

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
      const onHide = jest.fn()
      wrapperMount(
        <Transition duration={{ hide: 200 }} onHide={onHide} transitionOnMount={false}>
          <p />
        </Transition>,
      )

      wrapper.setProps({ visible: false })
      expect(wrapper).have.state('status', Transition.EXITING)

      setTimeout(() => {
        expect(wrapper).have.state('status', Transition.EXITING)
      }, 100)
      setTimeout(() => {
        expect(onHide).have.been.calledOnce()
        expect(wrapper).have.state('status', Transition.EXITED)

        done()
      }, 200)
    })
  })

  describe('onShow', () => {
    it('is called with (null, props) when shown', (done) => {
      const onShow = jest.fn()
      const handleShow = (...args) => {
        onShow(...args)

        expect(onShow).have.been.calledOnce()
        expect(onShow).have.been.calledWithMatch(null, { duration: 0, status: Transition.ENTERED })

        done()
      }

      wrapperMount(
        <Transition duration={0} onShow={handleShow} transitionOnMount>
          <p />
        </Transition>,
      )
    })

    it('depends on the specified duration', (done) => {
      const onShow = jest.fn()
      wrapperMount(
        <Transition duration={{ show: 200 }} onShow={onShow} transitionOnMount>
          <p />
        </Transition>,
      )

      expect(wrapper).have.state('status', Transition.ENTERING)

      setTimeout(() => {
        expect(wrapper).have.state('status', Transition.ENTERING)
      }, 100)
      setTimeout(() => {
        expect(onShow).have.been.calledOnce()
        expect(wrapper).have.state('status', Transition.ENTERED)

        done()
      }, 200)
    })
  })

  describe('onStart', () => {
    it('is called with (null, props) when transition started', (done) => {
      const onStart = jest.fn()
      const handleStart = (...args) => {
        onStart(...args)

        expect(onStart).have.been.calledOnce()
        expect(onStart).have.been.calledWithMatch(null, {
          duration: 0,
          status: Transition.ENTERING,
        })

        done()
      }

      wrapperMount(
        <Transition duration={0} onStart={handleStart} transitionOnMount>
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

      expect(wrapper).have.style('bottom', '5px')
      expect(wrapper).have.style('top', '10px')
    })
  })

  describe('transitionOnMount', () => {
    it('sets statuses when is true', () => {
      wrapperShallow(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      expect(wrapper).have.state('status', Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })

    it('updates status after mount when is true', () => {
      expect(
        wrapperMount(
          <Transition transitionOnMount>
            <p />
          </Transition>,
        ),
      ).have.state('status', Transition.ENTERING)
    })
  })

  describe('unmountOnHide', () => {
    it('unmounts child when true', (done) => {
      const onHide = () => {
        expect(wrapper).have.state('status', Transition.UNMOUNTED)
        done()
      }

      wrapperMount(
        <Transition duration={0} onHide={onHide} transitionOnMount={false} unmountOnHide>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })

    it('lefts mounted when false', (done) => {
      const onHide = () => {
        expect(wrapper).have.state('status', Transition.EXITED)
        done()
      }

      wrapperMount(
        <Transition duration={5} onHide={onHide} transitionOnMount={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
    })
  })
})
