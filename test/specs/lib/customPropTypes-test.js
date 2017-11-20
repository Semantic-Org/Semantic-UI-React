import { customPropTypes } from 'src/lib'

describe('suggest prop type', () => {
  it('should throw error when non-array argument given', () => {
    const propType = customPropTypes.suggest('foo')
    expect(() => propType({ name: 'bar' }, 'name', 'FooComponent')).to.throw(
      Error,
      /Invalid argument supplied to suggest, expected an instance of array./,
    )
  })

  it('should return undefined when prop is valid', () => {
    const propType = customPropTypes.suggest(['foo', 'bar', 'baz'])
    expect(propType({ name: 'bar' }, 'name', 'FooComponent')).to.equal(undefined)
  })

  it('should return Error with suggestions when prop is invalid', () => {
    const propType = customPropTypes.suggest(['foo', 'bar', 'baz'])
    const props = { name: 'bad', title: 'bat words' }

    const resultFooComponent = propType(props, 'name', 'FooComponent')
    expect(resultFooComponent).to.be.an.instanceof(Error)
    expect(resultFooComponent.message).to
      .equal(`Invalid prop \`name\` of value \`bad\` supplied to \`FooComponent\`.

Instead of \`bad\`, did you mean:
  - bar
  - baz
  - foo
`)

    const resultBarComponent = propType(props, 'title', 'BarComponent')
    expect(resultBarComponent).to.be.an.instanceof(Error)
    expect(resultBarComponent.message).to
      .equal(`Invalid prop \`title\` of value \`bat words\` supplied to \`BarComponent\`.

Instead of \`bat words\`, did you mean:
  - bar
  - baz
  - foo
`)
  })
})
