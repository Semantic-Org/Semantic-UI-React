import _ from 'lodash'
import React from 'react'

import Visibility from 'src/behaviors/Visibility'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

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

  domEvent.scroll(window)
}

const expectations = [{
  name: 'topPassed',
  callbackName: 'onTopPassed',
  reversible: true,
  truthy: [[-1, 100], [-100, -1]],
  falsy: [[0, 100], [window.innerHeight + 100, window.innerHeight + 300]],
}, {
  name: 'bottomPassed',
  callbackName: 'onBottomPassed',
  reversible: true,
  truthy: [[-100, -1], [-100, -10]],
  falsy: [[-10, 0], [-100, window.innerHeight]],
}, {
  name: 'topVisible',
  callbackName: 'onTopVisible',
  reversible: true,
  truthy: [[0, 100], [window.innerHeight, window.innerHeight]],
  falsy: [[-1, 100], [window.innerHeight + 1, window.innerHeight + 2]],
}, {
  name: 'bottomVisible',
  callbackName: 'onBottomVisible',
  reversible: true,
  truthy: [[-100, 0], [-100, window.innerHeight]],
  falsy: [[-100, -1], [0, window.innerHeight + 1]],
}, {
  name: 'passing',
  callbackName: 'onPassing',
  reversible: true,
  truthy: [
    [-1, window.innerHeight + 1],
    [-1, window.innerHeight - 1],
    [-1, 0],
  ],
  falsy: [
    [0, window.innerHeight],
    [1, window.innerHeight + 1],
    [1, window.innerHeight - 1],
    [window.innerHeight, window.innerHeight + 1],
  ],
}, {
  name: 'onScreen',
  callbackName: 'onOnScreen',
  truthy: [
    [0, window.innerHeight],
    [-1, window.innerHeight + 1],
    [-1, window.innerHeight],
    [0, window.innerHeight + 1],
  ],
  falsy: [[-2, -1], [window.innerHeight + 1, window.innerHeight + 2]],
}, {
  name: 'offScreen',
  callbackName: 'onOffScreen',
  truthy: [[-2, -1], [window.innerHeight + 1, window.innerHeight + 2]],
  falsy: [
    [0, window.innerHeight],
    [-1, window.innerHeight + 1],
    [-1, window.innerHeight],
    [0, window.innerHeight + 1],
  ],
}, {
  name: 'fits',
  truthy: [[0, window.innerHeight]],
  falsy: [
    [-1, window.innerHeight + 1],
    [0, window.innerHeight + 1],
    [-1, window.innerHeight],
  ],
}]

