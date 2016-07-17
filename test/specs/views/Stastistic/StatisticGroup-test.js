import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'
import numberToWord from 'src/utils/numberToWord'

import StatisticGroup from 'src/views/Statistic/StatisticGroup'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
  common.hasUIClassName(StatisticGroup)
  common.rendersChildren(StatisticGroup)
  common.propKeyOnlyToClassName(StatisticGroup, 'horizontal')

  it('renders an div element', () => {
    shallow(<StatisticGroup />)
      .should.have.tagName('div')
  })

  it('renders children with `items` prop', () => {
    const items = [
      { label: 'Faves', value: 22 },
      { label: 'Views', value: '31,200' },
    ]

    shallow(<StatisticGroup items={items} />)
      .should.have.exactly(2).descendants('Statistic')
  })

  describe('widths prop', () => {
    it('adds classname with number', () => {
      const number = faker.random.number({ min: 1, max: 16 })
      const className = numberToWord(number)

      shallow(<StatisticGroup widths={number} />)
        .should.have.className(className)
    })

    it('adds classname with string', () => {
      const text = faker.hacker.phrase()

      shallow(<StatisticGroup widths={text} />)
        .should.have.className(text)
    })
  })
})
