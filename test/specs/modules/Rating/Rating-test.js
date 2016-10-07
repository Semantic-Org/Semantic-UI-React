import _ from 'lodash'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Rating from 'src/modules/Rating/Rating'
import RatingIcon from 'src/modules/Rating/RatingIcon'

describe('Rating', () => {
  common.isConformant(Rating)
  common.hasUIClassName(Rating)

  common.propKeyOnlyToClassName(Rating, 'disabled')

  common.propValueOnlyToClassName(Rating, 'size')
  common.propValueOnlyToClassName(Rating, 'icon')

  describe('clicking on icons', () => {
    it('makes icons active up to and including the clicked icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find(RatingIcon)

      icons.at(1).simulate('click')

      icons.at(0).should.have.prop('active', true)
      icons.at(1).should.have.prop('active', true)
      icons.at(2).should.have.prop('active', false)
    })

    it('removes the "selected" prop', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find(RatingIcon)

      icons
        .last()
        .simulate('mouseEnter')
        .simulate('click')

      wrapper.should.not.have.className('selected')

      _.times(3, (i) => {
        icons.at(i).should.have.prop('selected', false)
      })
    })
  })

  describe('hovering on icons', () => {
    it('adds the "selected" className to the Rating', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find(RatingIcon)
        .first()
        .simulate('mouseEnter')

      wrapper.should.have.className('selected')
    })

    it('selects icons up to and including the hovered icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find(RatingIcon)

      icons.at(1).simulate('mouseEnter')

      icons.at(0).should.have.prop('selected', true)
      icons.at(1).should.have.prop('selected', true)
      icons.at(2).should.have.prop('selected', false)
    })

    it('unselects icons on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)
      const icons = wrapper.find(RatingIcon)

      icons.last().simulate('mouseEnter')
      wrapper.simulate('mouseLeave')

      _.times(3, (i) => {
        icons.at(i).should.have.prop('selected', false)
      })
    })
  })

  describe('clearable', () => {
    // TODO: Update test to use RatingIcon

    it('prevents clearing by default with multiple icons', () => {
      const icons = mount(<Rating defaultRating={5} maxRating={5} />)
        .find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(true, 'Some icon did not retain its "active" class')
    })

    it('allows toggling when set to "auto" with a single icon', () => {
      const icon = mount(<Rating maxRating={1} clearable='auto' />)
        .find(RatingIcon)
        .at(0)

      icon
        .simulate('click')
        .should.have.prop('active', true)

      icon
        .simulate('click')
        .should.have.prop('active', false)
    })

    it('allows clearing when true with a single icon', () => {
      mount(<Rating defaultRating={1} maxRating={1} clearable />)
        .find(RatingIcon)
        .at(0)
        .simulate('click')
        .should.have.prop('active', false)
    })

    // TODO: Update test to use RatingIcon

    it('allows clearing when true with multiple icons', () => {
      const icons = mount(<Rating defaultRating={4} maxRating={5} clearable />)
        .find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(false, 'Some icon did not remove its "active" class')
    })

    it('prevents clearing when false with a single icon', () => {
      mount(<Rating defaultRating={1} maxRating={1} clearable={false} />)
        .find(RatingIcon)
        .at(0)
        .simulate('click')
        .should.have.prop('active', true)
    })

    // TODO: Update test to use RatingIcon

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
        .find(RatingIcon)
        .at(0)
        .simulate('click')
        .should.have.prop('active', true)

      mount(<Rating rating={0} maxRating={1} clearable='auto' disabled />)
        .find(RatingIcon)
        .at(0)
        .simulate('click')
        .should.have.prop('active', false)
    })

    // TODO: Update test to use RatingIcon

    it('prevents the rating from being cleared', () => {
      const wrapper = mount(<Rating rating={3} maxRating={3} clearable disabled />)
      const icons = wrapper.find('.icon')

      icons.find('.active').last().simulate('click')

      icons.every('.icon.active')
        .should.equal(true, 'Some icon lost its "active" class')
    })

    // TODO: Update test to use RatingIcon

    it('prevents icons from becoming selected on mouse enter', () => {
      const wrapper = mount(<Rating maxRating={3} disabled />)
      const icons = wrapper.find('.icon')

      icons.last().simulate('mouseEnter')

      icons.every('.icon.selected')
        .should.equal(false, 'Some icon became "selected"')
    })

    // TODO: Update test to use RatingIcon

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
      const icons = wrapper.find(RatingIcon)

      icons.last().simulate('click')

      _.times(3, (i) => {
        icons.at(i).should.have.prop('active', false)
      })
    })
  })

  describe('maxRating', () => {
    it('controls how many icons are displayed', () => {
      _.times(10, (i) => {
        const maxRating = i + 1
        shallow(<Rating maxRating={maxRating} />)
          .should.have.exactly(maxRating).descendants(RatingIcon)
      })
    })
  })

  describe('onRate', () => {
    it('is called with (event, { rating, maxRating } on icon click', () => {
      const spy = sandbox.spy()
      const event = { fake: 'event data' }

      mount(<Rating maxRating={3} onRate={spy} />)
        .find(RatingIcon)
        .last()
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, { rating: 3, maxRating: 3 })
    })
  })

  describe('rating', () => {
    // TODO: Update test to use RatingIcon

    it('controls how many icons are active', () => {
      const wrapper = shallow(<Rating rating={0} maxRating={10} />)

      // rating 0
      wrapper.should.not.have.descendants('.icon.active')

      // rating 1 - 10
      // _.times(10, (i) => {
      //   const rating = i + 1
      //
      //   wrapper
      //     .setProps({ rating })
      //     .should.have.exactly(rating).descendants('.icon.active')
      // })
    })
  })
})
