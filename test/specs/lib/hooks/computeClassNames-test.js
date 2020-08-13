import { computeClassNames } from 'src/lib/hooks/useClassNamesOnNode'

describe('computeClassNames', () => {
  it('accepts Set as value', () => {
    const classNames = computeClassNames(new Set())

    classNames.should.be.an('array')
    classNames.should.have.length(0)
  })

  it('combines classNames', () => {
    const map = new Set([{ current: 'foo' }, { current: 'bar' }])

    computeClassNames(map).should.have.members(['foo', 'bar'])
  })

  it('combines only unique classNames', () => {
    const map = new Set([{ current: 'foo' }, { current: 'bar' }, { current: 'foo bar baz' }])

    computeClassNames(map).should.have.members(['foo', 'bar', 'baz'])
  })

  it('omits false, undefined and null classNames', () => {
    const map = new Set([
      { current: 'foo' },
      {},
      { current: false },
      { current: null },
      { current: undefined },
      { current: '0' },
      { current: 'false' },
    ])

    computeClassNames(map).should.have.members(['foo', '0', 'false'])
  })

  it('trims classNames', () => {
    const map = new Set([{ current: ' foo     bar ' }, { current: '    baz qux' }])

    computeClassNames(map).should.have.members(['foo', 'bar', 'baz', 'qux'])
  })

  it('skips "undefined" as input', () => {
    computeClassNames([]).should.have.length(0)
  })
})
