import _ from 'lodash'
import React from 'react'

import Rating from 'src/modules/Rating/Rating'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Rating', () => {
  common.isConformant(Rating)
  common.hasUIClassName(Rating)

  common.propValueOnlyToClassName(Rating, 'size')
  common.propValueOnlyToClassName(Rating, 'icon')
  common.propKeyOnlyToClassName(Rating, 'disabled')

  describe('clicking on icons', () => {
    it('makes icons active up to and including the clicked icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find('.icon')

      icons.at(1).simulate('click')

      icons.at(0).should.have.className('active')
      icons.at(1).should.have.className('active')
      icons.at(2).should.not.have.className('active')
    })

    it('removes the "selected" class', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find('.icon')

      icons
        .last()
        .simulate('mouseEnter')
        .simulate('click')

      icons.every('.icon.selected')
        .should.equal(false, 'Some icon did not remove its "selected" class')

      wrapper.should.not.have.className('selected')
    })
  })

  describe('hovering on icons', () => {
    it('adds the "selected" className to the Rating', () => {
      const wrapper = shallow(<Rating maxRating={3} />)

      wrapper
        .find('.icon')
        .first()
        .simulate('mouseEnter')

      wrapper.should.have.className('selected')
    })
    it('selects icons up to and including the hovered icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find('.icon')

      icons.at(1).simulate('mouseEnter')

      icons.at(0).should.have.className('selected')
      icons.at(1).should.have.className('selected')
      icons.at(2).should.not.have.className('selected')
    })
    it('unselects icons on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find('.icon')

      icons.last().simulate('mouseEnter')
      wrapper.simulate('mouseLeave')

      icons.every('.icon.selected')
        .should.equal(false, 'Some icon did not remove its "selected" class')
    })
  })

  describe('clearable', () => {
    it('prevents clearing by default with multiple icons', () => {
      const icons = mount(<Rating defaultRating={5} maxRating={5} />)
        .find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(true, 'Some icon did not retain its "active" class')
    })
    it('allows toggling when set to "auto" with a single icon', () => {
      const icon = mount(<Rating maxRating={1} clearable='auto' />)
        .find('.icon')
        .at(0)

      icon
        .simulate('click')
        .should.have.className('active')

      icon
        .simulate('click')
        .should.not.have.className('active')
    })
    it('allows clearing when true with a single icon', () => {
      mount(<Rating defaultRating={1} maxRating={1} clearable />)
        .find('.icon')
        .at(0)
        .simulate('click')
        .should.not.have.className('active')
    })
    it('allows clearing when true with multiple icons', () => {
      const icons = mount(<Rating defaultRating={4} maxRating={5} clearable />)
        .find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(false, 'Some icon did not remove its "active" class')
    })
    it('prevents clearing when false with a single icon', () => {
      mount(<Rating defaultRating={1} maxRating={1} clearable={false} />)
        .find('.icon')
        .at(0)
        .simulate('click')
        .should.have.className('active')
    })
    it('prevents clearing when false with multiple icons', () => {
      const icons = mount(<Rating defaultRating={5} maxRating={5} clearable={false} />)
        .find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(true, 'Some icon did not retain its "active" class')
    })
  })

  describe('disabled', () => {
    it('prevents the rating from being toggled', () => {
      mount(<Rating rating={1} maxRating={1} clearable='auto' disabled />)
        .find('.icon')
        .at(0)
        .simulate('click')
        .should.have.className('active')

      mount(<Rating rating={0} maxRating={1} clearable='auto' disabled />)
        .find('.icon')
        .at(0)
        .simulate('click')
        .should.not.have.className('active')
    })
    it('prevents the rating from being cleared', () => {
      const wrapper = mount(<Rating rating={3} maxRating={3} clearable disabled />)
      const icons = wrapper.find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(true, 'Some icon lost its "active" class')
    })
    it('prevents icons from becoming selected on mouse enter', () => {
      const wrapper = mount(<Rating maxRating={3} disabled />)
      const icons = wrapper.find('.icon')

      icons.last().simulate('mouseEnter')

      icons.every('.icon.selected')
        .should.equal(false, 'Some icon became "selected"')
    })
    it('prevents icons from becoming unselected on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find('.icon')

      icons.last().simulate('mouseEnter')
      icons.every('.icon.selected')
        .should.equal(true, 'Not every icon was selected on mouseEnter')

      wrapper.setProps({ disabled: true })
      wrapper.simulate('mouseLeave')

      icons.every('.icon.selected')
        .should.equal(true, 'Some icon lost its "selected" class')
    })
    it('prevents icons from becoming active on click', () => {
      const wrapper = mount(<Rating maxRating={3} disabled />)
      const icons = wrapper.find('.icon')

      icons.last().simulate('click')

      icons.every('.icon.active')
        .should.equal(false, 'Some icon became "active"')
    })
  })

  describe('maxRating', () => {
    it('controls how many icons are displayed', () => {
      _.times(10, (i) => {
        const maxRating = i + 1
        shallow(<Rating maxRating={maxRating} />)
          .should.have.exactly(maxRating).descendants('.icon')
      })
    })
  })

  describe('onRate', () => {
    it('is called with (event, { rating, maxRating } on icon click', () => {
      const spy = sandbox.spy()
      const event = { fake: 'event data' }

      shallow(<Rating maxRating={3} onRate={spy} />)
        .find('.icon')
        .last()
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, { rating: 3, maxRating: 3 })
    })
  })

  describe('rating', () => {
    it('controls how many icons are active', () => {
      const wrapper = shallow(<Rating rating={0} maxRating={10} />)

      // rating 0
      wrapper.should.not.have.descendants('.icon.active')

      // rating 1 - 10
      _.times(10, (i) => {
        const rating = i + 1

        wrapper
          .setProps({ rating })
          .should.have.exactly(rating).descendants('.icon.active')
      })
    })
  })
})
