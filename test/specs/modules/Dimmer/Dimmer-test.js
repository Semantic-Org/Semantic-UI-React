import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import Portal from 'src/addons/Portal/Portal'
import Dimmer from 'src/modules/Dimmer/Dimmer'
import DimmerDimmable from 'src/modules/Dimmer/DimmerDimmable'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Dimmer', () => {
  common.isConformant(Dimmer)
  common.hasSubComponents(Dimmer[DimmerDimmable])
  common.hasUIClassName(Dimmer)

  // TODO: Renders children / content
  // common.rendersChildren()

  common.propKeyOnlyToClassName(Dimmer, 'active')
  common.propKeyOnlyToClassName(Dimmer, 'inverted')

  common.implementsCreateMethod(Dimmer)

  describe('onClickOutside', () => {
    it('omitted when not defined', () => {
      const wrapper = shallow(<Dimmer>{faker.hacker.phrase()}</Dimmer>)
      const click = () => wrapper.find('div.center').simulate('click')

      expect(click).to.not.throw()
    })

    it('omitted when Dimmer has not children', () => {
      const spy = sandbox.spy()
      shallow(<Dimmer onClickOutside={spy} />)
        .simulate('click')

      spy.should.have.been.callCount(0)
    })

    it('omitted when click on children', () => {
      const spy = sandbox.spy()

      shallow(<Dimmer onClickOutside={spy}>{faker.hacker.phrase()}</Dimmer>)
        .find('div.center')
        .children().first()
        .simulate('click', { stopPropagation: _.noop })

      spy.should.have.been.callCount(0)
    })

    it('called when click on center', () => {
      const spy = sandbox.spy()
      const wrapper = shallow(<Dimmer onClickOutside={spy}>{faker.hacker.phrase()}</Dimmer>)

      wrapper.find('div.center').simulate('click')
      spy.should.have.been.calledOnce()
    })

    it('passes children onClick', () => {
      const spy = sandbox.spy()
      const wrapper = mount(
        <Dimmer onClickOutside={() => {}}>
          <div id='children' onClick={spy}>{faker.hacker.phrase()}</div>
        </Dimmer>
      )

      wrapper.find('#children')
        .simulate('click', { stopPropagation: _.noop })

      spy.should.have.been.calledOnce()
    })
  })

  describe('page', () => {
    it('renders a Portal', () => {
      shallow(<Dimmer page />)
        .type()
        .should.equal(Portal)
    })

    describe('active', () => {
      beforeEach(() => {
        document.body.classList.remove('dimmable', 'dimmed')
      })

      it('when true, Portal is opened dimmer classes are present on body', () => {
        const dimmer = mount(<Dimmer page active />)
        const classes = document.body.classList

        dimmer.find(Portal)
          .should.have.prop('open', true)

        classes.contains('dimmable').should.be.true()
        classes.contains('dimmed').should.be.true()
      })

      it('when false, Portal is closed dimmer classes are absent on body', () => {
        const dimmer = mount(<Dimmer page active={false} />)
        const classes = document.body.classList

        dimmer.find(Portal)
          .should.have.prop('open', false)

        classes.contains('dimmable').should.be.false()
        classes.contains('dimmed').should.be.false()
      })

      it('when changed to false, dimmer classes are removed from body', () => {
        const dimmer = mount(<Dimmer page active />)
        const classes = document.body.classList

        dimmer.setProps({ active: false })

        classes.contains('dimmable').should.be.false()
        classes.contains('dimmed').should.be.false()
      })
    })
  })
})
