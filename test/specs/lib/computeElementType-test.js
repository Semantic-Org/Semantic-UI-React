import faker from 'faker'
import computeElementType from 'src/lib/computeElementType'

describe('computeElementType', () => {
  it('returns user defined "as" element type', () => {
    computeElementType({ as: 'button' })
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
    computeElementType({ href: faker.internet.url() })
      .should.equal('a')
  })

  it('returns "as" from defaultProps', () => {
    computeElementType({}, { as: 'button' })
      .should.equal('button')
  })

  it('returns default element type', () => {
    computeElementType({})
      .should.equal('div')
  })
})
