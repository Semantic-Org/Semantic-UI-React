import React from 'react'

import Button from 'src/elements/Button/Button'
import ButtonContent from 'src/elements/Button/ButtonContent'
import ButtonGroup from 'src/elements/Button/ButtonGroup'
import ButtonOr from 'src/elements/Button/ButtonOr'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const syntheticEvent = { preventDefault: () => undefined }

describe('Button', () => {
  common.isConformant(Button)
  common.hasUIClassName(Button)
  common.hasSubComponents(Button, [ButtonContent, ButtonGroup, ButtonOr])
  common.implementsCreateMethod(Button)
  common.implementsIconProp(Button)
  common.implementsLabelProp(Button, {
    shorthandDefaultProps: {
      basic: true,
      pointing: 'left',
    },
  })

  common.propKeyOnlyToClassName(Button, 'active')
  common.propKeyOrValueAndKeyToClassName(Button, 'animated')
  common.propKeyOrValueAndKeyToClassName(Button, 'attached')
  common.propKeyOnlyToClassName(Button, 'basic')
  common.propKeyOnlyToClassName(Button, 'circular')
  common.propValueOnlyToClassName(Button, 'color')
  common.propKeyOnlyToClassName(Button, 'compact')
  common.propKeyOnlyToClassName(Button, 'disabled')
  common.propKeyAndValueToClassName(Button, 'floated')
  common.propKeyOnlyToClassName(Button, 'fluid')
  common.propKeyOnlyToClassName(Button, 'inverted')
  common.propKeyOrValueAndKeyToClassName(Button, 'labelPosition', {
    className: 'labeled',
  })
  common.propKeyOnlyToClassName(Button, 'loading')
  common.propKeyOnlyToClassName(Button, 'primary')
  common.propKeyOnlyToClassName(Button, 'negative')
  common.propKeyOnlyToClassName(Button, 'positive')
  common.propKeyOnlyToClassName(Button, 'secondary')
  common.propValueOnlyToClassName(Button, 'size')

  common.rendersChildren(Button)

  it('renders a button by default', () => {
    shallow(<Button />)
      .first()
      .should.have.tagName('button')
  })

  it('adds tabIndex=0 when tag type is div', () => {
    shallow(<Button as='div' />)
      .should.have.prop('tabIndex', 0)
  })

  describe('onClick', () => {
    it('is called when clicked', () => {
      const handleClick = sandbox.spy()

      shallow(<Button type='submit' data-foo='bar' onClick={handleClick} />)
        .simulate('click', syntheticEvent)

      handleClick.should.have.been.calledOnce()
      handleClick.should.have.been.calledWith(
        sandbox.match.any,
        // Ensure the second argument includes arbitrary props
        sandbox.match({ 'data-foo': 'bar' })
      )
    })

    it('is not called when button is disabled', () => {
      const handleClick = sandbox.spy()

      shallow(<Button type='submit' disabled onClick={handleClick} />)
        .simulate('click', syntheticEvent)

      handleClick.should.not.have.been.calledOnce()
    })
  })

  describe('attached', () => {
    it('renders a div', () => {
      shallow(<Button attached />)
        .should.have.tagName('div')
    })
  })

  describe('icon', () => {
    it('adds className icon', () => {
      shallow(<Button icon='user' />)
        .should.have.className('icon')
    })
    it('does not add className icon when there is content', () => {
      shallow(<Button icon='user' content='Yo' />)
        .should.not.have.className('icon')
    })
    it('adds className icon given labelPosition and content', () => {
      shallow(<Button labelPosition='left' icon='user' content='My Account' />)
        .should.have.className('icon')
      shallow(<Button labelPosition='right' icon='user' content='My Account' />)
        .should.have.className('icon')
    })
  })

  describe('label', () => {
    it('renders as a div', () => {
      shallow(<Button label='http' />)
        .should.have.tagName('div')
    })
    it('renders a div with a button and Label child', () => {
      const wrapper = shallow(<Button label='hi' />)

      wrapper.should.have.tagName('div')
      wrapper.should.have.exactly(1).descendants('button')
      wrapper.should.have.exactly(1).descendants('Label')
    })
    it('adds the labeled className to the root element', () => {
      shallow(<Button label='hi' />)
        .should.have.className('labeled')
    })
    it('creates a basic pointing label', () => {
      shallow(<Button label='foo' />)
        .should.have.exactly(1).descendants('Label[basic][pointing]')
    })
    it('is before the button and pointing="right" when labelPosition="left"', () => {
      const wrapper = shallow(<Button labelPosition='left' label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="right"]')

      wrapper.children().at(0).shallow().should.match('.ui.label')
      wrapper.children().at(1).should.match('button')
    })
    it('is after the button and pointing="left" when labelPosition="right"', () => {
      const wrapper = shallow(<Button labelPosition='right' label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.children().at(0).should.match('button')
      wrapper.children().at(1).shallow().should.match('.ui.label')
    })
    it('is after the button and pointing="left" by default', () => {
      const wrapper = shallow(<Button label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.children().at(0).should.match('button')
      wrapper.children().at(1).shallow().should.match('.ui.label')
    })
  })

  describe('labelPosition', () => {
    it('renders as a button when given an icon', () => {
      shallow(<Button labelPosition='left' icon='user' />)
        .should.have.tagName('button')
      shallow(<Button labelPosition='right' icon='user' />)
        .should.have.tagName('button')
    })
  })
})
