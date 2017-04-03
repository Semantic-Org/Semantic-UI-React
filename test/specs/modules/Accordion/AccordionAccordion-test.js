import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import AccordionAccordion from 'src/modules/Accordion/AccordionAccordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { consoleUtil, sandbox } from 'test/utils'

describe('AccordionAccordion', () => {
  common.isConformant(AccordionAccordion)
  common.rendersChildren(AccordionAccordion)

  common.implementsCreateMethod(AccordionAccordion)

  // describe('activeIndex', () => {
  //   it('defaults to -1', () => {
  //     shallow(<Accordion />)
  //       .should.have.state('activeIndex', -1)
  //   })
  //   it('can be overridden with "active" on Title/Content', () => {
  //     const wrapper = mount(
  //       <Accordion activeIndex={0}>
  //         <Accordion.Title active={false} />
  //         <Accordion.Content active={false} />
  //         <Accordion.Title active />
  //         <Accordion.Content active />
  //       </Accordion>
  //     )
  //     const titles = wrapper.find('AccordionTitle')
  //     const contents = wrapper.find('AccordionContent')
  //
  //     titles.at(0).should.not.have.className('active')
  //     contents.at(0).should.not.have.className('active')
  //
  //     titles.at(1).should.have.className('active')
  //     contents.at(1).should.have.className('active')
  //   })
  //   it('makes Accordion.Content at activeIndex - 1 "active"', () => {
  //     const contents = shallow(
  //       <Accordion activeIndex={0}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //       .find('AccordionContent')
  //
  //     contents.at(0).should.have.prop('active', true)
  //     contents.at(1).should.have.prop('active', false)
  //   })
  //   it('is toggled to -1 when clicking Title a second time', () => {
  //     const wrapper = mount(
  //       <Accordion>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //
  //     // open panel (activeIndex 0)
  //     wrapper
  //       .find('AccordionTitle')
  //       .simulate('click')
  //       .should.have.className('active')
  //     wrapper
  //       .should.have.state('activeIndex', 0)
  //
  //     // close panel (activeIndex -1)
  //     wrapper
  //       .find('AccordionTitle')
  //       .simulate('click')
  //       .should.not.have.className('active')
  //     wrapper
  //       .should.have.state('activeIndex', -1)
  //   })
  //   it('sets the correct pair of title/content active', () => {
  //     const wrapper = shallow(
  //       <Accordion>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //     wrapper.setProps({ activeIndex: 0 })
  //     wrapper.childAt(0).should.have.prop('active', true)
  //     wrapper.childAt(1).should.have.prop('active', true)
  //
  //     wrapper.setProps({ activeIndex: 1 })
  //     wrapper.childAt(2).should.have.prop('active', true)
  //     wrapper.childAt(3).should.have.prop('active', true)
  //
  //     wrapper.setProps({ activeIndex: 2 })
  //     wrapper.childAt(4).should.have.prop('active', true)
  //     wrapper.childAt(5).should.have.prop('active', true)
  //   })
  //
  //   it('can be an array', () => {
  //     const wrapper = shallow(
  //       <Accordion exclusive={false}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //     wrapper.setProps({ activeIndex: [0, 1] })
  //     wrapper.childAt(0).should.have.prop('active', true)
  //     wrapper.childAt(1).should.have.prop('active', true)
  //     wrapper.childAt(2).should.have.prop('active', true)
  //     wrapper.childAt(3).should.have.prop('active', true)
  //
  //     wrapper.setProps({ activeIndex: [1, 2] })
  //     wrapper.childAt(2).should.have.prop('active', true)
  //     wrapper.childAt(3).should.have.prop('active', true)
  //     wrapper.childAt(4).should.have.prop('active', true)
  //     wrapper.childAt(5).should.have.prop('active', true)
  //   })
  //
  //   it('can be inclusive and makes Accordion.Content at activeIndex - 1 "active"', () => {
  //     const contents = shallow(
  //       <Accordion exclusive={false} defaultActiveIndex={[0]}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //       .find('AccordionTitle')
  //
  //     contents.at(0).should.have.prop('active', true)
  //     contents.at(1).should.have.prop('active', false)
  //   })
  //
  //   it('can be inclusive and allows multiple open', () => {
  //     const contents = shallow(
  //       <Accordion exclusive={false} defaultActiveIndex={[0, 1]}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //       .find('AccordionTitle')
  //
  //     contents.at(0).should.have.prop('active', true)
  //     contents.at(1).should.have.prop('active', true)
  //   })
  //
  //   it('can be inclusive and can open multiple panels by clicking', () => {
  //     const wrapper = mount(
  //       <Accordion exclusive={false}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //     const titles = wrapper.find('AccordionTitle')
  //     const contents = wrapper.find('AccordionContent')
  //
  //     titles
  //       .at(0)
  //       .simulate('click')
  //       .should.have.prop('active', true)
  //     titles
  //       .at(1)
  //       .simulate('click')
  //       .should.have.prop('active', true)
  //     contents.at(0).should.have.prop('active', true)
  //     contents.at(1).should.have.prop('active', true)
  //   })
  //
  //   it('can be inclusive and close multiple panels by clicking', () => {
  //     const wrapper = mount(
  //       <Accordion exclusive={false} defaultActiveIndex={[0, 1]}>
  //         <Accordion.Title />
  //         <Accordion.Content />
  //         <Accordion.Title />
  //         <Accordion.Content />
  //       </Accordion>
  //     )
  //     const titles = wrapper.find('AccordionTitle')
  //     const contents = wrapper.find('AccordionContent')
  //
  //     titles
  //       .at(0)
  //       .simulate('click')
  //       .should.have.prop('active', false)
  //     titles
  //       .at(1)
  //       .simulate('click')
  //       .should.have.prop('active', false)
  //     contents.at(0).should.have.prop('active', false)
  //     contents.at(1).should.have.prop('active', false)
  //   })
  // })
  //
  // describe('defaultActiveIndex', () => {
  //   it('sets the initial activeIndex state', () => {
  //     shallow(<Accordion defaultActiveIndex={123} />)
  //       .should.have.state('activeIndex', 123)
  //   })
  // })
  //

  describe('onTitleClick', () => {
    const event = { target: null }

    const onClick = sandbox.spy()
    const onTitleClick = sandbox.spy()
    const panels = [
      { key: 1, title: { content: 'A', onClick } },
      { key: 2, title: 'B' },
    ]

    it('can be omitted', () => {
      const click = () => mount(<AccordionAccordion panels={panels} />).find(AccordionTitle).at(1).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, titleProps) when clicked', () => {
      mount(<AccordionAccordion panels={panels} onTitleClick={onTitleClick} />)
        .find(AccordionTitle)
        .at(0)
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { index: 0, content: 'A' })

      onTitleClick.should.have.been.calledOnce()
      onTitleClick.should.have.been.calledWithMatch(event, { index: 0, content: 'A' })
    })
  })

  describe('panels', () => {
    const event = { target: null }
    const spy = sandbox.spy()

    const panels = [
      { key: 1, title: { content: 'A', onClick: spy }, content: { content: 'Content A', 'data-foo': 'something' } },
      { key: 2, title: 'B', content: { content: 'Content B', 'data-foo': 'something' } },
    ]
    const children = mount(<AccordionAccordion panels={panels} />)

    it('renders children', () => {
      const titles = children.find(AccordionTitle)
      const contents = children.find(AccordionContent)

      titles.at(0).should.have.prop('content', 'A')
      contents.at(0).should.have.prop('content', 'Content A')

      titles.at(1).should.have.prop('content', 'B')
      contents.at(1).should.have.prop('content', 'Content B')
    })

    it('onClick can omitted', () => {
      const click = () => children.find(AccordionTitle).at(1).simulate('click')
      expect(click).to.not.throw()
    })

    it('passes onClick handler', () => {
      children.find(AccordionTitle).at(0).simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, { content: 'A', index: 0 })
    })

    it('passes arbitrary props', () => {
      children.find(AccordionContent).everyWhere(item => item.should.have.prop('data-foo', 'something'))
    })
  })
})
