import computeClassNames from 'src/addons/MountNode/lib/computeClassNames'

describe('computeClassNames', () => {
  it('accepts Set as value', () => {
    const classNames = computeClassNames(new Set())

    classNames.should.be.an('array')
    classNames.should.have.length(0)
  })

  it('combines classNames', () => {
    const map = new Set([
      { props: { className: 'foo' } },
      { props: { className: 'bar' } },
    ])

    computeClassNames(map)
      .should.have.members(['foo', 'bar'])
  })

  it('combines only unique classNames', () => {
    const map = new Set([
      { props: { className: 'foo' } },
      { props: { className: 'bar' } },
      { props: { className: 'foo bar baz' } },
    ])

    computeClassNames(map)
      .should.have.members(['foo', 'bar', 'baz'])
  })

  it('omits false, undefined and null classNames', () => {
    const map = new Set([
      { props: { className: 'foo' } },
      { props: {} },
      { props: { className: false } },
      { props: { className: null } },
      { props: { className: undefined } },
      { props: { className: '0' } },
      { props: { className: 'false' } },
    ])

    computeClassNames(map)
      .should.have.members(['foo', '0', 'false'])
  })

  it('trims classNames', () => {
    const map = new Set([
      { props: { className: ' foo     bar ' } },
      { props: { className: '    baz qux' } },
    ])

    computeClassNames(map)
      .should.have.members(['foo', 'bar', 'baz', 'qux'])
  })
})
