import React, { Component } from 'react'
import moment from 'moment'
import ReactDatepicker from 'react-datepicker'

class ReactDatepickerExampleBasic extends Component {
  state = {
    startDate: moment(),
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <ReactDatepicker
        selected={this.state.startDate}
        onChange={date => this.handleChange(date)}
      />
    )
  }
}

export default ReactDatepickerExampleBasic
