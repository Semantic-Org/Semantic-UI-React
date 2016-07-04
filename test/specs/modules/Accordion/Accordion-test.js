import faker from 'faker'
import React from 'react'

import Accordion from 'src/modules/Accordion/Accordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('Accordion', () => {
  common.isConformant(Accordion)
  common.hasUIClassName(Accordion)
  common.rendersChildren(Accordion)
  common.hasSubComponents(Accordion, [AccordionContent, AccordionTitle])
  common.propKeyOnlyToClassName(Accordion, 'fluid')
  common.propKeyOnlyToClassName(Accordion, 'inverted')
  common.propKeyOnlyToClassName(Accordion, 'styled')

  describe('activeIndex', () => {
    it('can be overridden with "active" on Title/Content', () => {
      const wrapper = mount(
        <Accordion activeIndex={0}>
          <Accordion.Title active={false} />
          <Accordion.Content active={false} />
          <Accordion.Title active />
          <Accordion.Content active />
        </Accordion>
      )
      const titles = wrapper.find('AccordionTitle')
      const contents = wrapper.find('AccordionContent')

      titles.at(0).should.not.have.className('active')
      contents.at(0).should.not.have.className('active')

      titles.at(1).should.have.className('active')
      contents.at(1).should.have.className('active')
    })
    it('Accordion.Content is active at activeIndex - 1', () => {
      const contents = shallow(
        <Accordion activeIndex={0}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
        .find('AccordionContent')

      contents.at(0).should.have.prop('active', true)
      contents.at(1).should.have.prop('active', false)
    })
    it('is toggled to -1 when clicking Title a second time', () => {
      const wrapper = mount(
        <Accordion>
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )

      // open panel (activeIndex 0)
      wrapper
        .find('AccordionTitle')
        .simulate('click')
        .should.have.className('active')
      wrapper
        .should.have.state('activeIndex', 0)

      // close panel (activeIndex -1)
      wrapper
        .find('AccordionTitle')
        .simulate('click')
        .should.not.have.className('active')
      wrapper
        .should.have.state('activeIndex', -1)
    })
  })

  describe('onTitleClick', () => {
    it('is called with (event, index)', () => {
      const spy = sandbox.spy()
      const titles = mount(
        <Accordion onTitleClick={spy}>
          <Accordion.Title />
          <Accordion.Title />
        </Accordion>
      )
        .find('AccordionTitle')

      titles.at(0).simulate('click')
      spy.should.have.been.calledWithMatch({}, 0)

      titles.at(1).simulate('click')
      spy.should.have.been.calledWithMatch({}, 1)
    })
  })

  describe('panels', () => {
    it('does not render children', () => {
      shallow(
        <Accordion panels={[]}>
          <div id='do-not-find-me' />
        </Accordion>
      )
        .should.not.have.descendants('#do-not-find-me')
    })

    it('adds text and content sibling children', () => {
      const panels = [{
        text: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }]
      const wrapper = mount(<Accordion panels={panels} />)

      wrapper
        .childAt(0)
        .should.have.className('title')
        .and.contain.text(panels[0].title)

      wrapper
        .childAt(1)
        .should.have.className('content')
        .and.contain.text(panels[0].content)
    })

    it('allows setting the active prop', () => {
      const panels = [{
        active: true,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }, {
        active: false,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }]
      const wrapper = shallow(<Accordion panels={panels} />)

      // first panel (active)

      wrapper
        .find('AccordionTitle')
        .at(0)
        .should.have.prop('active', true)

      wrapper
        .find('AccordionContent')
        .at(0)
        .should.have.prop('active', true)

      // second panel (not active)

      wrapper
        .find('AccordionTitle')
        .at(1)
        .should.have.prop('active', false)

      wrapper
        .find('AccordionContent')
        .at(1)
        .should.have.prop('active', false)
    })

    describe('onClick', () => {
      it('is can be omitted', () => {
        const panels = [{
          text: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
        }]
        const wrapper = mount(<Accordion panels={panels} />)
        const click = () => wrapper.find('AccordionTitle').simulate('click')

        expect(click).to.not.throw()
      })

      it('is called with (event, index) on AccordionTitle click', () => {
        const spy = sandbox.spy()
        const panels = [{
          onClick: spy,
          title: 'First panel',
          content: 'First panel content',
        }, {
          onClick: spy,
          title: 'Second panel',
          content: 'second panel content',
        }]
        const titles = mount(<Accordion panels={panels} />)
          .find('AccordionTitle')

        titles.at(0).simulate('click')
        spy.should.have.been.calledWithMatch({}, 0)

        titles.at(1).simulate('click')
        spy.should.have.been.calledWithMatch({}, 1)
      })
    })
  })
})
