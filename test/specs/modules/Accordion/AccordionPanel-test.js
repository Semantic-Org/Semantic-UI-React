import React from 'react'

import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionPanel from 'src/modules/Accordion/AccordionPanel'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('AccordionPanel', () => {
  common.isConformant(AccordionPanel, { rendersChildren: false })

  // TODO: Reenable tests in future
  // https://github.com/airbnb/enzyme/issues/1553
  //
  common.implementsShorthandProp(AccordionPanel, {
    assertExactMatch: false,
    autoGenerateKey: false,
    parentIsFragment: true,
    propKey: 'content',
    ShorthandComponent: AccordionContent,
    mapValueToProps: content => ({ content }),
  })
  common.implementsShorthandProp(AccordionPanel, {
    assertExactMatch: false,
    autoGenerateKey: false,
    parentIsFragment: true,
    propKey: 'title',
    ShorthandComponent: AccordionTitle,
    mapValueToProps: content => ({ content }),
  })

  describe('active', () => {
    it('should be passed to children', () => {
      const wrapper = shallow(<AccordionPanel active content='Content' title='Title' />)

      wrapper.at(0).should.have.prop('active', true)
      wrapper.at(1).should.have.prop('active', true)
    })
  })

  describe('index', () => {
    it('should be passed to title', () => {
      const wrapper = shallow(<AccordionPanel content='Content' index={5} title='Title' />)

      wrapper.at(0).should.have.prop('index', 5)
      wrapper.at(1).should.not.have.prop('index')
    })
  })

  describe('renderActiveOnly', () => {
    it('should be passed to content', () => {
      const wrapper = shallow(
        <AccordionPanel content='Content' index={5} title='Title' renderActiveOnly={false} />,
      )

      wrapper.at(0).should.not.have.prop('renderActiveOnly')
      wrapper.at(1).should.have.prop('renderActiveOnly', false)
    })
  })

  describe('onTitleClick', () => {
    it('is called with (e, titleProps) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()
      const onTitleClick = sandbox.spy()

      mount(
        <AccordionPanel
          content='Content'
          onTitleClick={onTitleClick}
          title={{ content: 'Title', onClick }}
        />,
      )
        .find(AccordionTitle)
        .at(0)
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { content: 'Title' })

      onTitleClick.should.have.been.calledOnce()
      onTitleClick.should.have.been.calledWithMatch(event, { content: 'Title' })
    })
  })
})
