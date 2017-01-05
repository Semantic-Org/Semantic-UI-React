import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'

import Statistic from 'src/views/Statistic/Statistic'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import StatisticValue from 'src/views/Statistic/StatisticValue'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.hasUIClassName(Statistic)
  common.hasSubComponents(Statistic, [StatisticGroup, StatisticLabel, StatisticValue])
  common.rendersChildren(Statistic)

  common.propValueOnlyToClassName(Statistic, 'color')
  common.propKeyAndValueToClassName(Statistic, 'floated')
  common.propKeyOnlyToClassName(Statistic, 'horizontal')
  common.propKeyOnlyToClassName(Statistic, 'inverted')
  common.propValueOnlyToClassName(Statistic, 'size')

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

