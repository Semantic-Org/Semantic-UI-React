import _ from 'lodash'
import React, { Component } from 'react'
import {
  Button,
  Datetime,
  Dropdown,
  Header,
  Input,
  Icon,
  Table,
  Label,
  Segment,
  Menu,
} from 'semantic-ui-react'

const isAM = hours => +hours >= 0 && +hours < 12
const getAMPM = hours => (isAM(hours) ? 'am' : 'pm')
const hr12 = hours => +hours + (isAM(hours) ? 12 : 0)

const sizeEM = 15

class DatetimeExampleFull extends Component {
  state = {
    date: new Date(),
  }

  table = children => (
    <Table
      style={{ width: '300px' }}
      fixed
      singleLine
      unstackable
      // basic='very'
      // attached='bottom'
      size='small'
      compact='very'
      textAlign='center'
    >
      {/* <Table.Header> */}
      {/* <Table.Row> */}
      {/* <Table.HeaderCell colSpan='2'>Hour</Table.HeaderCell> */}
      {/* <Table.HeaderCell colSpan='2'>Minute</Table.HeaderCell> */}
      {/* <Table.HeaderCell colSpan='2'>AM/PM</Table.HeaderCell> */}
      {/* </Table.Row> */}
      {/* </Table.Header> */}
      {children}
    </Table>
  )

  componentWillMount() {
    document.addEventListener('keydown', this.handleDocumentKeyDown)
    // document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
    // document.removeEventListener('click', this.handleDocumentClick)
  }

  handleDocumentKeyDown = (e) => {
    if (e.keyCode === 27) this.setState((prevState, props) => ({ mode: null }))
  }

  // handleDocumentClick = e => {
  //   if (e.keyCode === 27) this.setState((prevState, props) => ({ mode: null }))
  // }

