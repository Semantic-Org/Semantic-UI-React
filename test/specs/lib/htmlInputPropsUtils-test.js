import { partitionHTMLInputProps } from 'src/lib/htmlInputPropsUtils'

const props = {
  autoFocus: false,
  className: 'foo',
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
      autoFocus: false,
      placeholder: 'baz',
      required: true,
    })
    rest.should.deep.equal({ className: 'foo' })
  })

  it('should split props by own definition', () => {
    const [htmlInputProps, rest] = partitionHTMLInputProps(props, {
      htmlProps: ['placeholder', 'required'],
    })

    htmlInputProps.should.deep.equal({ placeholder: 'baz', required: true })
    rest.should.deep.equal({ autoFocus: false, className: 'foo' })
  })

  describe('aria', () => {
    it('split aria props by default to htmlProps', () => {
      const [htmlInputProps, rest] = partitionHTMLInputProps({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })

      htmlInputProps.should.deep.equal({
        'aria-atomic': false,
        'aria-busy': true,
        role: 'bar',
      })
      rest.should.deep.equal({ className: 'foo' })
    })

    it('split aria props by default to rest when disabled', () => {
      const [htmlInputProps, rest] = partitionHTMLInputProps({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      }, { includeAria: false })

      htmlInputProps.should.deep.equal({})
      rest.should.deep.equal({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })
    })
  })
})
