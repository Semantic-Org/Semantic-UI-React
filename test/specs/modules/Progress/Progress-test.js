import React from 'react'
import Progress from 'src/modules/Progress/Progress'
import * as common from 'test/specs/commonTests'

describe('Progress', () => {
  common.isConformant(Progress)
  common.hasUIClassName(Progress)
  common.rendersChildren(Progress)

  common.propValueOnlyToClassName(Progress, 'size')
  common.propValueOnlyToClassName(Progress, 'color')

  common.propKeyOnlyToClassName(Progress, 'active')
  common.propKeyOnlyToClassName(Progress, 'success')
  common.propKeyOnlyToClassName(Progress, 'warning')
  common.propKeyOnlyToClassName(Progress, 'error')
  common.propKeyOnlyToClassName(Progress, 'disabled')
  common.propKeyOnlyToClassName(Progress, 'indicating')
  common.propKeyOnlyToClassName(Progress, 'inverted')

  common.propKeyAndValueToClassName(Progress, 'attached')

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

      wrapper
        .setProps({ percent: 100, autoSuccess: true })
        .should.have.have.className('success')

      wrapper
        .setProps({ percent: 99, autoSuccess: true })
        .should.not.have.have.className('success')

      wrapper
        .setProps({ percent: 101, autoSuccess: true })
        .should.have.have.className('success')
    })
    it('applies the success class when value >= total', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      wrapper
        .setProps({ total: 1, value: 1, autoSuccess: true })
        .should.have.have.className('success')

      wrapper
        .setProps({ total: 1, value: 0, autoSuccess: true })
        .should.not.have.have.className('success')

      wrapper
        .setProps({ total: 1, value: 2, autoSuccess: true })
        .should.have.have.className('success')
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
  })

  describe('indicating', () => {
    it('adds the "active" class', () => {
      shallow(<Progress indicating />)
        .should.have.className('active')
    })
  })

  describe('label', () => {
    it('displays the progress as a percentage by default', () => {
      shallow(<Progress percent={20} label />)
        .should.have.descendants('.progress')
        .and.contain.text('20%')
    })
    it('displays the progress as a ratio when set to "ratio"', () => {
      shallow(<Progress label='ratio' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('1/2')
    })
    it('displays the progress as a percentage when set to "percent"', () => {
      shallow(<Progress label='percent' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('50%')
    })
  })

  describe('percent', () => {
    // it('adds the percent to the data-percent prop', () => {
    //   shallow(<Progress percent={10} />)
    //     .should.have.prop('data-percent', 10)
    // })
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
    // it('adds the value/total to the data-percent prop', () => {
    //   shallow(<Progress total={10} value={3} />)
    //     .should.have.prop('data-percent', 30)
    // })
    it('calculates the percent complete', () => {
      shallow(<Progress value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('50%')
    })
  })
})
