import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Statistic from 'src/views/Statistic/Statistic'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import StatisticValue from 'src/views/Statistic/StatisticValue'
import * as common from 'test/specs/commonTests'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.hasSubComponents(Statistic, [StatisticGroup, StatisticLabel, StatisticValue])
  common.hasUIClassName(Statistic)
  common.rendersChildren(Statistic)

  common.propKeyAndValueToClassName(Statistic, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Statistic, 'horizontal')
  common.propKeyOnlyToClassName(Statistic, 'inverted')

  common.propValueOnlyToClassName(Statistic, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Statistic, 'size', _.without(SUI.SIZES, 'big', 'massive', 'medium'))

  it('renders an div element', () => {
    shallow(<Statistic />)
      .should.have.tagName('div')
  })

  it('renders StatisticLabel component with `label` prop', () => {
    const text = faker.hacker.phrase()
    const wrapper = mount(<Statistic label={text} />)
    const label = wrapper.find('StatisticLabel').first()

    wrapper.should.have.exactly(1).descendants('StatisticLabel')
    label.should.contain.text(text)
  })

  it('renders StatisticValue component and passes `text` prop', () => {
    const text = faker.hacker.phrase()
    const wrapper = mount(<Statistic value={text} text />)
    const value = wrapper.find('StatisticValue').first()

    wrapper.should.have.exactly(1).descendants('StatisticValue')
    value.should.contain.text(text)
    value.should.have.prop('text', true)
  })

  it('renders StatisticValue component', () => {
    const text = faker.hacker.phrase()
    const wrapper = mount(<Statistic value={text} />)
    const value = wrapper.find('StatisticValue').first()

    wrapper.should.have.exactly(1).descendants('StatisticValue')
    value.should.contain.text(text)
    value.should.not.have.prop('text')
  })
})

