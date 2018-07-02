import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Progress from 'src/modules/Progress/Progress'
import * as common from 'test/specs/commonTests'

describe('Progress', () => {
  common.isConformant(Progress)
  common.hasUIClassName(Progress)
  common.rendersChildren(Progress)

  common.propKeyAndValueToClassName(Progress, 'attached', ['top', 'bottom'])

  common.propKeyOnlyToClassName(Progress, 'active')
  common.propKeyOnlyToClassName(Progress, 'disabled')
  common.propKeyOnlyToClassName(Progress, 'error')
  common.propKeyOnlyToClassName(Progress, 'indicating')
  common.propKeyOnlyToClassName(Progress, 'inverted')
  common.propKeyOnlyToClassName(Progress, 'success')
  common.propKeyOnlyToClassName(Progress, 'warning')

  common.propValueOnlyToClassName(Progress, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Progress, 'size', _.without(SUI.SIZES, 'mini', 'huge', 'massive'))

  it('contains div with className bar', () => {
    expect(shallow(<Progress />))
      .have.descendants('.bar')
      .and.have.tagName('div')
  })

  describe('attached', () => {
    it('removes the progress label from the bar', () => {
      expect(shallow(<Progress attached='top' />).find('.bar')).not.have.descendants('.progress')
    })
  })

  describe('autoSuccess', () => {
    it('applies the success class when percent >= 100%', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      expect(wrapper.setProps({ percent: 100, autoSuccess: true })).have.have.className('success')

      expect(wrapper.setProps({ percent: 99, autoSuccess: true })).not.have.have.className(
        'success',
      )

      expect(wrapper.setProps({ percent: 101, autoSuccess: true })).have.have.className('success')
    })
    it('applies the success class when value >= total', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      expect(wrapper.setProps({ total: 1, value: 1, autoSuccess: true })).have.have.className(
        'success',
      )

      expect(wrapper.setProps({ total: 1, value: 0, autoSuccess: true })).not.have.have.className(
        'success',
      )

      expect(wrapper.setProps({ total: 1, value: 2, autoSuccess: true })).have.have.className(
        'success',
      )
    })
  })

  describe('bar', () => {
    it('has a width equal to the percent complete', () => {
      expect(shallow(<Progress percent={33.333} />).find('.bar')).have.style('width', '33.333%')
    })
    it('cannot have its width set >100%', () => {
      expect(shallow(<Progress percent={101} />).find('.bar')).have.style('width', '100%')
    })
    it('cannot have its width set <0%', () => {
      expect(shallow(<Progress percent={-1} />).find('.bar')).have.style('width', '0%')
    })
    it('has a width equal to the percentage of the value of the total, when progress="value"', () => {
      expect(shallow(<Progress progress='value' value={5} total={10} />).find('.bar')).have.style(
        'width',
        '50%',
      )
    })
  })

  describe('data-percent', () => {
    it('adds prop by default', () => {
      expect(shallow(<Progress />)).have.data('percent')
    })

    it('passes value of percent prop', () => {
      expect(shallow(<Progress percent={10} />)).have.data('percent', 10)
    })

    it('floors the value of percent prop', () => {
      expect(shallow(<Progress percent={8.28} />)).have.data('percent', 8)
    })

    it('floors the results value and total props', () => {
      expect(shallow(<Progress value={828} total={10000} />)).have.data('percent', 8)
    })
  })

  describe('indicating', () => {
    it('adds the "active" class', () => {
      expect(shallow(<Progress indicating />)).have.className('active')
    })
  })

  describe('label', () => {
    it('shows the label text when provided', () => {
      expect(
        shallow(<Progress label='some-label' />)
          .children()
          .find('.label'),
      ).contain.text('some-label')
    })
  })

  describe('progress', () => {
    it('hides the progress text by default', () => {
      expect(shallow(<Progress />).find('.bar')).not.have.descendants('.progress')
    })
    it('shows the progress text when true', () => {
      expect(shallow(<Progress progress />).find('.bar')).have.descendants('.progress')
    })
    it('hides the progress text when false', () => {
      expect(shallow(<Progress progress={false} />).find('.bar')).not.have.descendants('.progress')
    })
    it('displays the progress as a percentage by default', () => {
      expect(shallow(<Progress percent={20} progress />))
        .have.descendants('.progress')
        .and.contain.text('20%')
    })
    it('displays the progress as a ratio when set to "ratio"', () => {
      expect(
        shallow(<Progress progress='ratio' value={1} total={2} />)
          .children()
          .find('.progress'),
      ).contain.text('1/2')
    })
    it('displays the progress as a percentage when set to "percent"', () => {
      expect(
        shallow(<Progress progress='percent' value={1} total={2} />)
          .children()
          .find('.progress'),
      ).contain.text('50%')
    })
    it('displays the progress as text when set to "value"', () => {
      expect(
        shallow(<Progress progress='value' value={1} total={2} />)
          .children()
          .find('.progress'),
      ).contain.text('1')
    })
    it('shows the percent complete', () => {
      expect(
        shallow(<Progress percent={72} progress />)
          .children()
          .find('.progress'),
      ).contain.text('72%')
    })
    it('cannot be set >100%', () => {
      expect(
        shallow(<Progress percent={101} progress />)
          .children()
          .find('.progress'),
      ).contain.text('100%')
    })
    it('cannot be set <0%', () => {
      expect(
        shallow(<Progress percent={-1} progress />)
          .children()
          .find('.progress'),
      ).contain.text('0%')
    })
    it('displays values with a decimal', () => {
      expect(
        shallow(<Progress percent={10.12345} progress />)
          .children()
          .find('.progress'),
      ).contain.text('10.12345%')
    })
    it('displays values without a decimal', () => {
      expect(
        shallow(<Progress percent={35} progress />)
          .children()
          .find('.progress'),
      ).contain.text('35%')
    })
  })

  describe('precision', () => {
    it('rounds the progress label to 0 decimal places by default', () => {
      expect(
        shallow(<Progress percent={10.12345} precision={0} />)
          .children()
          .find('.progress'),
      ).contain.text('10%')
    })
    it('removes the decimal from progress label when set to 0', () => {
      expect(
        shallow(<Progress percent={10.12345} precision={0} />)
          .children()
          .find('.progress'),
      ).contain.text('10%')
    })
    it('rounds the decimal in the progress label to the number of digits', () => {
      expect(
        shallow(<Progress percent={10.12345} precision={1} />)
          .children()
          .find('.progress'),
      ).contain.text('10.1%')

      expect(
        shallow(<Progress percent={10.12345} precision={4} />)
          .children()
          .find('.progress'),
      ).contain.text('10.1235%')
    })
  })

  describe('total/value', () => {
    it('calculates the percent complete', () => {
      expect(
        shallow(<Progress value={1} total={2} progress />)
          .children()
          .find('.progress'),
      ).contain.text('50%')
    })
  })
})
