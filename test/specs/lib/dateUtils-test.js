import { dateUtils } from 'src/lib'

describe('dateUtils', () => {
	it('zeroPad only pads a single digit number with a leading zero', () => {
    const singleDigit = 3
		const doubleDigit = 11
    assertEqual(dateUtils.zeroPad(singleDigit), `0${singleDigit}`)
		assertEqual(dateUtils.zeroPad(doubleDigit), doubleDigit)
  })

	it('getFirstOfMonth returns the first of April 2017', () => {
		const date = new Date('2017-04-24')
		const firstOfApril = dateUtils.getFirstOfMonth(date)
		assertEqual(firstOfApril.getMonth(), 3)
		assertEqual(firstOfApril.getDate(), 1)
		assertEqual(firstOfApril.getFullYear(), 2017)
	})

	it('daysInMonth returns the correct number of days in April (30)', () => {
		const date = new Date('2017-04-24')
		assertEqual(dateUtils.daysInMonth(date), 30)
	})

	it('lastMonth returns a date minus one month', () => {
		const date = new Date('2017-04-24')
		const lastMonth = dateUtils.lastMonth(date)
		assertEqual(lastMonth.getMonth(), date.getMonth()-1)
	})

	it('yesterday returns a day before a given date', () => {
		const date = new Date('2017-04-24')
		const yesterday = dateUtils.yesterday(date)
		assertEqual(yesterday.getDate(), date.getDate() - 1)
	})

	it('tomorrow returns a day after a given date', () => {
		const date = new Date('2017-04-24')
		const tomorrow = dateUtils.tomorrow(date)
		assertEqual(tomorrow.getDate(), date.getDate() + 1)
	})

	it('defaultDateFormatter returns a zero padded standard format of a date', () => {
		const date = new Date('2017-04-02')
		const formatted = '2017-04-02'
		assertEqual(formatted, dateUtils.defaultDateFormatter(date))
	})

	it('defaultTimeFormatter returns a zero padded standard time of a date', () => {
		const date = new Date('2017-04-02T2:01')
		const formatted = '02:01'
		assertEqual(formatted, dateUtils.defaultTimeFormatter(date))
	})

	
})
