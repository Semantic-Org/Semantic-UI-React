import React from 'react'

import AccordionAccordion from 'src/modules/Accordion/AccordionAccordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { consoleUtil, sandbox } from 'test/utils'

describe('AccordionAccordion', () => {
  common.isConformant(AccordionAccordion)
  common.rendersChildren(AccordionAccordion, {
    rendersContent: false,
  })

  common.implementsCreateMethod(AccordionAccordion)

  describe('activeIndex', () => {
    const panels = [
      { key: 'A', title: 'A', content: 'Something A' },
      { key: 'B', title: 'B', content: 'Something B' },
      { key: 'C', title: 'C', content: 'Something C' },
    ]

    it('defaults to -1', () => {
      shallow(<AccordionAccordion />).should.have.state('activeIndex', -1)
    })

    it('defaults to -1 when "exclusive" is false', () => {
      shallow(<AccordionAccordion exclusive={false} />)
        .should.have.state('activeIndex')
        .that.is.empty()
    })

    it('makes Accordion.Content at activeIndex - 0 "active"', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', false)
      wrapper.childAt(2).should.have.prop('active', false)
    })

    it('is toggled to -1 when clicking Title a second time', () => {
      const wrapper = mount(<AccordionAccordion panels={panels} />)

      wrapper.find(AccordionTitle).at(0).simulate('click')
      wrapper.should.have.state('activeIndex', 0)

      wrapper.find(AccordionTitle).at(0).simulate('click')
      wrapper.should.have.state('activeIndex', -1)
    })

    it('sets the correct panel active', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', false)
      wrapper.childAt(2).should.have.prop('active', false)

      wrapper.setProps({ activeIndex: 1 })
      wrapper.childAt(0).should.have.prop('active', false)
      wrapper.childAt(1).should.have.prop('active', true)
      wrapper.childAt(2).should.have.prop('active', false)
    })

    it('can be an array', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )
      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', true)
      wrapper.childAt(2).should.have.prop('active', false)

      wrapper.setProps({ activeIndex: [1, 2] })
      wrapper.childAt(0).should.have.prop('active', false)
      wrapper.childAt(1).should.have.prop('active', true)
      wrapper.childAt(2).should.have.prop('active', true)
    })

    it('can be inclusive and makes Accordion.Content at activeIndex - 1 "active"', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0]} exclusive={false} panels={panels} />,
      )

      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', false)
      wrapper.childAt(2).should.have.prop('active', false)
    })

    it('can be inclusive and allows multiple open', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', true)
      wrapper.childAt(2).should.have.prop('active', false)
    })

    it('can be inclusive and can open multiple panels by clicking', () => {
      const wrapper = mount(<AccordionAccordion exclusive={false} panels={panels} />)

      wrapper.find(AccordionTitle).at(0).simulate('click')
      wrapper.should.have.state('activeIndex').that.includes(0)

      wrapper.find(AccordionTitle).at(1).simulate('click')
      wrapper.should.have.state('activeIndex').that.includes(0, 1)
    })

    it('can be inclusive and close multiple panels by clicking', () => {
      const wrapper = mount(
        <AccordionAccordion defaultActiveIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      wrapper.find(AccordionTitle).at(0).simulate('click')
      wrapper.should.have.state('activeIndex').that.includes(1)

      wrapper.find(AccordionTitle).at(1).simulate('click')
      wrapper.should.have.state('activeIndex').that.is.empty()
    })

    it('warns if is `exclusive` and is given an array', () => {
      consoleUtil.disableOnce()

      const consoleError = sandbox.spy(console, 'error')
      mount(<AccordionAccordion exclusive activeIndex={[1]} />)

      consoleError.should.have.been.calledOnce()
    })

    it('warns if not `exclusive` and is given a number', () => {
      consoleUtil.disableOnce()

      const consoleError = sandbox.spy(console, 'error')
      mount(<AccordionAccordion exclusive={false} activeIndex={1} />)

      consoleError.should.have.been.calledOnce()
    })
  })

  describe('defaultActiveIndex', () => {
    it('sets the initial activeIndex state', () => {
      shallow(<AccordionAccordion defaultActiveIndex={123} />).should.have.state('activeIndex', 123)
    })
  })

  describe('onTitleClick', () => {
    const event = { target: null }
    const onClick = sandbox.spy()
    const onTitleClick = sandbox.spy()
    const panels = [
      { key: 'A', title: { content: 'A', onClick } },
      { key: 'B', title: 'B' },
    ]

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
    const onClick = sandbox.spy()

    const panels = [
      {
        key: 'A',
        title: { content: 'A', onClick },
        content: { content: 'Content A', 'data-foo': 'something' },
      },
      { key: 'B', title: 'B', content: { content: 'Content B', 'data-foo': 'something' } },
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

    it('passes onClick handler', () => {
      children.find(AccordionTitle).at(0).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { content: 'A', index: 0 })
    })

    it('passes arbitrary props', () => {
      children
        .find(AccordionContent)
        .everyWhere((item) => item.should.have.prop('data-foo', 'something'))
    })
  })
})
