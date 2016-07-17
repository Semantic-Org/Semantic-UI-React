import React from 'react'
import * as common from 'test/specs/commonTests'

import StatisticLabel from 'src/views/Statistic/StatisticLabel'

describe('StatisticLabel', () => {
  common.isConformant(StatisticLabel)
  common.rendersChildren(StatisticLabel)

  it('renders an div element', () => {
    shallow(<StatisticLabel />)
      .should.have.tagName('div')
  })

  // describe('content prop', () => {
  //   it('renders child text', () => {
  //     const text = faker.hacker.phrase()
  //
  //     shallow(<StatisticLabel content={text} />)
  //       .should.contain.text(text)
  //   })
  //
  //   it('renders child components', () => {
  //     const child = <div data-child={faker.hacker.noun()} />
  //
  //     shallow(<StatisticLabel content={child} />)
  //       .should.contain(child)
  //   })
  // })
})
