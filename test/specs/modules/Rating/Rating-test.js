import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Rating from 'src/modules/Rating/Rating'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Rating', () => {
  common.isConformant(Rating)
  common.forwardsRef(Rating)
  common.hasUIClassName(Rating)

  common.propKeyOnlyToClassName(Rating, 'disabled')

  common.propValueOnlyToClassName(Rating, 'icon', ['star', 'heart'])
  common.propValueOnlyToClassName(Rating, 'size', _.without(SUI.SIZES, 'medium', 'big'))

  describe('clicking on icons', () => {
    it('makes icons active up to and including the clicked icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').at(1).simulate('click')

      const icons = wrapper.find('RatingIcon')

      icons.at(0).should.have.prop('active', true)
      icons.at(1).should.have.prop('active', true)
      icons.at(2).should.have.prop('active', false)
    })

    it('if no rating selected no icon should have aria-checked', () => {
      const icons = mount(<Rating maxRating={3} />).find('RatingIcon')

      icons.at(0).should.have.prop('aria-checked', false)
      icons.at(1).should.have.prop('aria-checked', false)
      icons.at(2).should.have.prop('aria-checked', false)
    })

    it('makes the clicked icon aria-checked', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').at(1).simulate('click')

      const icons = wrapper.find('RatingIcon')

      icons.at(0).should.have.prop('aria-checked', false)
      icons.at(1).should.have.prop('aria-checked', true)
      icons.at(2).should.have.prop('aria-checked', false)
    })

    it('set aria-setsize on each rating icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').at(1).simulate('click')

      const icons = wrapper.find('RatingIcon')

      icons.at(0).should.have.prop('aria-setsize', 3)
      icons.at(1).should.have.prop('aria-setsize', 3)
      icons.at(2).should.have.prop('aria-setsize', 3)
    })

    it('sets aria-posinset on each rating icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').at(1).simulate('click')

      const icons = wrapper.find('RatingIcon')

      icons.at(0).should.have.prop('aria-posinset', 1)
      icons.at(1).should.have.prop('aria-posinset', 2)
      icons.at(2).should.have.prop('aria-posinset', 3)
    })

    it('removes the "selected" prop', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').last().simulate('mouseEnter').simulate('click')
      wrapper.should.not.have.className('selected')
      wrapper
        .find('RatingIcon[selected=true]')
        .should.have.length(0, 'Some RatingIcons did not remove their "selected" prop')
    })
  })

  describe('hovering on icons', () => {
    it('adds the "selected" className to the Rating', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').first().simulate('mouseEnter')
      wrapper.should.have.className('selected')
    })

    it('selects icons up to and including the hovered icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').at(1).simulate('mouseEnter')

      const icons = wrapper.find('RatingIcon')

      icons.at(0).should.have.prop('selected', true)
      icons.at(1).should.have.prop('selected', true)
      icons.at(2).should.have.prop('selected', false)
    })

    it('unselects icons on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').last().simulate('mouseEnter')
      wrapper.simulate('mouseLeave')

      wrapper
        .find('RatingIcon[selected=true]')
        .should.have.length(0, 'Some RatingIcons did not remove their "selected" prop')
    })
  })

  describe('clearable', () => {
    it('prevents clearing by default with multiple icons', () => {
      const wrapper = mount(<Rating defaultRating={5} maxRating={5} />)

      wrapper.find('RatingIcon').last().simulate('click')
      wrapper
        .find('RatingIcon[active=true]')
        .should.have.length(5, 'Some RatingIcons did not retain their "active" prop')
    })

    it('allows toggling when set to "auto" with a single icon', () => {
      const wrapper = mount(<Rating clearable='auto' maxRating={1} />)

      wrapper.find('RatingIcon').at(0).simulate('click')
      wrapper.find('RatingIcon').at(0).should.have.prop('active', true)

      wrapper.find('RatingIcon').at(0).simulate('click')
      wrapper.find('RatingIcon').at(0).should.have.prop('active', false)
    })

    it('allows clearing when true with a single icon', () => {
      const wrapper = mount(<Rating clearable defaultRating={1} maxRating={1} />)

      wrapper.find('RatingIcon').at(0).simulate('click')
      wrapper.find('RatingIcon').at(0).should.have.prop('active', false)
    })

    it('allows clearing when true with multiple icons', () => {
      const wrapper = mount(<Rating clearable defaultRating={4} maxRating={5} />)

      wrapper.find('RatingIcon').at(3).simulate('click')
      wrapper
        .find('RatingIcon[active=true]')
        .should.have.length(0, 'Some RatingIcons did not remove their "active" prop')
    })

    it('prevents clearing when false with a single icon', () => {
      mount(<Rating clearable={false} defaultRating={1} maxRating={1} />)
        .find('RatingIcon')
        .at(0)
        .simulate('click')
        .should.have.prop('active', true)
    })

    it('prevents clearing when false with multiple icons', () => {
      const wrapper = mount(<Rating clearable={false} defaultRating={5} maxRating={5} />)

      wrapper.find('RatingIcon').last().simulate('click')
      wrapper
        .find('RatingIcon[active=true]')
        .should.have.length(5, 'Some RatingIcons did not retain their "active" prop')
    })
  })

  describe('disabled', () => {
    it('prevents the rating from being toggled', () => {
      mount(<Rating clearable='auto' disabled maxRating={1} rating={1} />)
        .find('RatingIcon')
        .at(0)
        .simulate('click')
        .should.have.prop('active', true)

      mount(<Rating clearable='auto' disabled maxRating={1} rating={0} />)
        .find('RatingIcon')
        .at(0)
        .simulate('click')
        .should.have.prop('active', false)
    })

    it('prevents the rating from being cleared', () => {
      const wrapper = mount(<Rating disabled maxRating={3} rating={3} />)

      wrapper.find('RatingIcon').last().simulate('click')
      wrapper
        .find('RatingIcon[active=true]')
        .should.have.length(3, 'Some RatingIcons lost their "active" prop')
    })

    it('prevents icons from becoming selected on mouse enter', () => {
      const wrapper = mount(<Rating disabled maxRating={3} />)

      wrapper.find('RatingIcon').last().simulate('mouseEnter')
      wrapper
        .find('RatingIcon[selected=true]')
        .should.have.length(0, 'Some RatingIcons became "selected"')
    })

    it('prevents icons from becoming unselected on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper.find('RatingIcon').last().simulate('mouseEnter')
      wrapper
        .find('RatingIcon[selected=true]')
        .should.have.length(3, 'Not every RatingIcon was selected on mouseEnter')

      wrapper.setProps({ disabled: true })
      wrapper.simulate('mouseLeave')
      wrapper
        .find('RatingIcon[selected=true]')
        .should.have.length(3, 'Some RatingIcons lost their "selected" prop')
    })

    it('prevents icons from becoming active on click', () => {
      const wrapper = mount(<Rating disabled maxRating={3} />)

      wrapper.find('RatingIcon').last().simulate('click')
      wrapper
        .find('RatingIcon[active=true]')
        .should.have.length(0, 'Some RatingIcons became "active"')
    })
  })

  describe('maxRating', () => {
    it('controls how many icons are displayed', () => {
      _.times(10, (i) => {
        const maxRating = i + 1
        shallow(<Rating maxRating={maxRating} />)
          .should.have.exactly(maxRating)
          .descendants('RatingIcon')
      })
    })
  })

  describe('onRate', () => {
    it('is called with (event, { rating, maxRating } on icon click', () => {
      const spy = sandbox.spy()
      const event = { fake: 'event data' }

      mount(<Rating maxRating={3} onRate={spy} />)
        .find('RatingIcon')
        .last()
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, { rating: 3, maxRating: 3 })
    })
  })

  describe('rating', () => {
    it('controls how many icons are active', () => {
      const wrapper = mount(<Rating maxRating={10} />)

      _.times(10, (rating) => {
        wrapper.setProps({ rating })
        wrapper
          .find('RatingIcon[active=true]')
          .should.have.length(rating, `Rating should have ${rating} RatingIcon with "active" prop`)
      })
    })
  })

  describe('tabIndex', () => {
    it('sets icons tabIndex to -1 to prevent focus when element is disabled', () => {
      shallow(<Rating maxRating={3} />)
        .find('RatingIcon')
        .forEach((node) => node.should.have.prop('tabIndex', 0))

      shallow(<Rating disabled maxRating={3} />)
        .find('RatingIcon')
        .forEach((node) => node.should.have.prop('tabIndex', -1))
    })

    it('sets Rating element tabIndex to 0 to allow focusing the whole group when disabled', () => {
      shallow(<Rating maxRating={3} />).should.have.prop('tabIndex', -1)

      shallow(<Rating disabled maxRating={3} />).should.have.prop('tabIndex', 0)
    })
  })
})
