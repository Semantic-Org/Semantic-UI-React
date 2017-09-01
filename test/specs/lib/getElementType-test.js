import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import getElementType, { computeElementType } from 'src/lib/getElementType'

describe('computeElementType', () => {
  it('returns user defined "as" element type', () => {
    computeElementType({}, { as: 'button' })
      .should.equal('button')
  })
  it('returns computed default element type', () => {
    computeElementType({}, {}, () => 'button')
      .should.equal('button')
  })
  it('returns default element type when compute failed', () => {
    computeElementType({}, {}, () => false)
      .should.equal('div')
  })
  it('returns "a" when has a "href" prop', () => {
    computeElementType({}, { href: faker.internet.url() })
      .should.equal('a')
  })
  it('returns "as" from defaultProps', () => {
    const defaultProps = { as: 'button' }

    computeElementType({ defaultProps }, {})
      .should.equal('button')
  })
  it('returns default element type', () => {
    computeElementType({}, {})
      .should.equal('div')
  })
})

describe('getElementType', () => {
  it('returns a refHOC when "as" is a string', () => {
    const ElementType = getElementType({}, { as: 'button' })

    mount(<ElementType innerRef={_.noop} />)
      .type()
      .name
      .should.equal('refHOC')
  })

  it('returns a refHOC when "as" is a component', () => {
    const Component = () => <div />
    const ElementType = getElementType({}, { as: Component })

    mount(<ElementType innerRef={_.noop} />)
      .type()
      .name
      .should.equal('refHOC')
  })
})

