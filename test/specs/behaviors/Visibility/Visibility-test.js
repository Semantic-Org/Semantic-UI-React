import React from 'react'

import Visibility from 'src/behaviors/Visibility'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

let wrapper

const wrapperMount = (node, opts) => {
  wrapper = mount(node, opts)
  return wrapper
}

const mockScroll = (top, bottom) => {
  if (wrapper) {
    wrapper.instance().ref = {
      getBoundingClientRect: () => ({
        bottom,
        top,
        height: bottom - top,
        left: 0,
        right: window.innerWidth,
        width: window.innerWidth,
      }),
    }
  }

  window.dispatchEvent(new Event('scroll'))
}

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

describe('Visibility', () => {
  common.isConformant(Visibility)

  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('calculations', () => {
    expectations.forEach((expectation) => {
      it(`calculates ${expectation.name}`, () => {
        let calculations
        const onUpdate = (e, props) => (calculations = props.calculations)
        wrapperMount(<Visibility onUpdate={onUpdate} />)

        expectation.true.forEach(([top, bottom]) => {
          mockScroll(top, bottom)
          calculations[expectation.name].should.equal(true, [top, bottom])
        })

        expectation.false.forEach(([top, bottom]) => {
          mockScroll(top, bottom)
          calculations[expectation.name].should.equal(false, [top, bottom])
        })
      })

      if (expectation.callback) {
        it(`fires ${expectation.name}`, () => {
          const callback = sandbox.spy()
          const opts = { [expectation.callback]: callback }
          wrapperMount(<Visibility {...opts} continuous />)

          expectation.false.forEach(([top, bottom]) => mockScroll(top, bottom))
          callback.should.not.have.been.called()

          expectation.true.forEach(([top, bottom]) => mockScroll(top, bottom))
          callback.should.have.callCount(expectation.true.length)
        })

        it(`fires ${expectation.name} once`, () => {
          const callback = sandbox.spy()
          const falseCond = expectation.false[0]
          const trueCond = expectation.true[0]
          const opts = { [expectation.callback]: callback }
          wrapperMount(<Visibility {...opts} />)

          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)

          callback.should.have.been.calledOnce()
        })

        it(`fires ${expectation.name} when condition changes`, () => {
          const callback = sandbox.spy()
          const falseCond = expectation.false[0]
          const trueCond = expectation.true[0]
          const opts = { [expectation.callback]: callback }
          wrapperMount(<Visibility {...opts} once={false} />)

          mockScroll(...trueCond)
          mockScroll(...falseCond)
          mockScroll(...trueCond)
          mockScroll(...trueCond)

          callback.should.have.been.calledTwice()
        })
      }
    })
  })

  describe('onPassed', () => {
    it('fires callback when pixels passed', () => {
      const onPassed = {
        20: sandbox.stub(),
        '20%': sandbox.stub(),
        50: sandbox.stub(),
        '50%': sandbox.stub(),
        100: sandbox.stub(),
        '100%': sandbox.stub(),
      }
      wrapperMount(<Visibility onPassed={onPassed} continuous />)

      mockScroll(100, 200)
      onPassed[20].should.not.have.been.called('20px')

      mockScroll(-20, 180)
      onPassed[20].should.have.been.called('20px')
      onPassed['20%'].should.not.have.been.called('20%')

      mockScroll(-40, 160)
      onPassed['20%'].should.have.been.called('20%')
      onPassed[50].should.not.have.been.called('50px')

      mockScroll(-50, 150)
      onPassed[50].should.have.been.called('50px')
      onPassed['50%'].should.not.have.been.called('50%')
      onPassed[100].should.not.have.been.called('100px')

      mockScroll(-100, 100)
      onPassed['50%'].should.have.been.called('50%')
      onPassed[100].should.have.been.called('100px')
      onPassed['100%'].should.not.have.been.called('100%')

      mockScroll(-200, 0)
      onPassed['100%'].should.have.been.called('100%')
    })
  })

  describe('onUpdate', () => {
    it('fires when scrolling', () => {
      const onUpdate = sandbox.spy()

      wrapperMount(<Visibility onUpdate={onUpdate} />)
      mockScroll(0, 0)
      mockScroll(0, 0)

      onUpdate.should.have.been.calledTwice()
    })

    it('passes calculations to onUpdate', () => {
      let calculations
      const onUpdate = (e, props) => (calculations = props.calculations)

      wrapperMount(<Visibility onUpdate={onUpdate} />)
      mockScroll(0, 0)

      calculations.should.contain.all.keys([
        'bottomPassed',
        'bottomVisible',
        'fits',
        'height',
        'offScreen',
        'onScreen',
        'passing',
        'percentagePassed',
        'pixelsPassed',
        'topPassed',
        'topVisible',
        'width',
      ])
    })

    it('updates width and height after scroll', () => {
      let calculations
      const onUpdate = (e, props) => (calculations = props.calculations)
      wrapperMount(<Visibility onUpdate={onUpdate} />)

      mockScroll(0, 100)
      calculations.height.should.equal(100)
      calculations.width.should.equal(window.innerWidth)

      mockScroll(50, 3000)
      calculations.height.should.equal(2950)
      calculations.width.should.equal(window.innerWidth)
    })

    it('shows passed pixels and percentage', () => {
      let calculations
      const onUpdate = (e, props) => (calculations = props.calculations)
      wrapperMount(<Visibility onUpdate={onUpdate} />)

      mockScroll(0, 100)
      calculations.percentagePassed.should.equal(0)
      calculations.pixelsPassed.should.equal(0)

      mockScroll(-1, 99)
      calculations.percentagePassed.should.equal(0.01)
      calculations.pixelsPassed.should.equal(1)

      mockScroll(-2, 198)
      calculations.percentagePassed.should.equal(0.01)
      calculations.pixelsPassed.should.equal(2)

      mockScroll(-10, 0)
      calculations.percentagePassed.should.equal(1)
      calculations.pixelsPassed.should.equal(10)
    })
  })
})
