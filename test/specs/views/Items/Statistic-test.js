import React from 'react'
import { Statistic } from 'stardust'
import faker from 'faker'

describe('Statistic', () => {
  it('renders children', () => {
    const child = faker.hacker.phrase()
    render(<Statistic>{child}</Statistic>)
      .assertText(child)
  })

  describe('Statistics', () => {
    it('renders children', () => {
      const child = faker.hacker.phrase()
      render(<Statistic.Statistics>{child}</Statistic.Statistics>)
        .assertText(child)
    })
  })

  describe('Label', () => {
    it('renders children', () => {
      const child = faker.hacker.phrase()
      render(<Statistic.Label>{child}</Statistic.Label>)
        .assertText(child)
    })
  })

  describe('Value', () => {
    it('renders children', () => {
      const child = faker.hacker.phrase()
      render(<Statistic.Value>{child}</Statistic.Value>)
        .assertText(child)
    })
  })
})
