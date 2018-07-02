import computeClassNames from 'src/addons/MountNode/lib/computeClassNames'

describe('computeClassNames', () => {
  it('accepts Set as value', () => {
    const classNames = computeClassNames(new Set())

    expect(Array.isArray(classNames)).toBe(true)
    expect(classNames).toHaveLength(0)
  })

  it('combines classNames', () => {
    const map = new Set([{ props: { className: 'foo' } }, { props: { className: 'bar' } }])

    expect(computeClassNames(map)).toEqual(expect.arrayContaining(['foo', 'bar']))
  })

  it('combines only unique classNames', () => {
    const map = new Set([
      { props: { className: 'foo' } },
      { props: { className: 'bar' } },
      { props: { className: 'foo bar baz' } },
    ])

    expect(computeClassNames(map)).toEqual(expect.arrayContaining(['foo', 'bar', 'baz']))
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

    expect(computeClassNames(map)).toEqual(expect.arrayContaining(['foo', '0', 'false']))
  })

  it('trims classNames', () => {
    const map = new Set([
      { props: { className: ' foo     bar ' } },
      { props: { className: '    baz qux' } },
    ])

    expect(computeClassNames(map)).toEqual(expect.arrayContaining(['foo', 'bar', 'baz', 'qux']))
  })
})
