import faker from 'faker'
import React from 'react'

import Loader from 'src/elements/Loader/Loader'
import * as common from 'test/specs/commonTests'

describe('Loader', () => {
  common.isConformant(Loader)
  common.hasUIClassName(Loader)
  common.rendersChildren(Loader)

  common.propKeyOnlyToClassName(Loader, 'active')
  common.propKeyOnlyToClassName(Loader, 'disabled')
  common.propKeyOnlyToClassName(Loader, 'indeterminate')
  common.propKeyOrValueAndKeyToClassName(Loader, 'inline')
  common.propKeyOnlyToClassName(Loader, 'inverted')
  common.propKeyOnlyToClassName(Loader, 'text')
  common.propValueOnlyToClassName(Loader, 'size')

  describe('text prop', () => {
    it('renders children', () => {
      const text = faker.hacker.phrase()
      const loader = shallow(<Loader text={text} />)

      loader.should.contain.text(text)
    })

    it('adds text class when has children', () => {
      const text = faker.hacker.phrase()
      const loader = shallow(<Loader>{text}</Loader>)

      loader.should.have.className('text')
    })
  })
})
