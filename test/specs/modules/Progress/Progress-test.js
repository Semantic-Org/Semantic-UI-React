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
  })

  describe('autoSuccess', () => {
    it('applies the success class when 100%', () => {
      throw ''
    })
    it('applies the success class when value === total', () => {
      throw ''
    })
  })

  describe('label', () => {
    it('can display the progress as a percentage', () => {
      throw ''
    })
    it('can display the progress as a ratio', () => {
      throw ''
    })
  })

  describe('percentage', () => {
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
    it('calculates the percentage complete', () => {
      throw ''
    })
  })
})
