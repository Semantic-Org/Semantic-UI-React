import faker from 'faker'
import React from 'react'

import ButtonOr from 'src/elements/Button/ButtonOr'
import * as common from 'test/specs/commonTests'

describe('ButtonOr', () => {
  common.isConformant(ButtonOr)
  common.forwardsRef(ButtonOr)

  describe('text', () => {
    it('should not define attr when not defined', () => {
      shallow(<ButtonOr />).should.have.not.attr('data-text')
    })

    it('should pass value to attr', () => {
      const word = faker.lorem.word()

      shallow(<ButtonOr text={word} />).should.have.attr('data-text', word)
    })
  })
})
