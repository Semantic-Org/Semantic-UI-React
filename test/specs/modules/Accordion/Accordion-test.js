import faker from 'faker'
import React from 'react'

import Accordion from 'src/modules/Accordion/Accordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { consoleUtil, sandbox } from 'test/utils'

describe('Accordion', () => {
  common.isConformant(Accordion)
  common.hasUIClassName(Accordion)
  common.rendersChildren(Accordion)
  common.hasSubComponents(Accordion, [AccordionContent, AccordionTitle])
  common.propKeyOnlyToClassName(Accordion, 'fluid')
  common.propKeyOnlyToClassName(Accordion, 'inverted')
  common.propKeyOnlyToClassName(Accordion, 'styled')

  describe('activeIndex', () => {
    it('defaults to -1', () => {
      shallow(<Accordion />)
        .should.have.state('activeIndex', -1)
    })
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
    it('makes Accordion.Content at activeIndex - 1 "active"', () => {
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
    it('sets the correct pair of title/content active', () => {
      const wrapper = shallow(
        <Accordion>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
      wrapper.setProps({ activeIndex: 0 })
      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', true)

      wrapper.setProps({ activeIndex: 1 })
      wrapper.childAt(2).should.have.prop('active', true)
      wrapper.childAt(3).should.have.prop('active', true)

      wrapper.setProps({ activeIndex: 2 })
      wrapper.childAt(4).should.have.prop('active', true)
      wrapper.childAt(5).should.have.prop('active', true)
    })

    it('can be an array', () => {
      const wrapper = shallow(
        <Accordion exclusive={false}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
      wrapper.setProps({ activeIndex: [0, 1] })
      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', true)
      wrapper.childAt(2).should.have.prop('active', true)
      wrapper.childAt(3).should.have.prop('active', true)

      wrapper.setProps({ activeIndex: [1, 2] })
      wrapper.childAt(2).should.have.prop('active', true)
      wrapper.childAt(3).should.have.prop('active', true)
      wrapper.childAt(4).should.have.prop('active', true)
      wrapper.childAt(5).should.have.prop('active', true)
    })

    it('can be inclusive and makes Accordion.Content at activeIndex - 1 "active"', () => {
      const contents = shallow(
        <Accordion exclusive={false} defaultActiveIndex={[0]}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
        .find('AccordionTitle')

      contents.at(0).should.have.prop('active', true)
      contents.at(1).should.have.prop('active', false)
    })

    it('can be inclusive and allows multiple open', () => {
      const contents = shallow(
        <Accordion exclusive={false} defaultActiveIndex={[0, 1]}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
        .find('AccordionTitle')

      contents.at(0).should.have.prop('active', true)
      contents.at(1).should.have.prop('active', true)
    })

    it('can be inclusive and can open multiple panels by clicking', () => {
      const wrapper = mount(
        <Accordion exclusive={false}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
      const titles = wrapper.find('AccordionTitle')
      const contents = wrapper.find('AccordionContent')

      titles
        .at(0)
        .simulate('click')
        .should.have.prop('active', true)
      titles
        .at(1)
        .simulate('click')
        .should.have.prop('active', true)
      contents.at(0).should.have.prop('active', true)
      contents.at(1).should.have.prop('active', true)
    })

    it('can be inclusive and close multiple panels by clicking', () => {
      const wrapper = mount(
        <Accordion exclusive={false} defaultActiveIndex={[0, 1]}>
          <Accordion.Title />
          <Accordion.Content />
          <Accordion.Title />
          <Accordion.Content />
        </Accordion>
      )
      const titles = wrapper.find('AccordionTitle')
      const contents = wrapper.find('AccordionContent')

      titles
        .at(0)
        .simulate('click')
        .should.have.prop('active', false)
      titles
        .at(1)
        .simulate('click')
        .should.have.prop('active', false)
      contents.at(0).should.have.prop('active', false)
      contents.at(1).should.have.prop('active', false)
    })
  })

  describe('defaultActiveIndex', () => {
    it('sets the initial activeIndex state', () => {
      shallow(<Accordion defaultActiveIndex={123} />)
        .should.have.state('activeIndex', 123)
    })
  })

  describe('onTitleClick', () => {
    it('is called with (event, index)', () => {
      const spy = sandbox.spy()
      const event = { foo: 'bar' }
      const titles = mount(
        <Accordion onTitleClick={spy}>
          <Accordion.Title />
          <Accordion.Title />
        </Accordion>
      )
        .find('AccordionTitle')

      titles.at(0).simulate('click', event)
      spy.should.have.been.calledWithMatch(event, 0)

      titles.at(1).simulate('click', event)
      spy.should.have.been.calledWithMatch(event, 1)
    })
  })

  describe('panels', () => {
    it('does not render children', () => {
      consoleUtil.disableOnce()
      shallow(
        <Accordion panels={[]}>
          <div id='do-not-find-me' />
        </Accordion>
      )
        .should.not.have.descendants('#do-not-find-me')
    })

    it('adds text title and text content sibling children', () => {
      const panels = [{
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }]
      const wrapper = mount(<Accordion panels={panels} />)

      wrapper
        .childAt(0)
        .should.have.className('title')
        .and.contain.text(panels[0].title)

      expect(wrapper.childAt(0).key()).to.equal(`${panels[0].title}-title`)

      wrapper
        .childAt(1)
        .should.have.className('content')
        .and.contain.text(panels[0].content)

      expect(wrapper.childAt(1).key()).to.equal(`${panels[0].title}-content`)
    })

    it('adds custom element title and custom element content sibling children', () => {
      const panels = [{
        key: 'panel-1',
        title: (<h1>Title</h1>),
        content: (<h2>Content</h2>),
      }]
      const wrapper = mount(<Accordion panels={panels} />)

      wrapper
        .childAt(0)
        .should.have.className('title')
        .and.contain(panels[0].title)

      expect(wrapper.childAt(0).key()).to.equal('panel-1-title')

      wrapper
        .childAt(1)
        .should.have.className('content')
        .and.contain(panels[0].content)

      expect(wrapper.childAt(1).key()).to.equal('panel-1-content')
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
      it('can be omitted', () => {
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
        const event = { foo: 'bar' }
        const panels = [{
          onClick: spy,
          title: 'First panel',
          content: 'First panel content',
        }, {
          onClick: spy,
          title: 'Second panel',
          content: 'second panel content',
        }, {
          onClick: spy,
          title: 'Third panel',
          content: 'third panel content',
        }]
        const titles = mount(<Accordion panels={panels} />)
          .find('AccordionTitle')

        titles.at(0).simulate('click', event)
        spy.should.have.been.calledWithMatch(event, 0)

        titles.at(1).simulate('click', event)
        spy.should.have.been.calledWithMatch(event, 1)

        titles.at(2).simulate('click', event)
        spy.should.have.been.calledWithMatch(event, 2)
      })
    })
  })
})
