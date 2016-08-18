import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import CardContent from 'src/views/Card/CardContent'
import CardDescription from 'src/views/Card/CardDescription'
import CardHeader from 'src/views/Card/CardHeader'
import CardMeta from 'src/views/Card/CardMeta'

describe('CardContent', () => {
  common.isConformant(CardContent)
  common.propKeyOnlyToClassName(CardContent, 'extra')
  common.rendersChildren(CardContent)

  describe('description prop', () => {
    it('renders description component', () => {
      const text = faker.hacker.phrase()

      shallow(<CardContent description={text} />)
        .should.contain(<CardDescription content={text} />)
    })
  })

  describe('header prop', () => {
    it('renders header component', () => {
      const text = faker.hacker.phrase()

      shallow(<CardContent header={text} />)
        .should.contain(<CardHeader content={text} />)
    })
  })

  describe('meta prop', () => {
    it('renders meta component', () => {
      const text = faker.hacker.phrase()

      shallow(<CardContent meta={text} />)
        .should.contain(<CardMeta content={text} />)
    })
  })
})
