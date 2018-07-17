import faker from 'faker'
import React from 'react'

import Loader from 'src/elements/Loader/Loader'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Loader', () => {
  common.isConformant(Loader)
  common.hasUIClassName(Loader)
  common.rendersChildren(Loader)

  common.propKeyOnlyToClassName(Loader, 'active')
  common.propKeyOnlyToClassName(Loader, 'disabled')
  common.propKeyOnlyToClassName(Loader, 'indeterminate')
  common.propKeyOnlyToClassName(Loader, 'inverted')

  common.propKeyOrValueAndKeyToClassName(Loader, 'inline', ['centered'])

  common.propValueOnlyToClassName(Loader, 'size', SUI.SIZES)

  describe('text (class)', () => {
    it('omitted by default', () => {
      expect(shallow(<Loader />).hasClass('text')).toBe(false)
    })

    it('add class when has children', () => {
      expect(shallow(<Loader>{faker.hacker.phrase()}</Loader>).hasClass('text')).toBe(true)
    })

    it('add class when has content prop', () => {
      expect(shallow(<Loader content={faker.hacker.phrase()} />).hasClass('text')).toBe(true)
    })
  })
})
