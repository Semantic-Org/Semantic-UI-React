import React from 'react'

import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionPanel from 'src/modules/Accordion/AccordionPanel'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('AccordionPanel', () => {
  common.isConformant(AccordionPanel, { rendersChildren: false })

  common.implementsShorthandProp(AccordionPanel, {
    assertExactMatch: false,
    autoGenerateKey: false,
    parentIsFragment: true,
    propKey: 'content',
    ShorthandComponent: AccordionContent,
    mapValueToProps: (content) => ({ content }),
  })
  common.implementsShorthandProp(AccordionPanel, {
    assertExactMatch: false,
    autoGenerateKey: false,
    parentIsFragment: true,
    propKey: 'title',
    ShorthandComponent: AccordionTitle,
    mapValueToProps: (content) => ({ content }),
  })

  describe('active', () => {
    it('should passed to children', () => {
      const wrapper = shallow(<AccordionPanel active content='Content' title='Title' />)

      wrapper.childAt(0).should.have.prop('active', true)
      wrapper.childAt(1).should.have.prop('active', true)
    })
  })

  describe('index', () => {
    it('should passed to title', () => {
      const wrapper = shallow(<AccordionPanel content='Content' index={5} title='Title' />)

      wrapper.childAt(0).should.have.prop('index', 5)
      wrapper.childAt(1).should.have.not.prop('index')
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
