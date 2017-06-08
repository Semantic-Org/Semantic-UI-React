import { dateUtils } from 'src/lib'

describe('dateUtils', () => {
  it('zeroPad only pads a single digit number with a leading zero', () => {
    const singleDigit = 3
    const doubleDigit = 11
    dateUtils.zeroPad(singleDigit).should.equal(`0${singleDigit}`)
    dateUtils.zeroPad(doubleDigit).should.equal(doubleDigit)
  })

  it('getFirstOfMonth returns the first of April 2017', () => {
    const date = new Date('2017-04-24')
    const firstOfApril = dateUtils.getFirstOfMonth(date)
    firstOfApril.getMonth().should.equal(3)
    firstOfApril.getDate().should.equal(1)
    firstOfApril.getFullYear().should.equal(2017)
  })

  it('daysInMonth returns the correct number of days in April (30)', () => {
    const date = new Date('2017-04-24')
    dateUtils.daysInMonth(date).should.equal(30)
  })

  it('lastMonth returns a date minus one month', () => {
    const date = new Date('2017-04-24')
    const lastMonth = dateUtils.lastMonth(date)
    lastMonth.getMonth().should.equal(date.getMonth() - 1)
  })

  it('yesterday returns a day before a given date', () => {
    const date = new Date('2017-04-24')
    const yesterday = dateUtils.yesterday(date)
    yesterday.getDate().should.equal(date.getDate() - 1)
  })

  it('tomorrow returns a day after a given date', () => {
    const date = new Date('2017-04-24')
    const tomorrow = dateUtils.tomorrow(date)
    tomorrow.getDate().should.equal(date.getDate() + 1)
  })

  it('defaultDateFormatter returns a zero padded standard format of a date', () => {
    const date = new Date('2017-04-02')
    const formatted = '2017-04-02'
    formatted.should.equal(dateUtils.defaultDateFormatter(date))
  })

  it('defaultTimeFormatter returns a zero padded standard time of a date', () => {
    const date = new Date('2017-04-02T2:01')
    const formatted = '02:01'
    formatted.should.equal(dateUtils.defaultTimeFormatter(date))
  })
})
