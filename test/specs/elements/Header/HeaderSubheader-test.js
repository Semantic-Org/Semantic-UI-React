import faker from 'faker'
import React from 'react'

import HeaderSubheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('HeaderSubheader', () => {
  common.isConformant(HeaderSubheader)
  common.rendersChildren(HeaderSubheader)

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<HeaderSubheader content={text} />)
        .should.contain.text(text)
    })
  })
})
