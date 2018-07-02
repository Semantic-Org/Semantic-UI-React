import { customPropTypes } from 'src/lib'

describe('suggest prop type', () => {
  it('should throw error when non-array argument given', () => {
    expect(() => customPropTypes.suggest('foo')).toThrowError(Error)
  })

  it('should return undefined when prop is valid', () => {
    const propType = customPropTypes.suggest(['foo', 'bar', 'baz'])
    expect(propType({ name: 'bar' }, 'name', 'FooComponent')).toBeUndefined()
  })

  it('should return Error with suggestions when prop is invalid', () => {
    const propType = customPropTypes.suggest(['foo', 'bar', 'baz'])
    const props = { name: 'bad', title: 'bat words' }

    const resultFooComponent = propType(props, 'name', 'FooComponent')
    expect(resultFooComponent).toBeInstanceOf(Error)
    expect(resultFooComponent.message).toBe(
      [
        'Invalid prop `name` of value `bad` supplied to `FooComponent`.\n',
        '\n',
        'Instead of `bad`, did you mean:\n',
        '  - bar\n',
        '  - baz\n',
        '  - foo\n',
      ].join(''),
    )

    const resultBarComponent = propType(props, 'title', 'BarComponent')
    expect(resultBarComponent).toBeInstanceOf(Error)
    expect(resultBarComponent.message).toBe(
      [
        'Invalid prop `title` of value `bat words` supplied to `BarComponent`.\n',
        '\n',
        'Instead of `bat words`, did you mean:\n',
        '  - bar\n',
        '  - baz\n',
        '  - foo\n',
      ].join(''),
    )
  })
})
