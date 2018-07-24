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
      expect(shallow(<AccordionAccordion />).state('activeIndex')).toBe(-1)
    })

    it('defaults to -1 when "exclusive" is false', () => {
      expect(shallow(<AccordionAccordion exclusive={false} />).state('activeIndex')).toHaveLength(0)
    })

    it('makes Accordion.Content at activeIndex - 0 "active"', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      expect(wrapper.childAt(0).prop('active')).toBe(true)
      expect(wrapper.childAt(1).prop('active')).toBe(false)
      expect(wrapper.childAt(2).prop('active')).toBe(false)
    })

    it('is toggled to -1 when clicking Title a second time', () => {
      const wrapper = mount(<AccordionAccordion panels={panels} />)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toBe(0)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toBe(-1)
    })

    it('sets the correct panel active', () => {
      const wrapper = shallow(<AccordionAccordion activeIndex={0} panels={panels} />)

      expect(wrapper.childAt(0).prop('active')).toBe(true)
      expect(wrapper.childAt(1).prop('active')).toBe(false)
      expect(wrapper.childAt(2).prop('active')).toBe(false)

      wrapper.setProps({ activeIndex: 1 })
      expect(wrapper.childAt(0).prop('active')).toBe(false)
      expect(wrapper.childAt(1).prop('active')).toBe(true)
      expect(wrapper.childAt(2).prop('active')).toBe(false)
    })

    it('can be an array', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )
      expect(wrapper.childAt(0).prop('active')).toBe(true)
      expect(wrapper.childAt(1).prop('active')).toBe(true)
      expect(wrapper.childAt(2).prop('active')).toBe(false)

      wrapper.setProps({ activeIndex: [1, 2] })
      expect(wrapper.childAt(0).prop('active')).toBe(false)
      expect(wrapper.childAt(1).prop('active')).toBe(true)
      expect(wrapper.childAt(2).prop('active')).toBe(true)
    })

    it('can be inclusive and makes Accordion.Content at activeIndex - 1 "active"', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0]} exclusive={false} panels={panels} />,
      )

      expect(wrapper.childAt(0).prop('active')).toBe(true)
      expect(wrapper.childAt(1).prop('active')).toBe(false)
      expect(wrapper.childAt(2).prop('active')).toBe(false)
    })

    it('can be inclusive and allows multiple open', () => {
      const wrapper = shallow(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      expect(wrapper.childAt(0).prop('active')).toBe(true)
      expect(wrapper.childAt(1).prop('active')).toBe(true)
      expect(wrapper.childAt(2).prop('active')).toBe(false)
    })

    it('can be inclusive and can open multiple panels by clicking', () => {
      const wrapper = mount(<AccordionAccordion exclusive={false} panels={panels} />)

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toContain(0)

      wrapper
        .find(AccordionTitle)
        .at(1)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toContain(0, 1)
    })

    it('can be inclusive and close multiple panels by clicking', () => {
      const wrapper = mount(
        <AccordionAccordion defaultActiveIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      wrapper
        .find(AccordionTitle)
        .at(0)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toContain(1)

      wrapper
        .find(AccordionTitle)
        .at(1)
        .simulate('click')
      expect(wrapper.state('activeIndex')).toHaveLength(0)
    })
  })

  describe('defaultActiveIndex', () => {
    it('sets the initial activeIndex state', () => {
      expect(shallow(<AccordionAccordion defaultActiveIndex={123} />).state('activeIndex')).toBe(
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

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ index: 0, content: 'A' }),
      )

      expect(onTitleClick).toHaveBeenCalledTimes(1)
      expect(onTitleClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ index: 0, content: 'A' }),
      )
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

      expect(titles.at(0).prop('content')).toBe('A')
      expect(contents.at(0).prop('content')).toBe('Content A')

      expect(titles.at(1).prop('content')).toBe('B')
      expect(contents.at(1).prop('content')).toBe('Content B')
    })

    it('passes onClick handler', () => {
      children
        .find(AccordionTitle)
        .at(0)
        .simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ content: 'A', index: 0 }),
      )
    })

    it('passes arbitrary props', () => {
      children
        .find(AccordionContent)
        .everyWhere(item => expect(item.prop('data-foo')).toBe('something'))
    })
  })
})
