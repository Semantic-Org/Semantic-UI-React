import React from 'react'

import { SUI } from 'src/lib'
import Transition from 'src/modules/Transition/Transition'
import TransitionGroup from 'src/modules/Transition/TransitionGroup'
import * as common from 'test/specs/commonTests'

let attachTo
let wrapper

const wrapperMount = (node, options) => {
  attachTo = document.createElement('div')
  document.body.appendChild(attachTo)

  wrapper = mount(node, { ...options, attachTo })
  return wrapper
}
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('Transition', () => {
  common.hasSubcomponents(Transition, [TransitionGroup])
  common.hasValidTypings(Transition)

  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
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
        expect(wrapper.hasClass(animation)).toBe(true)
        expect(wrapper.hasClass('in')).toBe(true)

        wrapper.setState({ status: Transition.EXITING })
        expect(wrapper.hasClass(animation)).toBe(true)
        expect(wrapper.hasClass('out')).toBe(true)
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
        expect(wrapper.hasClass(animation)).toBe(true)
        expect(wrapper.hasClass('in')).toBe(false)

        wrapper.setState({ status: Transition.EXITING })
        expect(wrapper.hasClass(animation)).toBe(true)
        expect(wrapper.hasClass('out')).toBe(false)
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

      expect(wrapper.hasClass('foo')).toBe(true)
      expect(wrapper.hasClass('bar')).toBe(true)
    })

    it('adds classes when ENTERED', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )

      expect(wrapper.hasClass('visible')).toBe(true)
      expect(wrapper.hasClass('transition')).toBe(true)
    })

    it('adds classes when ENTERING', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setState({ animating: true, status: Transition.ENTERING })

      expect(wrapper.hasClass('animating')).toBe(true)
      expect(wrapper.hasClass('visible')).toBe(true)
      expect(wrapper.hasClass('transition')).toBe(true)
    })

    it('adds classes when EXITED', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )
      wrapper.setState({ status: Transition.EXITED })

      expect(wrapper.hasClass('hidden')).toBe(true)
      expect(wrapper.hasClass('transition')).toBe(true)
    })

    it('adds classes when EXITING', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      wrapper.setState({ animating: true, status: Transition.EXITING })

      expect(wrapper.hasClass('animating')).toBe(true)
      expect(wrapper.hasClass('visible')).toBe(true)
      expect(wrapper.hasClass('transition')).toBe(true)
    })
  })

  describe('children', () => {
    it('clones element', () => {
      expect(
        wrapperShallow(
          <Transition>
            <p className='foo' />
          </Transition>,
        ).find('p.foo'),
      ).toHaveLength(1)
    })

    it('returns null when UNMOUNTED', () => {
      wrapperShallow(
        <Transition>
          <p className='foo bar' />
        </Transition>,
      )

      wrapper.setState({ status: Transition.UNMOUNTED })
      expect(wrapper.children()).toHaveLength(0)
    })
  })

  describe('constructor', () => {
    it('has default statuses', () => {
      wrapperShallow(
        <Transition>
          <p />
        </Transition>,
      )

      expect(wrapper.state('status')).toBe(Transition.ENTERED)
      expect(wrapper.instance()).toHaveProperty('nextStatus', undefined)
    })

    it('sets statuses when `visible` is false', () => {
      wrapperShallow(
        <Transition visible={false}>
          <p />
        </Transition>,
      )

      expect(wrapper.state('status')).toBe(Transition.UNMOUNTED)
      expect(wrapper.instance()).toHaveProperty('nextStatus', undefined)
    })

    it('sets statuses when mount is disabled', () => {
      wrapperShallow(
        <Transition visible={false} mountOnShow={false} unmountOnHide={false}>
          <p />
        </Transition>,
      )

      expect(wrapper.state('status')).toBe(Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: undefined })
    })
  })

  describe('duration', () => {
    it('does not apply to style when ENTERED', () => {
      wrapperMount(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      expect(child.style.animationDuration).toBe('')
    })

    it('applies default value to style when ENTERING', () => {
      wrapperMount(
        <Transition>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.ENTERING })
      expect(child.style.animationDuration).toBe('500ms')
    })

    it('applies numeric value to style when ENTERING', () => {
      wrapperMount(
        <Transition duration={1000}>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.ENTERING })
      expect(child.style.animationDuration).toBe('1000ms')
    })

    it('applies object value to style when ENTERING', () => {
      wrapperMount(
        <Transition duration={{ hide: 1000, show: 2000 }}>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.ENTERING })
      expect(child.style.animationDuration).toBe('2000ms')
    })

    it('does not apply to style when EXITED', () => {
      wrapperMount(
        <Transition>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.EXITED })
      expect(child.style.animationDuration).toBe('')
    })

    it('applies default value to style when EXITING', () => {
      wrapperMount(
        <Transition>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ animating: true, status: Transition.EXITING })
      expect(child.style.animationDuration).toBe('500ms')
    })

    it('applies numeric value to style when EXITING', () => {
      wrapperMount(
        <Transition duration={1000}>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.ENTERING })
      expect(child.style.animationDuration).toBe('1000ms')
    })

    it('applies object value to style when EXITING', () => {
      wrapperMount(
        <Transition duration={{ hide: 1000, show: 2000 }}>
          <p />
        </Transition>,
      )
      const child = document.querySelector('p')

      wrapper.setState({ status: Transition.EXITING })
      expect(child.style.animationDuration).toBe('1000ms')
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

      expect(wrapper.instance()).toHaveProperty('nextStatus', Transition.EXITING)
    })

    it('updates status when set to false while ENTERED', () => {
      wrapperShallow(
        <Transition transitionOnMount={false}>
          <p />
        </Transition>,
      )
      expect(wrapper.state('status')).toBe(Transition.ENTERED)

      wrapper.setProps({ visible: false })
      expect(wrapper.instance()).toHaveProperty('nextStatus', Transition.EXITING)
    })

    it('updates status when set to true while UNMOUNTED', () => {
      wrapperShallow(
        <Transition visible={false}>
          <p />
        </Transition>,
      )
      expect(wrapper.state('status')).toBe(Transition.UNMOUNTED)

      wrapper.instance().mounted = true
      wrapper.setProps({ visible: true })
      expect(wrapper.state('status')).toBe(Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })

    it('updates next status when set to true while performs an ENTERING transition', (done) => {
      wrapperMount(
        <Transition duration={10} transitionOnMount onHide={done}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })

      expect(wrapper.state('status')).toBe(Transition.ENTERING)
      expect(wrapper.instance()).toHaveProperty('nextStatus', Transition.EXITING)
    })

    it('updates next status when set to true while performs an EXITING transition', (done) => {
      wrapperMount(
        <Transition duration={10} onShow={done}>
          <p />
        </Transition>,
      )
      wrapper.setProps({ visible: false })
      wrapper.setProps({ visible: true })

      expect(wrapper.state('status')).toBe(Transition.EXITING)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })
  })

  describe('onComplete', () => {
    it('is called with (null, props) when transition completed', (done) => {
      const onComplete = jest.fn()
      const handleComplete = (...args) => {
        onComplete(...args)

        expect(onComplete).toHaveBeenCalledTimes(1)
        expect(onComplete).toHaveBeenCalledWith(
          null,
          expect.objectContaining({
            duration: 0,
            status: Transition.ENTERING,
          }),
        )

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

        expect(onHide).toHaveBeenCalledTimes(1)
        expect(onHide).toHaveBeenCalledWith(
          null,
          expect.objectContaining({ duration: 0, status: Transition.EXITED }),
        )

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
      expect(wrapper.state('status')).toBe(Transition.EXITING)

      setTimeout(() => {
        expect(wrapper.state('status')).toBe(Transition.EXITING)
      }, 100)
      setTimeout(() => {
        expect(onHide).toHaveBeenCalledTimes(1)
        expect(wrapper.state('status')).toBe(Transition.EXITED)

        done()
      }, 200)
    })
  })

  describe('onShow', () => {
    it('is called with (null, props) when shown', (done) => {
      const onShow = jest.fn()
      const handleShow = (...args) => {
        onShow(...args)

        expect(onShow).toHaveBeenCalledTimes(1)
        expect(onShow).toHaveBeenCalledWith(
          null,
          expect.objectContaining({ duration: 0, status: Transition.ENTERED }),
        )

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

      expect(wrapper.state('status')).toBe(Transition.ENTERING)

      setTimeout(() => {
        expect(wrapper.state('status')).toBe(Transition.ENTERING)
      }, 100)
      setTimeout(() => {
        expect(onShow).toHaveBeenCalledTimes(1)
        expect(wrapper.state('status')).toBe(Transition.ENTERED)

        done()
      }, 200)
    })
  })

  describe('onStart', () => {
    it('is called with (null, props) when transition started', (done) => {
      const onStart = jest.fn()
      const handleStart = (...args) => {
        onStart(...args)

        expect(onStart).toHaveBeenCalledTimes(1)
        expect(onStart).toHaveBeenCalledWith(
          null,
          expect.objectContaining({
            duration: 0,
            status: Transition.ENTERING,
          }),
        )

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
      wrapperMount(
        <Transition>
          <p style={{ bottom: 5, top: 10 }} />
        </Transition>,
      )
      const child = document.querySelector('p')

      expect(child.style.bottom).toBe('5px')
      expect(child.style.top).toBe('10px')
    })
  })

  describe('transitionOnMount', () => {
    it('sets statuses when is true', () => {
      wrapperShallow(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      expect(wrapper.state('status')).toBe(Transition.EXITED)
      expect(wrapper.instance()).toMatchObject({ nextStatus: Transition.ENTERING })
    })

    it('updates status after mount when is true', () => {
      wrapperMount(
        <Transition transitionOnMount>
          <p />
        </Transition>,
      )

      expect(wrapper.state('status')).toBe(Transition.ENTERING)
    })
  })

  describe('unmountOnHide', () => {
    it('unmounts child when true', (done) => {
      const onHide = () => {
        expect(wrapper.state('status')).toBe(Transition.UNMOUNTED)
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
        expect(wrapper.state('status')).toBe(Transition.EXITED)
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
