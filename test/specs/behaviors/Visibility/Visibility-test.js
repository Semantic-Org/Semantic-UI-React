import React from 'react'
import { mount } from 'enzyme'
import { sandbox } from 'test/utils'
import Visibility from 'src/behaviors/Visibility'
import * as common from 'test/specs/commonTests'

const mockScroll = (top, bottom) => {
  window.dispatchEvent(new Event('scroll'))
}

describe('Visibility', () => {
  common.isConformant(Visibility)

  it('fires onUpdate when scrolling', () => {
    const onUpdate = sandbox.spy()
    const wrapper = mount(<Visibility onUpdate={onUpdate} />)
    wrapper.instance().ref = {
      getBoundingClientRect: () => ({
        top: 0,
        bottom: 0,
        left: 0,
        right: window.innerWidth,
        width: window.innerWidth,
        height: 0,
      }),
    }
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

  it('shows passed pixels and percentage', () => {
    let calculations
    const onUpdate = c => (calculations = c)
    const wrapper = mount(<Visibility onUpdate={onUpdate} />)

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

    wrapper.unmount()
  })

  it('fires callback when pixels passed', () => {
    const onPassed = {
      20: sandbox.stub(),
      '20%': sandbox.stub(),
      50: sandbox.stub(),
      '50%': sandbox.stub(),
      100: sandbox.stub(),
      '100%': sandbox.stub(),
    }
    const wrapper = mount(<Visibility onPassed={onPassed} continuous />)

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
