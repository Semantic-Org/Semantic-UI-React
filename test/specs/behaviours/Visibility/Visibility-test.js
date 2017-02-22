import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { sandbox } from 'test/utils'
import Visibility from 'src/behaviours/Visibility'
import * as common from 'test/specs/commonTests'

const mockScroll = (top, bottom) => {
  if (ReactDOM.findDOMNode.restore) {
    ReactDOM.findDOMNode.restore()
  }

  sandbox.stub(ReactDOM, 'findDOMNode').returns({
    getBoundingClientRect: () => ({
      top,
      bottom,
      left: 0,
      right: window.innerWidth,
      width: window.innerWidth,
      height: bottom - top,
    }),
  })

  window.dispatchEvent(new Event('scroll'))
}

describe('Visibility', () => {
  common.isConformant(Visibility)

  it('fires onUpdate when scrolling', () => {
    const onUpdate = sandbox.spy()
    const wrapper = mount(<Visibility onUpdate={onUpdate} />)
    mockScroll(0, 0)
    mockScroll(0, 0)
    onUpdate.should.have.been.calledTwice()
    wrapper.unmount()
  })

  it('passes calculations to onUpdate', () => {
    let calculations
    const onUpdate = c => (calculations = c)
    const wrapper = mount(<Visibility onUpdate={onUpdate} />)
    mockScroll(0, 0)
    calculations.should.contain.all.keys([
      'height',
      'width',
      'topPassed',
      'bottomPassed',
      'pixelsPassed',
      'percentagePassed',
      'topVisible',
      'bottomVisible',
      'fits',
      'passing',
      'onScreen',
      'offScreen',
    ])
    wrapper.unmount()
  })

  it('updates width and height', () => {
    let calculations
    const onUpdate = c => (calculations = c)
    const wrapper = mount(<Visibility onUpdate={onUpdate} />)

    mockScroll(0, 100)
    calculations.height.should.equal(100)
    calculations.width.should.equal(window.innerWidth)

    mockScroll(50, 3000)
    calculations.height.should.equal(2950)
    calculations.width.should.equal(window.innerWidth)
    wrapper.unmount()
  })

  it('fires when topVisible', () => {
    let calculations
    const onUpdate = c => (calculations = c)
    const onTopVisible = sandbox.spy()
    const wrapper = mount(<Visibility onUpdate={onUpdate} onTopVisible={onTopVisible} />)

    mockScroll(window.innerHeight + 100, window.innerHeight + 500)
    calculations.topVisible.should.equal(false)
    onTopVisible.should.not.have.been.called()

    mockScroll(window.innerHeight, window.innerHeight + 500)
    calculations.topVisible.should.equal(true)
    onTopVisible.should.have.been.calledOnce()

    mockScroll(-100, window.innerHeight + 500)
    calculations.topVisible.should.equal(false)
    onTopVisible.should.have.been.calledOnce()
    wrapper.unmount()
  })

  describe('calculations', () => {
    // Test cases are the same for each calculation
    const expectations = [{
      name: 'topPassed',
      callback: 'onTopPassed',
      true: [[-1, 100], [-100, -1]],
      false: [[0, 100], [window.innerHeight + 100, window.innerHeight + 300]],
    }, {
      name: 'bottomPassed',
      callback: 'onBottomPassed',
      true: [[-100, -1], [-100, -10]],
      false: [[-10, 0], [-100, window.innerHeight]],
    }, {
      name: 'topVisible',
      callback: 'onTopVisible',
      true: [[0, 100], [window.innerHeight, window.innerHeight]],
      false: [[-1, 100], [window.innerHeight + 1, window.innerHeight + 2]],
    }, {
      name: 'bottomVisible',
      callback: 'onBottomVisible',
      true: [[-100, 0], [-100, window.innerHeight]],
      false: [[-100, -1], [0, window.innerHeight + 1]],
    }, {
      name: 'passing',
      callback: 'onPassing',
      true: [
        [-1, window.innerHeight + 1],
        [-1, window.innerHeight - 1],
        [-1, 0],
      ],
      false: [
        [0, window.innerHeight],
        [1, window.innerHeight + 1],
        [1, window.innerHeight - 1],
        [window.innerHeight, window.innerHeight + 1],
      ],
    }, {
      name: 'onScreen',
      callback: 'onOnScreen',
      true: [
        [0, window.innerHeight],
        [-1, window.innerHeight + 1],
        [-1, window.innerHeight],
        [0, window.innerHeight + 1],
      ],
      false: [[-2, -1], [window.innerHeight + 1, window.innerHeight + 2]],
    }, {
      name: 'offScreen',
      callback: 'onOffScreen',
      true: [[-2, -1], [window.innerHeight + 1, window.innerHeight + 2]],
      false: [
        [0, window.innerHeight],
        [-1, window.innerHeight + 1],
        [-1, window.innerHeight],
        [0, window.innerHeight + 1],
      ],
    }, {
      name: 'fits',
      true: [[0, window.innerHeight]],
      false: [
        [-1, window.innerHeight + 1],
        [0, window.innerHeight + 1],
        [-1, window.innerHeight],
      ],
    }]

    expectations.forEach(expectation => {
      it(`calculates ${expectation.name}`, () => {
        let calculations
        const onUpdate = c => (calculations = c)
        const wrapper = mount(<Visibility onUpdate={onUpdate} />)

        expectation.true.forEach(([top, bottom]) => {
          mockScroll(top, bottom)
          expect(calculations[expectation.name]).to.equal(true, [top, bottom])
        })

        expectation.false.forEach(([top, bottom]) => {
          mockScroll(top, bottom)
          expect(calculations[expectation.name]).to.equal(false, [top, bottom])
        })

        wrapper.unmount()
      })

      if (expectation.callback) {
        it(`fires ${expectation.name}`, () => {
          const callback = sandbox.spy()
          const opts = { [expectation.callback]: callback }
          const wrapper = mount(<Visibility {...opts} continuous />)

          expectation.false.forEach(([top, bottom]) => {
            mockScroll(top, bottom)
          })
          callback.should.not.have.been.called()

          expectation.true.forEach(([top, bottom]) => {
            mockScroll(top, bottom)
          })
          callback.should.have.callCount(expectation.true.length)

          wrapper.unmount()
        })

        it(`fires ${expectation.name} once`, () => {
          const callback = sandbox.spy()
          const opts = { [expectation.callback]: callback }
          const wrapper = mount(<Visibility {...opts} />)
          const trueCond = expectation.true[0]
          const falseCond = expectation.false[0]

          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)
          callback.should.have.been.calledOnce()

          wrapper.unmount()
        })

        it(`fires ${expectation.name} when condition changes`, () => {
          const callback = sandbox.spy()
          const opts = { [expectation.callback]: callback }
          const wrapper = mount(<Visibility {...opts} once={false} />)
          const trueCond = expectation.true[0]
          const falseCond = expectation.false[0]

          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)
          mockScroll(...trueCond)
          callback.should.have.been.calledTwice()

          wrapper.unmount()
        })
      }
    })
  })
})
