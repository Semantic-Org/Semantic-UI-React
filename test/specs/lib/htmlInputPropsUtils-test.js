import { partitionHTMLInputProps } from 'src/lib/htmlInputPropsUtils'

const props = {
  className: 'foo',
  name: 'bar',
  placeholder: 'baz',
  required: true,
}

describe('partitionHTMLInputProps', () => {
  it('should return two arrays with objects', () => {
    partitionHTMLInputProps(props).should.have.lengthOf(2)
  })

  it('should split props by definition', () => {
    const [htmlInputProps, rest] = partitionHTMLInputProps(props)

    htmlInputProps.should.deep.equal({
      name: 'bar',
      placeholder: 'baz',
      required: true,
    })
    rest.should.deep.equal({ className: 'foo' })
  })

  it('should split props by own definition', () => {
    const [htmlInputProps, rest] = partitionHTMLInputProps(props, ['placeholder', 'required'])

    htmlInputProps.should.deep.equal({ placeholder: 'baz', required: true })
    rest.should.deep.equal({ className: 'foo', name: 'bar' })
  })
})
