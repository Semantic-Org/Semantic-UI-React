import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Rating from 'src/modules/Rating/Rating'
import * as common from 'test/specs/commonTests'

describe('Rating', () => {
  common.isConformant(Rating)
  common.hasUIClassName(Rating)

  common.propKeyOnlyToClassName(Rating, 'disabled')

  common.propValueOnlyToClassName(Rating, 'icon', ['star', 'heart'])
  common.propValueOnlyToClassName(Rating, 'size', _.without(SUI.SIZES, 'medium', 'big'))

  describe('clicking on icons', () => {
    it('makes icons active up to and including the clicked icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .at(1)
        .simulate('click')

      const icons = wrapper.find('RatingIcon')

      expect(icons.at(0)).have.prop('active', true)
      expect(icons.at(1)).have.prop('active', true)
      expect(icons.at(2)).have.prop('active', false)
    })

    it('if no rating selected no icon should have aria-checked', () => {
      const icons = mount(<Rating maxRating={3} />).find('RatingIcon')

      expect(icons.at(0)).have.prop('aria-checked', false)
      expect(icons.at(1)).have.prop('aria-checked', false)
      expect(icons.at(2)).have.prop('aria-checked', false)
    })

    it('makes the clicked icon aria-checked', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .at(1)
        .simulate('click')

      const icons = wrapper.find('RatingIcon')

      expect(icons.at(0)).have.prop('aria-checked', false)
      expect(icons.at(1)).have.prop('aria-checked', true)
      expect(icons.at(2)).have.prop('aria-checked', false)
    })

    it('set aria-setsize on each rating icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .at(1)
        .simulate('click')

      const icons = wrapper.find('RatingIcon')

      expect(icons.at(0)).have.prop('aria-setsize', 3)
      expect(icons.at(1)).have.prop('aria-setsize', 3)
      expect(icons.at(2)).have.prop('aria-setsize', 3)
    })

    it('sets aria-posinset on each rating icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .at(1)
        .simulate('click')

      const icons = wrapper.find('RatingIcon')

      expect(icons.at(0)).have.prop('aria-posinset', 1)
      expect(icons.at(1)).have.prop('aria-posinset', 2)
      expect(icons.at(2)).have.prop('aria-posinset', 3)
    })

    it('removes the "selected" prop', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('mouseEnter')
        .simulate('click')
      expect(wrapper).not.have.className('selected')
      expect(wrapper.find('RatingIcon[selected=true]')).toHaveLength(0)
    })
  })

  describe('hovering on icons', () => {
    it('adds the "selected" className to the Rating', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .first()
        .simulate('mouseEnter')
      expect(wrapper).have.className('selected')
    })

    it('selects icons up to and including the hovered icon', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .at(1)
        .simulate('mouseEnter')

      const icons = wrapper.find('RatingIcon')

      expect(icons.at(0)).have.prop('selected', true)
      expect(icons.at(1)).have.prop('selected', true)
      expect(icons.at(2)).have.prop('selected', false)
    })

    it('unselects icons on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('mouseEnter')
      wrapper.simulate('mouseLeave')

      expect(wrapper.find('RatingIcon[selected=true]')).toHaveLength(0)
    })
  })

  describe('clearable', () => {
    it('prevents clearing by default with multiple icons', () => {
      const wrapper = mount(<Rating defaultRating={5} maxRating={5} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('click')
      expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(5)
    })

    it('allows toggling when set to "auto" with a single icon', () => {
      const wrapper = mount(<Rating clearable='auto' maxRating={1} />)

      wrapper
        .find('RatingIcon')
        .at(0)
        .simulate('click')
      expect(wrapper.find('RatingIcon').at(0)).have.prop('active', true)

      wrapper
        .find('RatingIcon')
        .at(0)
        .simulate('click')
      expect(wrapper.find('RatingIcon').at(0)).have.prop('active', false)
    })

    it('allows clearing when true with a single icon', () => {
      const wrapper = mount(<Rating clearable defaultRating={1} maxRating={1} />)

      wrapper
        .find('RatingIcon')
        .at(0)
        .simulate('click')
      expect(wrapper.find('RatingIcon').at(0)).have.prop('active', false)
    })

    it('allows clearing when true with multiple icons', () => {
      const wrapper = mount(<Rating clearable defaultRating={4} maxRating={5} />)

      wrapper
        .find('RatingIcon')
        .at(3)
        .simulate('click')
      expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(0)
    })

    it('prevents clearing when false with a single icon', () => {
      expect(
        mount(<Rating clearable={false} defaultRating={1} maxRating={1} />)
          .find('RatingIcon')
          .at(0)
          .simulate('click'),
      ).have.prop('active', true)
    })

    it('prevents clearing when false with multiple icons', () => {
      const wrapper = mount(<Rating clearable={false} defaultRating={5} maxRating={5} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('click')
      expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(5)
    })
  })

  describe('disabled', () => {
    it('prevents the rating from being toggled', () => {
      expect(
        mount(<Rating clearable='auto' disabled maxRating={1} rating={1} />)
          .find('RatingIcon')
          .at(0)
          .simulate('click'),
      ).have.prop('active', true)

      expect(
        mount(<Rating clearable='auto' disabled maxRating={1} rating={0} />)
          .find('RatingIcon')
          .at(0)
          .simulate('click'),
      ).have.prop('active', false)
    })

    it('prevents the rating from being cleared', () => {
      const wrapper = mount(<Rating disabled maxRating={3} rating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('click')
      expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(3)
    })

    it('prevents icons from becoming selected on mouse enter', () => {
      const wrapper = mount(<Rating disabled maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('mouseEnter')
      expect(wrapper.find('RatingIcon[selected=true]')).toHaveLength(0)
    })

    it('prevents icons from becoming unselected on mouse leave', () => {
      const wrapper = mount(<Rating maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('mouseEnter')
      expect(wrapper.find('RatingIcon[selected=true]')).toHaveLength(3)

      wrapper.setProps({ disabled: true })
      wrapper.simulate('mouseLeave')
      expect(wrapper.find('RatingIcon[selected=true]')).toHaveLength(3)
    })

    it('prevents icons from becoming active on click', () => {
      const wrapper = mount(<Rating disabled maxRating={3} />)

      wrapper
        .find('RatingIcon')
        .last()
        .simulate('click')
      expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(0)
    })
  })

  describe('maxRating', () => {
    it('controls how many icons are displayed', () => {
      _.times(10, (i) => {
        const maxRating = i + 1
        expect(shallow(<Rating maxRating={maxRating} />))
          .have.exactly(maxRating)
          .descendants('RatingIcon')
      })
    })
  })

  describe('onRate', () => {
    it('is called with (event, { rating, maxRating } on icon click', () => {
      const onRate = jest.fn()
      const event = { fake: 'event data' }

      mount(<Rating maxRating={3} onRate={onRate} />)
        .find('RatingIcon')
        .last()
        .simulate('click', event)

      expect(onRate).have.been.calledOnce()
      expect(onRate).have.been.calledWithMatch(event, { rating: 3, maxRating: 3 })
    })
  })

  describe('rating', () => {
    it('controls how many icons are active', () => {
      const wrapper = mount(<Rating maxRating={10} />)

      _.times(10, (rating) => {
        wrapper.setProps({ rating })
        expect(wrapper.find('RatingIcon[active=true]')).toHaveLength(rating)
      })
    })
  })
})
