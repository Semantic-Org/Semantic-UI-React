import normalizeHandlers from 'src/lib/eventStack/normalizeHandlers'

describe('normalizeHandlers', () => {
  it('will create an array if it is not passed', () => {
    const handlers = normalizeHandlers('foo')

    expect(Array.isArray(handlers)).toBe(true)
    expect(handlers).toContain('foo')
  })

  it('will return the same array', () => {
    const handlers = ['foo', 'bar']

    expect(normalizeHandlers(handlers)).toBe(handlers)
  })
})
