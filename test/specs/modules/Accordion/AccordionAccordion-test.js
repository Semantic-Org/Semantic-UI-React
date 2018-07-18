import React from 'react'

import AccordionAccordion from 'src/modules/Accordion/AccordionAccordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'

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
      expect(shallow(<AccordionAccordion />)).have.state('activeIndex', -1)
    })

    it('defaults to -1 when "exclusive" is false', () => {
      expect(shallow(<AccordionAccordion exclusive={false} />)).toHaveLength(0)
    })

    it('makes Accordion.Content at activeIndex - 0 "active"', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      expect(wrapper.childAt(0)).have.prop('active', true)
      expect(wrapper.childAt(1)).have.prop('active', false)
      expect(wrapper.childAt(2)).have.prop('active', false)
    })

    it('is toggled to -1 when clicking Title a second time', () => {
      const wrapper = mount(<AccordionAccordion panels={panels} />)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper).have.state('activeIndex', 0)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper).have.state('activeIndex', -1)
    })

    it('sets the correct panel active', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      expect(wrapper.childAt(0)).have.prop('active', true)
      expect(wrapper.childAt(1)).have.prop('active', false)
      expect(wrapper.childAt(2)).have.prop('active', false)

      wrapper.setProps({ activeIndex: 1 })
      expect(wrapper.childAt(0)).have.prop('active', false)
      expect(wrapper.childAt(1)).have.prop('active', true)
      expect(wrapper.childAt(2)).have.prop('active', false)
    })

    it('can be an array', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )
      expect(wrapper.childAt(0)).have.prop('active', true)
      expect(wrapper.childAt(1)).have.prop('active', true)
      expect(wrapper.childAt(2)).have.prop('active', false)

      wrapper.setProps({ activeIndex: [1, 2] })
      expect(wrapper.childAt(0)).have.prop('active', false)
      expect(wrapper.childAt(1)).have.prop('active', true)
      expect(wrapper.childAt(2)).have.prop('active', true)
    })

    it('can be inclusive and makes Accordion.Content at activeIndex - 1 "active"', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0]} exclusive={false} panels={panels} />,
      )

      expect(wrapper.childAt(0)).have.prop('active', true)
      expect(wrapper.childAt(1)).have.prop('active', false)
      expect(wrapper.childAt(2)).have.prop('active', false)
    })

    it('can be inclusive and allows multiple open', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      expect(wrapper.childAt(0)).have.prop('active', true)
      expect(wrapper.childAt(1)).have.prop('active', true)
      expect(wrapper.childAt(2)).have.prop('active', false)
    })

    it('can be inclusive and can open multiple panels by clicking', () => {
      const wrapper = mount(<AccordionAccordion exclusive={false} panels={panels} />)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper)
        .have.state('activeIndex')
        .that.includes(0)

      wrapper
        .find(AccordionTitle)
        .at(1)
        .simulate('click')
      expect(wrapper)
        .have.state('activeIndex')
        .that.includes(0, 1)
    })

    it('can be inclusive and close multiple panels by clicking', () => {
      const wrapper = mount(
        <AccordionAccordion defaultActiveIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper)
        .have.state('activeIndex')
        .that.includes(1)

      wrapper
        .find(AccordionTitle)
        .at(1)
        .simulate('click')
      expect(Object.keys(wrapper)).toHaveLength(0)
    })
  })

  describe('defaultActiveIndex', () => {
    it('sets the initial activeIndex state', () => {
      expect(shallow(<AccordionAccordion defaultActiveIndex={123} />)).have.state(
        'activeIndex',
        123,
      )
    })
  })

  describe('onTitleClick', () => {
    const event = { target: null }
    const onClick = jest.fn()
    const onTitleClick = jest.fn()
    const panels = [{ key: 'A', title: { content: 'A', onClick } }, { key: 'B', title: 'B' }]

    it('is called with (e, titleProps) when clicked', () => {
      mount(<AccordionAccordion panels={panels} onTitleClick={onTitleClick} />)
        .find(AccordionTitle)
        .at(0)
        .simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, { index: 0, content: 'A' })

      expect(onTitleClick).have.been.calledOnce()
      expect(onTitleClick).have.been.calledWithMatch(event, { index: 0, content: 'A' })
    })
  })

  describe('panels', () => {
    const event = { target: null }
    const onClick = jest.fn()

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

      expect(titles.at(0)).have.prop('content', 'A')
      expect(contents.at(0)).have.prop('content', 'Content A')

      expect(titles.at(1)).have.prop('content', 'B')
      expect(contents.at(1)).have.prop('content', 'Content B')
    })

    it('passes onClick handler', () => {
      children
        .find(AccordionTitle)
        .at(0)
        .simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, { content: 'A', index: 0 })
    })

    it('passes arbitrary props', () => {
      children
        .find(AccordionContent)
        .everyWhere(item => expect(item).have.prop('data-foo', 'something'))
    })
  })
})
