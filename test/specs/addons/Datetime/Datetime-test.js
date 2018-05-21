import React from 'react'
import _ from 'lodash'

import Datetime from 'src/addons/Datetime/Datetime'
import DatetimeGrid from 'src/addons/Datetime/DatetimeGrid'
import DatetimeMenu from 'src/addons/Datetime/DatetimeMenu'
import DatetimeCalendar from 'src/addons/Datetime/DatetimeCalendar'
import DatetimeYears from 'src/addons/Datetime/DatetimeYears'
import DatetimeMonths from 'src/addons/Datetime/DatetimeMonths'
import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import DatetimeMinutes from 'src/addons/Datetime/DatetimeMinutes'
import * as common from 'test/specs/commonTests'
import * as dateUtils from 'src/lib/dateUtils'
import { domEvent } from 'test/utils'

let attachTo
let wrapper

const wrapperMount = (props, opts) => {
  const date = new Date('2018 5 10 07:30:00')
  attachTo = document.createElement('div')
  document.body.appendChild(attachTo)

  wrapper = mount(
    <Datetime time={false} placeholder='Select Date' defaultValue={date} {...props} />,
    { ...opts, attachTo },
  )
  return wrapper
}

describe('Datetime', () => {
  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.isConformant(Datetime, { rendersPortal: true })
  common.hasSubComponents(Datetime, [
    DatetimeGrid,
    DatetimeMenu,
    DatetimeCalendar,
    DatetimeYears,
    DatetimeMonths,
    DatetimeDays,
    DatetimeHours,
    DatetimeMinutes,
  ])

  describe('navigation', () => {
    const goToPrevPage = () => {
      wrapper.find('input').simulate('focus')
      document.querySelector('.icon.item .left').click()
    }

    const goToNextPage = () => {
      wrapper.find('input').simulate('focus')
      document.querySelector('.icon.item .right').click()
    }

    const calendarHeader = () => document.querySelectorAll('a.item').item(1).text

    describe('minute mode', () => {
      it('displays previous day when navigating backward', () => {
        wrapperMount({ mode: 'minute' })
        goToPrevPage()

        calendarHeader().should.match(/May\s9/)
      })

      it('displays next day when navigating forward', () => {
        wrapperMount({ mode: 'minute' })
        goToNextPage()

        calendarHeader().should.match(/May\s11/)
      })
    })

    describe('hour mode', () => {
      it('displays previous day when navigating backward', () => {
        wrapperMount({ mode: 'hour' })
        goToPrevPage()

        calendarHeader().should.match(/May\s9/)
      })

      it('displays next day when navigating forward', () => {
        wrapperMount({ mode: 'hour' })
        goToNextPage()

        calendarHeader().should.match(/May\s11/)
      })
    })

    describe('day mode', () => {
      it('displays previous month when navigating backward', () => {
        wrapperMount()
        goToPrevPage()

        calendarHeader().should.equal('April')
      })

      it('displays next month when navigation forward', () => {
        wrapperMount()
        goToNextPage()

        calendarHeader().should.equal('June')
      })
    })

    describe('month mode', () => {
      it('displays previous year when navigating backward', () => {
        wrapperMount({ mode: 'month' })
        goToPrevPage()

        calendarHeader().should.equal('2017')
      })

      it('displays next year when navigation forward', () => {
        wrapperMount({ mode: 'month' })
        goToNextPage()

        calendarHeader().should.equal('2019')
      })
    })

    describe('year mode', () => {
      it('displays past years when navigating backward', () => {
        wrapperMount({ mode: 'year' })
        goToPrevPage()

        calendarHeader().should.equal('2005 - 2013')
      })

      it('displays future years when navigating forward', () => {
        wrapperMount({ mode: 'year' })
        goToNextPage()

        calendarHeader().should.equal('2023 - 2031')
      })
    })
  })

  describe('onDateChangeMode', () => {
    const eventSourceCoordinates = domNode => ({
      clientX: domNode.getBoundingClientRect().x,
      clientY: domNode.getBoundingClientRect().y,
    })

    const calendarTextContent = () =>
      Array.prototype.map.call(
        document.querySelectorAll('td.selectable'), el => el.textContent,
      )

    it('displays months when mode is changed to "month"', () => {
      wrapperMount()
      wrapper.find('input').simulate('focus')
      const monthItem = document.querySelectorAll('a.item').item(1)
      domEvent.fire(monthItem, 'click', eventSourceCoordinates(monthItem))

      calendarTextContent().should.deep.equal(dateUtils.labels.months)
    })

    it('displays years when mode is changed to "year"', () => {
      wrapperMount()
      wrapper.find('input').simulate('focus')
      const yearItem = document.querySelectorAll('a.item').item(2)
      domEvent.fire(yearItem, 'click', eventSourceCoordinates(yearItem))

      calendarTextContent().should.deep.equal(_.map(_.range(2014, 2023), year => year.toString()))
    })
  })
})
