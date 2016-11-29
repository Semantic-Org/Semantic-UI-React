import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Card from 'src/views/Card/Card'
import CardContent from 'src/views/Card/CardContent'
import CardDescription from 'src/views/Card/CardDescription'
import CardGroup from 'src/views/Card/CardGroup'
import CardHeader from 'src/views/Card/CardHeader'
import CardMeta from 'src/views/Card/CardMeta'

describe('Card', () => {
  common.isConformant(Card)
  common.hasUIClassName(Card)
  common.hasSubComponents(Card, [CardContent, CardDescription, CardGroup, CardHeader, CardMeta])
  common.propKeyOnlyToClassName(Card, 'centered')
  common.propKeyOnlyToClassName(Card, 'fluid')
  common.propKeyOnlyToClassName(Card, 'raised')
  common.rendersChildren(Card)

  it('renders a <div> by default', () => {
    shallow(<Card />).should.have.tagName('div')
  })

  describe('href', () => {
    it('renders an <a> with an href attr', () => {
      const url = faker.internet.url()
      const wrapper = shallow(<Card href={url} />)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href', url)
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Card />).simulate('click')
      expect(click).to.not.throw()
    })

    it('renders <a> instead of <div>', () => {
      const handleClick = sandbox.spy()
      const wrapper = shallow(<Card onClick={handleClick} />)

      wrapper.should.have.tagName('a')
    })

    it('is called with (event, props) on click', () => {
      const handleClick = sandbox.spy()
      const event = { fake: 'event' }
      const data = { 'data-foo': 'bar' }

      const wrapper = mount(<Card onClick={handleClick} {...data} />)

      wrapper.simulate('click', event)

      handleClick.should.have.been.calledOnce()
      // Ensure the second argument includes arbitrary props
      handleClick.should.have.been.calledWithMatch(event, data)
    })
  })

  describe('extra', () => {
    it('renders a CardContent', () => {
      const wrapper = shallow(<Card extra={faker.hacker.phrase()} />)

      wrapper.should.have.descendants('CardContent')
    })
  })
})
