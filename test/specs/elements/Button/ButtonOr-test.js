import faker from 'faker'
import React from 'react'

import ButtonOr from 'src/elements/Button/ButtonOr'
import * as common from 'test/specs/commonTests'

describe('ButtonOr', () => {
  common.isConformant(ButtonOr)

  describe('text', () => {
    it('should not define attr when not defined', () => {
      expect(shallow(<ButtonOr />)).have.not.attr('data-text')
    })

    it('should pass value to attr', () => {
      const word = faker.lorem.word()

      expect(shallow(<ButtonOr text={word} />)).have.attr('data-text', word)
    })
  })
})
