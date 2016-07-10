import React from 'react'

import Progress from 'src/modules/Progress/Progress'
import * as common from 'test/specs/commonTests'

describe.only('Progress', () => {
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
  })

  describe('autoSuccess', () => {
    it('applies the success class when percent >= 100%', () => {
      const wrapper = shallow(<Progress autoSuccess />)

      wrapper
        .setProps({ percent: 100 })
        .should.have.have.className('success')

      wrapper
        .setProps({ percent: 99 })
        .should.not.have.have.className('success')

      wrapper
        .setProps({ percent: 101 })
        .should.have.have.className('success')
    })
    it('applies the success class when value >= total', () => {
      const wrapper = shallow(<Progress total={1} autoSuccess />)

      wrapper
        .should.have.not.have.className('success')

      wrapper
        .setProps({ value: 1 })
        .should.have.have.className('success')

      wrapper
        .setProps({ value: 0 })
        .should.not.have.have.className('success')

      wrapper
        .setProps({ value: 2 })
        .should.have.have.className('success')
    })
  })

  describe('label', () => {
    it('can display the progress as a percentage', () => {
      shallow(<Progress label='percent' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('50%')
    })
    it('can display the progress as a ratio', () => {
      shallow(<Progress label='ratio' value={1} total={2} />)
        .children()
        .find('.progress')
        .should.contain.text('1/2')
    })
  })

  describe('percent', () => {
    it('sets the bar width', () => {
      throw ''
    })
    it('sets the label (percent)', () => {
      throw ''
    })
    it('sets the label (ratio)', () => {
      throw ''
    })
  })

  describe('progress', () => {
    it('hides the progress text by default', () => {
      throw ''
    })
    it('shows the progress text when true', () => {
      throw ''
    })
    it('hides the progress text when false', () => {
      throw ''
    })
  })

  describe('precision', () => {
    it('controlls the decimal precision of the progress label', () => {
      throw ''
    })
  })

  describe('total/value', () => {
    it('calculates the percent complete', () => {
      throw ''
    })
  })
})
