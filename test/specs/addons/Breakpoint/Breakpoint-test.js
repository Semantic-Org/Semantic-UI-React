import _ from 'lodash'
import React from 'react'

import Responsive from 'src/addons/Responsive/Responsive'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

const { breakpoints } = Responsive.defaultProps
const requiredProps = { only: 'mobile' }

describe('Responsive', () => {
  beforeEach(() => {
    sandbox.stub(window, 'innerWidth').value(breakpoints.mobile)
  })

  common.isConformant(Responsive, { requiredProps })
  common.rendersChildren(Responsive, { requiredProps })

  describe('children', () => {
    _.each(breakpoints, (value, point) => {
      it(`renders when point "${point}" fits`, () => {
        sandbox.stub(window, 'innerWidth').value(value)

        shallow(<Responsive only={point} />)
          .should.have.tagName('div')
      })
    })

    _.each(breakpoints, (value, point) => {
      it(`return null when point "${point}" doesn't fit`, () => {
        sandbox.stub(window, 'innerWidth').value(value - 1)

        shallow(<Responsive only={point} />)
          .should.be.blank()
      })
    })

    it('renders when fits multiple breakpoints', () => {
      sandbox.stub(window, 'innerWidth').value(breakpoints.largeScreen)

      shallow(<Responsive only='large screen' />)
        .should.have.tagName('div')
      shallow(<Responsive only='large screen' />)
        .should.have.tagName('div')

      shallow(<Responsive only='computer large screen' />)
        .should.have.tagName('div')
    })

    it('renders when fits one of breakpoints', () => {
      shallow(<Responsive only='mobile' />)
        .should.have.tagName('div')
      shallow(<Responsive only='tablet' />)
        .should.be.blank()

      shallow(<Responsive only='mobile tablet' />)
        .should.have.tagName('div')
    })
  })

  describe('onUpdate', () => {
    it('listens for resize', (done) => {
      const wrapper = mount(<Responsive only='mobile' />)
      wrapper.should.have.tagName('div')

      sandbox.stub(window, 'innerWidth').value(breakpoints.tablet)
      domEvent.fire(window, 'resize')

      setTimeout(() => {
        wrapper.should.be.blank()
        done()
      }, 25)
    })

    it('is called with (e, data) when window was resized', (done) => {
      const onUpdate = sandbox.spy()
      const width = breakpoints.tablet

      mount(<Responsive only='mobile' onUpdate={onUpdate} />)
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
