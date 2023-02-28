import React from 'react'

import AccordionAccordion from 'src/modules/Accordion/AccordionAccordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { consoleUtil, sandbox } from 'test/utils'

describe('AccordionAccordion', () => {
  common.isConformant(AccordionAccordion)
  common.forwardsRef(AccordionAccordion)
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

    it('there is no active items by default', () => {
      mount(<AccordionAccordion />).should.not.have.descendants('.active')
    })

    it('there is no active items by default when "exclusive" is false', () => {
      mount(<AccordionAccordion exclusive={false} />).should.not.have.descendants('.active')
    })

    it('activates an item', () => {
      const wrapper = mount(<AccordionAccordion activeIndex={0} panels={panels} />)

      wrapper.find('.title').at(0).should.have.className('active')
      wrapper.find('.title').at(1).should.not.have.className('active')
      wrapper.find('.title').at(2).should.not.have.className('active')
    })

    it('items can be toggled by a click', () => {
      const wrapper = mount(<AccordionAccordion panels={panels} />)

      wrapper.find('.title').at(0).simulate('click')
      wrapper.find('.title').at(0).should.have.className('active')

      wrapper.find('.title').at(0).simulate('click')
      wrapper.find('.title').at(0).should.not.have.className('active')
    })

    it('activates a proper item', () => {
      const wrapper = mount(<AccordionAccordion activeIndex={0} panels={panels} />)

      wrapper.setProps({ activeIndex: 1 })
      wrapper.find('.title').at(0).should.not.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')
      wrapper.find('.title').at(2).should.not.have.className('active')
    })

    it('can activate a single item when "exclusive" is false', () => {
      const wrapper = mount(
        <AccordionAccordion activeIndex={[0]} exclusive={false} panels={panels} />,
      )

      wrapper.find('.title').at(0).should.have.className('active')
      wrapper.find('.title').at(1).should.not.have.className('active')
      wrapper.find('.title').at(2).should.not.have.className('active')
    })

    it('can activate multiple items when "exclusive" is false', () => {
      const wrapper = mount(
        <AccordionAccordion activeIndex={[0, 1]} exclusive={false} panels={panels} />,
      )
      wrapper.find('.title').at(0).should.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')
      wrapper.find('.title').at(2).should.not.have.className('active')

      wrapper.setProps({ activeIndex: [1, 2] })
      wrapper.find('.title').at(0).should.not.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')
      wrapper.find('.title').at(2).should.have.className('active')
    })

    it('can be inclusive and can open multiple panels by clicking', () => {
      const wrapper = mount(<AccordionAccordion exclusive={false} panels={panels} />)

      wrapper.find('.title').at(0).simulate('click')
      wrapper.find('.title').at(0).should.have.className('active')

      wrapper.find('.title').at(1).simulate('click')
      wrapper.find('.title').at(0).should.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')
    })

    it('can be inclusive and close multiple panels by clicking', () => {
      const wrapper = mount(
        <AccordionAccordion defaultActiveIndex={[0, 1]} exclusive={false} panels={panels} />,
      )

      wrapper.find('.title').at(0).simulate('click')
      wrapper.find('.title').at(0).should.not.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')

      wrapper.find('.title').at(1).simulate('click')
      wrapper.find('.title').at(0).should.not.have.className('active')
      wrapper.find('.title').at(1).should.not.have.className('active')
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
      const wrapper = mount(
        <AccordionAccordion
          defaultActiveIndex={1}
          panels={[
            { key: 'A', title: 'A', content: 'Something A' },
            { key: 'B', title: 'B', content: 'Something B' },
          ]}
        />,
      )

      wrapper.find('.title').at(0).should.not.have.className('active')
      wrapper.find('.title').at(1).should.have.className('active')
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
      const wrapper = mount(<AccordionAccordion panels={panels} onTitleClick={onTitleClick} />)

      wrapper.find('.title').at(0).simulate('click', event)
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
