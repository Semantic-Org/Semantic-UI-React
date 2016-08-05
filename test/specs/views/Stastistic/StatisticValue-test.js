import React from 'react'
import * as common from 'test/specs/commonTests'

import StatisticValue from 'src/views/Statistic/StatisticValue'

describe('StatisticValue', () => {
  common.isConformant(StatisticValue)
  common.rendersChildren(StatisticValue)
  common.propKeyOnlyToClassName(StatisticValue, 'text')

  it('renders an div element', () => {
    shallow(<StatisticValue />)
      .should.have.tagName('div')
  })

  // describe('content prop', () => {
  //   it('renders child text', () => {
  //     const text = faker.hacker.phrase()
  //
  //     shallow(<StatisticValue content={text} />)
  //       .should.contain.text(text)
  //   })
  //
  //   it('renders child components', () => {
  //     const child = <div data-child={faker.hacker.noun()} />
  //
  //     shallow(<StatisticValue content={child} />)
  //       .should.contain(child)
  //   })
  // })
})

