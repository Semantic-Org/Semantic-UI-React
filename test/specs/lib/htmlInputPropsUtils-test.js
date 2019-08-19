import { partitionHTMLProps } from 'src/lib/htmlPropsUtils'

const props = {
  autoFocus: false,
  className: 'foo',
  placeholder: 'baz',
  required: true,
}

describe('partitionHTMLProps', () => {
  it('should return two arrays with objects', () => {
    partitionHTMLProps(props).should.have.lengthOf(2)
  })

  it('should split props by definition', () => {
    const [htmlProps, rest] = partitionHTMLProps(props)

    htmlProps.should.deep.equal({
      autoFocus: false,
      placeholder: 'baz',
      required: true,
    })
    rest.should.deep.equal({ className: 'foo' })
  })

  it('should split props by own definition', () => {
    const [htmlProps, rest] = partitionHTMLProps(props, {
      htmlProps: ['placeholder', 'required'],
    })

    htmlProps.should.deep.equal({ placeholder: 'baz', required: true })
    rest.should.deep.equal({ autoFocus: false, className: 'foo' })
  })

  describe('aria', () => {
    it('split aria props by default to htmlProps', () => {
      const [htmlProps, rest] = partitionHTMLProps({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })

      htmlProps.should.deep.equal({
        'aria-atomic': false,
        'aria-busy': true,
        role: 'bar',
      })
      rest.should.deep.equal({ className: 'foo' })
    })

    it('split aria props by default to rest when disabled', () => {
      const [htmlProps, rest] = partitionHTMLProps(
        {
          'aria-atomic': false,
          'aria-busy': true,
          className: 'foo',
          role: 'bar',
        },
        { includeAria: false },
      )

      htmlProps.should.deep.equal({})
      rest.should.deep.equal({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })
    })
  })
})