  handleInputChange = (e) => {
    const { value } = e.target
    let hours = null
    let minutes = null

    switch (value.length) {
      case 1:
        hours = value
        minutes = 0
        break
      case 2:
        if (+value > 12) {
          hours = value[0]
          minutes = value[1] * 10
        } else if (+value > 0) {
          hours = value
          minutes = 0
        }
        break
      case 3:
        hours = value[0]
        minutes = value[1] + value[2]
        break
      case 4:
        hours = value[0] + value[1]
        minutes = value[2] + value[3]
        break
      default:
        break
    }

    if (minutes > 59) {
      hours = null
      minutes = null
    } else {
      hours = hr12(hours)
      minutes = _.padEnd(minutes, 2, '0')
    }

    // console.log({ value, hours, minutes, pm: isAM(hours) })

    this.setState((prevState, props) => {
      const d = new Date()
      return {
        value: new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes),
      }
    })
  }

  handleAMPMChange = () => {
    this.setState((prevState, props) => {
      const date = new Date(prevState.value)
      date.setHours((date.getHours() + 12) % 24)
      return { value: date }
    })
  }

  handleHourInputFocus = (e) => {
    e.target.select()
    this.setState((prevState, props) => ({ mode: 'hours' }))
  }

  handleMinuteInputFocus = (e) => {
    e.target.select()
    this.setState((prevState, props) => ({ mode: 'minutes' }))
  }

  handleHourInputChange = (e) => {
    const value = e.target.value

    this.setState((prevState, props) => {
      const date = new Date(prevState.value)
      date.setHours(value)
      return { value: date }
    })
  }

  handleMinuteInputChange = (e) => {
    const value = e.target.value

    this.setState((prevState, props) => {
      const date = new Date(prevState.value)
      date.setMinutes(value)
      return { value: date }
    })
  }

  handleInputBlur = () => {
    this.setState((prevState, props) => ({ mode: null }))
  }

  handleAMPMLabelClick = () => {
    this.setState((prevState, props) => {
      const date = new Date(prevState.value)
      date.setHours((date.getHours() + 12) % 24)
      return { value: date, mode: null }
    })
  }

  handleClockLabelClick = (e) => {
    const value = +e.target.innerText

    this.setState((prevState, props) => {
      const { mode } = prevState
      const date = new Date(prevState.value)
      let nextMode

      if (mode === 'minutes') {
        date.setMinutes(value)
        nextMode = null
      } else {
        const newHours = isAM(prevState.value.getHours())
          ? value
          : value + 12
        date.setHours(newHours)
        nextMode = 'minutes'
      }

      return { value: date, mode: nextMode }
    })
  }

  handleMouseEnter = () => {
    // enter hour selection mode, only if no mode is active
    const { mode } = this.state
    if (mode) return

    this.setState((prevState, props) => ({ mode: 'hours' }))
  }

  handleMouseLeave = () => {
    // exit hour selection mode
    const { mode } = this.state
    if (mode !== 'hours') return

    this.setState((prevState, props) => ({ mode: null }))
  }

  render() {
    const { date, mode } = this.state
    const dateHours = date.getHours()
    const dateMinutes = date.getMinutes()

    const displayHours = dateHours % 12 || 12
    const displayMinutes = _.padStart(dateMinutes, 2, '0')

    const ampm = getAMPM(dateHours)
    const isDay = dateHours >= 7 && dateHours < 19
    const value = `${displayHours}:${displayMinutes}${ampm}`
    const labelSizeEM = sizeEM / 5

    return (
      <div>
        <Datetime time defaultValue={new Date()} />
        <br />
        <br />
        <Segment compact textAlign='center' style={{ margin: '5em auto' }}>
          <div
            style={{
              margin: 'auto auto 0.25em auto',
              width: `${sizeEM / 3}em`,
              textAlign: 'center',
              fontSize: `${sizeEM / 5}em`,
            }}
          >
            <input
              style={{
                display: 'inline-block',
                padding: 0,
                margin: 0,
                width: '1.25em',
                height: '1em',
                textAlign: 'right',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: mode === 'hours' ? 'cornflowerblue' : 'inherit',
                opacity: mode && mode !== 'hours' ? 0.2 : 1,
                outline: 'none',
              }}
              value={displayHours}
              onBlur={this.handleInputBlur}
              onChange={this.handleHourInputChange}
              onClick={this.handleHourInputFocus}
              onFocus={this.handleHourInputFocus}
            />
            <strong
              style={{
                display: 'inline-block',
                height: '1em',
                lineHeight: 1,
                opacity: mode ? 0.2 : 1,
              }}
            >:</strong>
            <input
              style={{
                display: 'inline-block',
                padding: 0,
                margin: 0,
                width: '1.25em',
                height: '1em',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: mode === 'minutes' ? 'cornflowerblue' : 'inherit',
                opacity: mode && mode !== 'minutes' ? 0.2 : 1,
                outline: 'none',
              }}
              value={dateMinutes}
              onBlur={this.handleInputBlur}
              onChange={this.handleMinuteInputChange}
              onClick={this.handleMinuteInputFocus}
              onFocus={this.handleMinuteInputFocus}
            />
            <div
              style={{
                display: 'inline-block',
                opacity: mode ? 0.2 : 1,
                cursor: 'pointer',
              }}
              onClick={this.handleAMPMLabelClick}
            >
              <div
                style={{
                  display: 'block',
                  padding: '0',
                  margin: 0,
                  height: '1em',
                  lineHeight: 1,
                  fontSize: '0.45em',
                  background: 'none',
                  border: 'none',
                  opacity: !isAM(dateHours) ? 0.4 : 1,
                }}
              >
                AM
              </div>
              <div
                style={{
                  display: 'block',
                  padding: '0',
                  margin: 0,
                  height: '1em',
                  lineHeight: 1,
                  fontSize: '0.45em',
                  background: 'none',
                  border: 'none',
                  opacity: isAM(dateHours) ? 0.4 : 1,
                }}
              >
                PM
              </div>
            </div>
          </div>
          <Label
            basic={!mode}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              position: 'relative',
              overflow: 'hidden',
              margin: 0,
              fontSize: 'inherit',
              padding: 0,
              width: `${sizeEM}em`,
              height: `${sizeEM}em`,
              borderRadius: '100%',
              background: 'none',
            }}
          >
            {/* DOT */}
            {(
              <div
                style={{
                  position: 'absolute',
                  margin: 'auto',
                  width: `${sizeEM / 20}em`,
                  height: `${sizeEM / 20}em`,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: mode ? 'cornflowerblue' : '#555',
                  borderRadius: '100%',
                  zIndex: '2',
                }}
              />
            )}
            {(function hourHand() {
              let degrees = displayHours * 30
              if (!mode) degrees += (dateMinutes / 60) * 30
              return (
                <div
                  style={{
                    position: 'absolute',
                    margin: 'auto',
                    width: '7px',
                    top: `${sizeEM / 4}em`,
                    bottom: `${sizeEM / 2}em`,
                    left: 0,
                    right: 0,
                    opacity: !mode || mode === 'hours' ? 1 : 0.1,
                    background: mode === 'hours' ? 'cornflowerblue' : '#555',
                    borderRadius: '99em',
                    transformOrigin: '50% 100%',
                    transition: 'opacity 0.2s, transform 0.5s',
                    transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)',
                    transform: `rotateZ(${degrees}deg)`,
                    zIndex: '1',
                    pointerEvents: 'none',
                  }}
                />
              )
            }())}
            {(function minuteHand() {
              const degrees = dateMinutes * 6
              return (
                <div
                  style={{
                    position: 'absolute',
                    margin: 'auto',
                    width: '5px',
                    top: '10%',
                    bottom: `${sizeEM / 2}em`,
                    left: 0,
                    right: 0,
                    opacity: !mode || mode === 'minutes' ? 1 : 0.1,
                    background: mode === 'minutes' ? 'cornflowerblue' : '#555',
                    borderRadius: '99em',
                    transformOrigin: '50% 100%',
                    transition: 'opacity 0.2s, transform 0.5s',
                    transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)',
                    transform: `rotateZ(${degrees}deg)`,
                    zIndex: '1',
                    pointerEvents: 'none',
                  }}
                />
              )
            }())}
            {/* Numbers */}
            {_.times(12, (i) => {
              const hour = i || 12
              const degrees = (hour * 30) - 90
              const x = Math.cos(degrees * (Math.PI / 180))
              const y = Math.sin(degrees * (Math.PI / 180))
              const distance = (sizeEM / 2) - (labelSizeEM / 2)
              // subtract radius of the number labels
              const emX = `${x * distance}em`
              const emY = `${y * distance}em`

              return (
                <Label
                  as='a'
                  basic={mode === 'hours' || mode === 'minutes'}
                  color={mode === 'hours' || mode === 'minutes' ? 'blue' : null}
                  key={i}
                  style={{
                    position: 'absolute',
                    margin: 'auto',
                    padding: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    fontSize: 'inherit',
                    width: `${labelSizeEM}em`,
                    height: `${labelSizeEM}em`,
                    lineHeight: `${labelSizeEM}em`,
                    textAlign: 'center',
                    borderRadius: '100%',
                    transition: 'color 0.2s',
                    transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)',
                    transform: `translate3d(${emX}, ${emY}, 0)`,
                    background: 'none',
                    border: 'none',
                  }}
                  onClick={this.handleClockLabelClick}
                  content={mode === 'minutes' ? _.padStart(hour % 12 * 5, 2, '0') : hour}
                />
              )
            })}
            {/* Icon */}
            {/* {!mode && ( */}
            {/* <Icon */}
            {/* color={isDay ? 'yellow' : 'teal'} */}
            {/* name={isDay ? 'sun' : 'moon'} */}
            {/* style={{ */}
            {/* position: 'absolute', */}
            {/* margin: 'auto', */}
            {/* bottom: '62%', */}
            {/* left: 0, */}
            {/* right: 0, */}
            {/* fontSize: sizeEM / 6 + 'em', */}
            {/* opacity: mode && 0, */}
            {/* transition: 'opacity 0.2s', */}
            {/* transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)', */}
            {/* pointerEvents: 'none', */}
            {/* }} */}
            {/* /> */}
            {/* )} */}
            {mode && (
              <div
                style={{
                  position: 'absolute',
                  margin: 'auto',
                  bottom: '8em',
                  left: 0,
                  right: 0,
                  fontWeight: '100',
                  fontSize: `${sizeEM * 0.08}em`,
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              >
                {_.upperCase(mode)}
              </div>
            )}
            {/* {mode === 'am/pm' && ( */}
            {/* <div */}
            {/* style={{ */}
            {/* position: 'absolute', */}
            {/* top: 0, */}
            {/* bottom: 0, */}
            {/* left: 0, */}
            {/* right: 0, */}
            {/* width: labelSizeEM + 'em', */}
            {/* height: labelSizeEM + 'em', */}
            {/* lineHeight: labelSizeEM + 'em', */}
            {/* boxShadow: 'none', */}
            {/* textAlign: 'center', */}
            {/* borderRadius: '100%', */}
            {/* transition: 'color 0.2s', */}
            {/* transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)', */}
            {/* background: 'none', */}
            {/* border: 'none', */}
            {/* }} */}
            {/* > */}
            {/* <Label */}
            {/* as='a' */}
            {/* onClick={this.handleAMPMLabelClick} */}
            {/* active={isAM(dateHours)} */}
            {/* basic */}
            {/* color='blue' */}
            {/* content='AM' */}
            {/* style={{ */}
            {/* position: 'absolute', */}
            {/* padding: 0, */}
            {/* margin: 0, */}
            {/* width: labelSizeEM + 'em', */}
            {/* height: labelSizeEM + 'em', */}
            {/* lineHeight: labelSizeEM + 'em', */}
            {/* bottom: sizeEM / 5 + 'em', */}
            {/* left: sizeEM / 7.5 + 'em', */}
            {/* boxShadow: 'none', */}
            {/* textAlign: 'center', */}
            {/* borderRadius: '100%', */}
            {/* transition: 'color 0.2s', */}
            {/* transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)', */}
            {/* background: 'none', */}
            {/* border: 'none', */}
            {/* }} */}
            {/* /> */}
            {/* <Label */}
            {/* as='a' */}
            {/* onClick={this.handleAMPMLabelClick} */}
            {/* active={!isAM(dateHours)} */}
            {/* basic */}
            {/* color='blue' */}
            {/* content='PM' */}
            {/* style={{ */}
            {/* position: 'absolute', */}
            {/* padding: 0, */}
            {/* margin: 0, */}
            {/* width: labelSizeEM + 'em', */}
            {/* height: labelSizeEM + 'em', */}
            {/* lineHeight: labelSizeEM + 'em', */}
            {/* bottom: sizeEM / 5 + 'em', */}
            {/* right: sizeEM / 7.5 + 'em', */}
            {/* boxShadow: 'none', */}
            {/* textAlign: 'center', */}
            {/* borderRadius: '100%', */}
            {/* transition: 'color 0.2s', */}
            {/* transitionTimingFunction: 'cubic-bezier(.2,.7,.4,1)', */}
            {/* background: 'none', */}
            {/* border: 'none', */}
            {/* }} */}
            {/* /> */}
            {/* </div> */}
            {/* )} */}
          </Label>
          {/* <h4>{mode}</h4> */}
        </Segment>
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <div style={{ opacity: 0.4, fontWeight: 100 }}>{date.toLocaleString()}</div> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* {this.table( */}
        {/* <Table.Body> */}
        {/* <Table.Row> */}
        {/* <Table.Cell colSpan='6'> */}
        {/* <strong>Hours</strong> */}
        {/* </Table.Cell> */}
        {/* </Table.Row> */}
        {/* <Table.Row> */}
        {/* {_.times(6, i => ( */}
        {/* <Table.Cell key={i} selectable> */}
        {/* <a style={{ cursor: 'pointer' }}>{i + 1}</a> */}
        {/* </Table.Cell> */}
        {/* ))} */}
        {/* </Table.Row> */}
        {/* <Table.Row> */}
        {/* {_.times(6, i => ( */}
        {/* <Table.Cell key={i} selectable> */}
        {/* <a style={{ cursor: 'pointer' }}>{i + 7}</a> */}
        {/* </Table.Cell> */}
        {/* ))} */}
        {/* </Table.Row> */}
        {/* </Table.Body> */}
        {/* )} */}
        {/* {this.table( */}
        {/* <Table.Body> */}
        {/* {(function() { */}
        {/* // const step = 1 */}
        {/* const step = 2 */}
        {/* // const step = 5 */}
        {/* // const step = 10 */}
        {/* // const step = 15 */}
        {/* // const step = 30 */}
        {/* const cols = { */}
        {/* 1: 10, */}
        {/* 2: 7, */}
        {/* 5: 6, */}
        {/* 10: 6, */}
        {/* 15: 4, */}
        {/* 30: 2, */}
        {/* }[step] */}

        {/* return [ */}
        {/* <Table.Row key='header'> */}
        {/* <Table.Cell colSpan={cols}> */}
        {/* <strong>Minutes</strong> */}
        {/* </Table.Cell> */}
        {/* </Table.Row>, */}
        {/* ..._.times(60 / (step * cols), i => ( */}
        {/* <Table.Row key={`cells-${i}`}> */}
        {/* {_.times(cols, j => { */}
        {/* const minute = (i + 1) * (j * step) */}
        {/* // const display = ('' + minute).length === 1 ? `0${minute}` : minute */}
        {/* return ( */}
        {/* <Table.Cell key={j} selectable> */}
        {/* <a style={{ cursor: 'pointer' }}> */}
        {/* /!*{display}*!/ */}
        {/* /!*{minute}*!/ */}
        {/* /!*{i * cols + j * step}*!/ */}
        {/* {i}-{j} */}
        {/* /!*{(((60 / (i + 1)) % 60) + (j * step)) % 60}*!/ */}
        {/* </a> */}
        {/* </Table.Cell> */}
        {/* ) */}
        {/* })} */}
        {/* </Table.Row> */}
        {/* )), */}
        {/* ] */}
        {/* }())} */}
        {/* </Table.Body> */}
        {/* )} */}
        {/* {this.table( */}
        {/* <Table.Body> */}
        {/* <Table.Row> */}
        {/* <Table.Cell colSpan='6' selectable> */}
        {/* <br /> */}
        {/* <a style={{ cursor: 'pointer' }}>AM</a> */}
        {/* <br /> */}
        {/* </Table.Cell> */}
        {/* <Table.Cell colSpan='6' selectable> */}
        {/* <br /> */}
        {/* <a style={{ cursor: 'pointer' }}>PM</a> */}
        {/* <br /> */}
        {/* </Table.Cell> */}
        {/* </Table.Row> */}
        {/* </Table.Body> */}
        {/* )} */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <div> */}
        {/* <Header> parsed: {value} */}
        {/* </Header> */}
        {/* <Input */}
        {/* defaultValue={value} */}
        {/* placeholder='Parse time' */}
        {/* action={{ basic: true, content: ampm, onClick: this.handleAMPMChange }} */}
        {/* onChange={this.handleInputChange} */}
        {/* /> */}
        {/* </div> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <Dropdown */}
        {/* search */}
        {/* selection */}
        {/* icon={null} */}
        {/* placeholder='Time' */}
        {/* options={_.flatten(_.times(24, i => { */}
        {/* const hour = (i + 1) % 12 || 12 */}
        {/* const ampm = hour < 12 ? 'am' : 'pm' */}
        {/* return _.times(60, j => { */}
        {/* const minute = _.padStart(j, 2, '0') */}
        {/* const time = `${hour}:${minute} ${ampm}` */}
        {/* return { key: time, value: time, text: time } */}
        {/* }) */}
        {/* }))} */}
        {/* /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <div style={{ display: 'flex', flexDirection: 'row', width: '200px', height: '200px' }}> */}
        {/* <div style={{ flex: '1', height: '100%', overflowY: 'scroll' }}> */}
        {/* {_.times(12, i => <div>{i + 1}</div>)} */}
        {/* </div> */}
        {/* <div style={{ flex: '1', height: '100%', overflowY: 'scroll' }}> */}
        {/* {_.times(60, i => <div key={i}>{i + 1}</div>)} */}
        {/* </div> */}
        {/* <div style={{ flex: '1', height: '100%', overflowY: 'scroll' }}> */}
        {/* <div>am</div> */}
        {/* <div>pm</div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}
export default DatetimeExampleFull
