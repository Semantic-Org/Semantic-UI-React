import React from 'react'

import Responsive from 'src/addons/Responsive/Responsive'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

describe('Responsive', () => {
  common.isConformant(Responsive)
  common.rendersChildren(Responsive)

  describe('children', () => {
    it('renders by default', () => {
      shallow(<Responsive />)
        .should.be.present()
    })
  })

  describe('maxWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.maxWidth)
      shallow(<Responsive {...Responsive.onlyMobile} />)
        .should.be.present()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      shallow(<Responsive {...Responsive.onlyMobile} />)
        .should.be.blank()
    })
  })

  describe('minWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      shallow(<Responsive {...Responsive.onlyMobile} />)
        .should.be.present()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      shallow(<Responsive {...Responsive.onlyMobile} />)
        .should.be.blank()
    })
  })

  describe('onUpdate', () => {
    it('listens for resize', (done) => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      wrapper.should.be.present()

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        wrapper.should.be.blank()
        done()
      })
    })

    it('is called with (e, data) when window was resized', (done) => {
      const onUpdate = sandbox.spy()
      const width = Responsive.onlyTablet.minWidth
      mount(<Responsive {...Responsive.onlyMobile} onUpdate={onUpdate} />)

      sandbox.stub(window, 'innerWidth').value(width)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        onUpdate.should.have.been.calledOnce()
        onUpdate.should.have.been.calledWithMatch({}, { ...Responsive.onlyMobile, width })

        done()
      })
    })
  })
})
