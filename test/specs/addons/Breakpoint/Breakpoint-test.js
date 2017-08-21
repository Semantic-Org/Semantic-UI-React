import _ from 'lodash'
import React from 'react'

import Breakpoint from 'src/addons/Breakpoint/Breakpoint'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

const { points } = Breakpoint.defaultProps
const requiredProps = { only: 'mobile' }

describe('Breakpoint', () => {
  beforeEach(() => {
    sandbox.stub(window, 'innerWidth').value(points.mobile)
  })

  common.isConformant(Breakpoint, { requiredProps })
  common.rendersChildren(Breakpoint, { requiredProps })

  describe('children', () => {
    _.each(points, (value, point) => {
      it(`renders when point "${point}" fits`, () => {
        sandbox.stub(window, 'innerWidth').value(value)

        shallow(<Breakpoint only={point} />)
          .should.have.tagName('div')
      })
    })

    _.each(points, (value, point) => {
      it(`return null when point "${point}" doesn't fit`, () => {
        sandbox.stub(window, 'innerWidth').value(value - 1)

        shallow(<Breakpoint only={point} />)
          .should.be.blank()
      })
    })

    it('renders when fits multiple points', () => {
      sandbox.stub(window, 'innerWidth').value(points.largeScreen)

      shallow(<Breakpoint only='large screen' />)
        .should.have.tagName('div')
      shallow(<Breakpoint only='large screen' />)
        .should.have.tagName('div')

      shallow(<Breakpoint only='computer large screen' />)
        .should.have.tagName('div')
    })

    it('renders when fits one of points', () => {
      shallow(<Breakpoint only='mobile' />)
        .should.have.tagName('div')
      shallow(<Breakpoint only='tablet' />)
        .should.be.blank()

      shallow(<Breakpoint only='mobile tablet' />)
        .should.have.tagName('div')
    })
  })

  describe('onUpdate', () => {
    it('listens for resize', (done) => {
      const wrapper = mount(<Breakpoint only='mobile' />)
      wrapper.should.have.tagName('div')

      sandbox.stub(window, 'innerWidth').value(points.tablet)
      domEvent.fire(window, 'resize')

      setTimeout(() => {
        wrapper.should.be.blank()
        done()
      }, 25)
    })

    it('is called with (e, data) when window was resized', (done) => {
      const onUpdate = sandbox.spy()
      const width = points.tablet

      mount(<Breakpoint only='mobile' onUpdate={onUpdate} />)
      sandbox.stub(window, 'innerWidth').value(width)
      domEvent.fire(window, 'resize')

      setTimeout(() => {
        onUpdate.should.have.been.calledOnce()
        onUpdate.should.have.been.calledWithMatch({}, { width, only: 'mobile' })

        done()
      }, 25)
    })
  })
})
