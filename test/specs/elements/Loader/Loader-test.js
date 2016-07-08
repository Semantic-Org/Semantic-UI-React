import faker from 'faker'
import React from 'react'
import Loader from 'src/elements/Loader/Loader'
import * as common from 'test/specs/commonTests'

describe('Loader', () => {
  common.isConformant(Loader)
  common.hasUIClassName(Loader)
  common.propKeyOnlyToClassName(Loader, 'active')
  common.propKeyOnlyToClassName(Loader, 'disabled')
  common.propKeyOnlyToClassName(Loader, 'indeterminate')
  common.propKeyOrValueToClassName(Loader, 'inline')
  common.propKeyOnlyToClassName(Loader, 'inverted')
  common.propKeyOnlyToClassName(Loader, 'text')
  common.propValueOnlyToClassName(Loader, 'size')
  common.rendersChildren(Loader)

  it('renders an div element', () => {
    shallow(<Loader />)
      .should.have.tagName('div')
  })

  it('renders text prop as children', () => {
    const text = faker.hacker.phrase()
    const loader = shallow(<Loader text={text} />)

    loader.should.contain.text(text)
  })

  it('adds text class when has children prop', () => {
    const text = faker.hacker.phrase()
    const loader = shallow(<Loader>{text}</Loader>)

    loader.should.have.className('text')
  })
})
