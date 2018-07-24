import { partitionHTMLProps } from 'src/lib/htmlPropsUtils'

const props = {
  autoFocus: false,
  className: 'foo',
  placeholder: 'baz',
  required: true,
}

describe('partitionHTMLProps', () => {
  it('should return two arrays with objects', () => {
    expect(partitionHTMLProps(props)).toHaveLength(2)
  })

  it('should split props by definition', () => {
    const [htmlProps, rest] = partitionHTMLProps(props)

    expect(htmlProps).toEqual({
      autoFocus: false,
      placeholder: 'baz',
      required: true,
    })
    expect(rest).toEqual({ className: 'foo' })
  })

  it('should split props by own definition', () => {
    const [htmlProps, rest] = partitionHTMLProps(props, {
      htmlProps: ['placeholder', 'required'],
    })

    expect(htmlProps).toEqual({ placeholder: 'baz', required: true })
    expect(rest).toEqual({ autoFocus: false, className: 'foo' })
  })

  describe('aria', () => {
    it('split aria props by default to htmlProps', () => {
      const [htmlProps, rest] = partitionHTMLProps({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })

      expect(htmlProps).toEqual({
        'aria-atomic': false,
        'aria-busy': true,
        role: 'bar',
      })
      expect(rest).toEqual({ className: 'foo' })
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

      expect(htmlProps).toEqual({})
      expect(rest).toEqual({
        'aria-atomic': false,
        'aria-busy': true,
        className: 'foo',
        role: 'bar',
      })
    })
  })
})
