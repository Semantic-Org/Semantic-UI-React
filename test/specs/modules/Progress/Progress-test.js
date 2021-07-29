import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Progress from 'src/modules/Progress/Progress'
import * as common from 'test/specs/commonTests'

describe('Progress', () => {
  common.isConformant(Progress)
  common.forwardsRef(Progress)
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
    shallow(<Progress />)
      .should.have.descendants('.bar')
      .and.have.tagName('div')
  })

  describe('attached', () => {
    it('removes the progress label from the bar', () => {
      shallow(<Progress attached='top' />)
        .find('.bar')
        .should.not.have.descendants('.progress')
    })
  })

  describe('autoSuccess', () => {
    it('applies the success class when percent >= 100%', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      wrapper.setProps({ percent: 100, autoSuccess: true })
      wrapper.should.have.have.className('success')

      wrapper.setProps({ percent: 99, autoSuccess: true })
      wrapper.should.not.have.have.className('success')

      wrapper.setProps({ percent: 101, autoSuccess: true })
      wrapper.should.have.have.className('success')
    })
    it('applies the success class when value >= total', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      wrapper.setProps({ total: 1, value: 1, autoSuccess: true })
      wrapper.should.have.have.className('success')

      wrapper.setProps({ total: 1, value: 0, autoSuccess: true })
      wrapper.should.not.have.have.className('success')

      wrapper.setProps({ total: 1, value: 2, autoSuccess: true })
      wrapper.should.have.have.className('success')
    })
  })

  describe('bar', () => {
    it('has a width equal to the percent complete', () => {
      shallow(<Progress percent={33.333} />)
        .find('.bar')
        .should.have.style('width', '33.333%')
    })
    it('cannot have its width set >100%', () => {
      shallow(<Progress percent={101} />)
        .find('.bar')
        .should.have.style('width', '100%')
    })
    it('cannot have its width set <0%', () => {
      shallow(<Progress percent={-1} />)
        .find('.bar')
        .should.have.style('width', '0%')
    })
    it('has a width equal to the percentage of the value of the total, when progress="value"', () => {
      shallow(<Progress progress='value' value={5} total={10} />)
        .find('.bar')
        .should.have.style('width', '50%')
    })
  })

  describe('data-percent', () => {
    it('adds prop by default', () => {
      shallow(<Progress />).should.have.data('percent')
    })

    it('passes value of percent prop', () => {
      shallow(<Progress percent={10} />).should.have.data('percent', 10)
    })

    it('floors the value of percent prop', () => {
      shallow(<Progress percent={8.28} />).should.have.data('percent', 8)
    })

    it('floors the results value and total props', () => {
      shallow(<Progress value={828} total={10000} />).should.have.data('percent', 8)
    })
  })

  describe('indicating', () => {
    it('adds the "active" class', () => {
      shallow(<Progress indicating />).should.have.className('active')
    })
  })

  describe('label', () => {
    it('shows the label text when provided', () => {
      shallow(<Progress label='some-label' />)
        .children()
        .find('.label')
        .should.contain.text('some-label')
    })
  })

  describe('progress', () => {
    it('hides the progress text by default', () => {
      shallow(<Progress />)
        .find('.bar')
        .should.not.have.descendants('.progress')
    })
    it('shows the progress text when true', () => {
      shallow(<Progress progress />)
        .find('.bar')
        .should.have.descendants('.progress')
    })
    it('hides the progress text when false', () => {
      shallow(<Progress progress={false} />)
        .find('.bar')
        .should.not.have.descendants('.progress')
    })
    it('displays the progress as a percentage by default', () => {
      shallow(<Progress percent={20} progress />)
        .should.have.descendants('.progress')
        .and.contain.text('20%')
    })
    it('displays the progress as a ratio when set to "ratio"', () => {
      shallow(<Progress progress='ratio' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('1/2')
    })
    it('displays the progress as a percentage when set to "percent"', () => {
      shallow(<Progress progress='percent' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('50%')
    })
    it('displays the progress as text when set to "value"', () => {
      shallow(<Progress progress='value' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('1')
    })
    it('shows the percent complete', () => {
      shallow(<Progress percent={72} progress />)
        .children()
        .find('.progress')
        .should.contain.text('72%')
    })
    it('cannot be set >100%', () => {
      shallow(<Progress percent={101} progress />)
        .children()
        .find('.progress')
        .should.contain.text('100%')
    })
    it('cannot be set <0%', () => {
      shallow(<Progress percent={-1} progress />)
        .children()
        .find('.progress')
        .should.contain.text('0%')
    })
    it('displays values with a decimal', () => {
      shallow(<Progress percent={10.12345} progress />)
        .children()
        .find('.progress')
        .should.contain.text('10.12345%')
    })
    it('displays values without a decimal', () => {
      shallow(<Progress percent={35} progress />)
        .children()
        .find('.progress')
        .should.contain.text('35%')
    })
  })

  describe('precision', () => {
    it('rounds the progress label to 0 decimal places by default', () => {
      shallow(<Progress percent={10.12345} precision={0} />)
        .children()
        .find('.progress')
        .should.contain.text('10%')
    })
    it('removes the decimal from progress label when set to 0', () => {
      shallow(<Progress percent={10.12345} precision={0} />)
        .children()
        .find('.progress')
        .should.contain.text('10%')
    })
    it('rounds the decimal in the progress label to the number of digits', () => {
      shallow(<Progress percent={10.12345} precision={1} />)
        .children()
        .find('.progress')
        .should.contain.text('10.1%')

      shallow(<Progress percent={10.12345} precision={4} />)
        .children()
        .find('.progress')
        .should.contain.text('10.1235%')
    })
  })

  describe('total/value', () => {
    it('calculates the percent complete', () => {
      shallow(<Progress value={1} total={2} progress />)
        .children()
        .find('.progress')
        .should.contain.text('50%')
    })
  })
})