describe('Visibility', () => {
  common.isConformant(Visibility)

  let requestAnimationFrame

  before(() => {
    requestAnimationFrame = window.requestAnimationFrame
    window.requestAnimationFrame = fn => fn()
  })

  after(() => {
    window.requestAnimationFrame = requestAnimationFrame
  })

  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('calculations', () => {
    _.forEach(expectations, ({ falsy, name, truthy }) => {
      it(`calculates ${name}`, () => {
        const onUpdate = sandbox.spy()
        wrapperMount(<Visibility onUpdate={onUpdate} />)

        _.forEach(truthy, ([top, bottom]) => {
          mockScroll(top, bottom)
          onUpdate.should.have.been.calledWithMatch(null, {
            calculations: {
              [name]: true,
            },
          })
        })

        _.forEach(falsy, ([top, bottom]) => {
          mockScroll(top, bottom)
          onUpdate.should.have.been.calledWithMatch(null, {
            calculations: {
              [name]: false,
            },
          })
        })
      })
    })
  })

  describe('callbacks', () => {
    _.forEach(_.filter(expectations, 'callbackName'), ({ callbackName, falsy, truthy }) => {
      it(`fires ${callbackName}`, () => {
        const callback = sandbox.spy()
        const opts = { [callbackName]: callback }
        wrapperMount(<Visibility {...opts} continuous />)

        _.forEach(falsy, ([top, bottom]) => mockScroll(top, bottom))
        callback.should.not.have.been.called()

        _.forEach(truthy, ([top, bottom]) => mockScroll(top, bottom))
        callback.should.have.callCount(truthy.length)
      })

      it(`fires ${callbackName} once`, () => {
        const callback = sandbox.spy()
        const falsyCond = _.first(falsy)
        const truthyCond = _.first(truthy)
        const opts = { [callbackName]: callback }

        wrapperMount(<Visibility {...opts} />)

        mockScroll(...truthyCond)
        mockScroll(...falsyCond)
        mockScroll(...truthyCond)
        mockScroll(...falsyCond)
        mockScroll(...truthyCond)

        callback.should.have.been.calledOnce()
      })

      it(`fires ${callbackName} when condition changes`, () => {
        const callback = sandbox.spy()
        const falsyCond = _.first(falsy)
        const truthyCond = _.first(truthy)
        const opts = { [callbackName]: callback }
        wrapperMount(<Visibility {...opts} once={false} />)

        mockScroll(...truthyCond)
        mockScroll(...falsyCond)
        mockScroll(...truthyCond)
        mockScroll(...truthyCond)

        callback.should.have.been.calledTwice()
      })
    })

    describe('reverse', () => {
      _.forEach(_.filter(expectations, 'reversible'), ({ callbackName, falsy, truthy }) => {
        it(`fires ${callbackName}Reverse once`, () => {
          const falsyCond = _.first(falsy)
          const truthyCond = _.first(truthy)

          const forward = sandbox.spy()
          const reverse = sandbox.spy()
          const opts = { [callbackName]: forward, [`${callbackName}Reverse`]: reverse }

          wrapperMount(<Visibility {...opts} />)

          mockScroll(...truthyCond)
          forward.should.have.been.calledOnce()
          reverse.should.have.not.been.called()

          mockScroll(...falsyCond)
          forward.should.have.been.calledOnce()
          reverse.should.have.been.calledOnce()
        })

        it(`fires ${callbackName}Reverse when condition changes`, () => {
          const falsyCond = _.first(falsy)
          const truthyCond = _.first(truthy)

          const forward = sandbox.spy()
          const reverse = sandbox.spy()
          const opts = { [callbackName]: forward, [`${callbackName}Reverse`]: reverse }

          wrapperMount(<Visibility {...opts} once={false} />)

          mockScroll(...truthyCond)
          forward.should.have.been.calledOnce()
          reverse.should.have.not.been.called()

          mockScroll(...falsyCond)
          forward.should.have.been.calledOnce()
          reverse.should.have.been.calledOnce()

          mockScroll(...truthyCond)
          forward.should.have.been.calledTwice()
          reverse.should.have.been.calledOnce()

          mockScroll(...falsyCond)
          forward.should.have.been.calledTwice()
          reverse.should.have.been.calledTwice()
        })
      })
    })

    describe('direction', () => {
      let pageYOffset

      beforeEach(() => {
        pageYOffset = window.pageYOffset
      })

      afterEach(() => {
        window.pageYOffset = pageYOffset
      })

      it('returns up when scrolling down', () => {
        const onUpdate = sandbox.spy()
        mount(<Visibility onUpdate={onUpdate} />)

        window.pageYOffset = 5
        domEvent.scroll(window)
        onUpdate.should.have.been.calledWithMatch(null, {
          calculations: { direction: 'down' },
        })
      })

      it('returns up when scrolling up', () => {
        window.pageYOffset = 100
        const onUpdate = sandbox.spy()
        mount(<Visibility onUpdate={onUpdate} />)

        window.pageYOffset = 50
        domEvent.scroll(window)
        onUpdate.should.have.been.calledWithMatch(null, {
          calculations: { direction: 'up' },
        })
      })
    })
  })

  describe('context', () => {
    it('should use window as default scroll context', () => {
      const onUpdate = sandbox.spy()
      mount(<Visibility onUpdate={onUpdate} />)

      domEvent.scroll(window)
      onUpdate.should.have.been.called()
    })

    it('should set a scroll context', () => {
      const div = document.createElement('div')
      const onUpdate = sandbox.spy()
      mount(<Visibility context={div} onUpdate={onUpdate} />)

      domEvent.scroll(window)
      onUpdate.should.not.have.been.called()

      domEvent.scroll(div)
      onUpdate.should.have.been.called()
    })
  })

  describe('fireOnMount', () => {
    it('fires callbacks after mount', () => {
      const onUpdate = sandbox.spy()

      mockScroll(0, 0)
      wrapperMount(<Visibility fireOnMount onUpdate={onUpdate} />)

      onUpdate.should.have.been.calledOnce()
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: { height: 0, width: 0 },
        fireOnMount: true,
      })
    })
  })

  describe('offset', () => {
    _.forEach(_.filter(expectations, 'callbackName'), ({ callbackName, falsy, name, truthy }) => {
      it(`fires ${name} when offset is number`, () => {
        const callback = sandbox.spy()
        const opts = { [callbackName]: callback }

        const offset = 10
        const falsyCond = _.map(_.first(falsy), value => value + offset)
        const truthyCond = _.map(_.first(truthy), value => value + offset)

        wrapperMount(<Visibility {...opts} offset={offset} />)
        mockScroll(...truthyCond)
        mockScroll(...falsyCond)

        callback.should.have.been.calledOnce()
      })

      it(`fires ${name} when offset is array`, () => {
        const callback = sandbox.spy()
        const opts = { [callbackName]: callback }

        const bottomOffset = 20
        const topOffset = 10
        const falsyCond = [falsy[0][0] + topOffset, falsy[0][1] + bottomOffset]
        const truthyCond = [truthy[0][0] + topOffset, truthy[0][1] + bottomOffset]

        wrapperMount(<Visibility {...opts} offset={[topOffset, bottomOffset]} />)
        mockScroll(...truthyCond)
        mockScroll(...falsyCond)

        callback.should.have.been.calledOnce()
      })
    })
  })

  describe('onPassed', () => {
    it('fires callback when pixels passed', () => {
      const onPassed = {
        20: sandbox.spy(),
        '20%': sandbox.spy(),
        50: sandbox.spy(),
        '50%': sandbox.spy(),
        100: sandbox.spy(),
        '100%': sandbox.spy(),
      }
      wrapperMount(<Visibility continuous onPassed={onPassed} />)

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

    it('fires when window resized', () => {
      const onUpdate = sandbox.spy()
      wrapperMount(<Visibility onUpdate={onUpdate} />)

      domEvent.resize(window)
      onUpdate.should.have.been.calledOnce()
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
      const onUpdate = sandbox.spy()
      wrapperMount(<Visibility onUpdate={onUpdate} />)

      mockScroll(0, 100)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          height: 100,
          width: window.innerWidth,
        },
      })

      mockScroll(50, 3000)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          height: 2950,
          width: window.innerWidth,
        },
      })
    })

    it('shows passed pixels and percentage', () => {
      const onUpdate = sandbox.spy()
      wrapperMount(<Visibility onUpdate={onUpdate} />)

      mockScroll(0, 100)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          percentagePassed: 0,
          pixelsPassed: 0,
        },
      })

      mockScroll(-1, 99)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          percentagePassed: 0.01,
          pixelsPassed: 1,
        },
      })

      mockScroll(-2, 198)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          percentagePassed: 0.01,
          pixelsPassed: 2,
        },
      })

      mockScroll(-10, 0)
      onUpdate.should.have.been.calledWithMatch(null, {
        calculations: {
          percentagePassed: 1,
          pixelsPassed: 10,
        },
      })
    })
  })
})
