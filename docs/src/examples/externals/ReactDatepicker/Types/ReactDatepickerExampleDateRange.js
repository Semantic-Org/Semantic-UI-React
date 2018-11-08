import React, { Component } from 'react'
import moment from 'moment'
import ReactDatepicker from 'react-datepicker'

class ReactDatepickerExampleDateRange extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
  }

  handleStartChange(date) {
    this.setState({
      startDate: date,
    })
  }

  handleEndChange(date) {
    this.setState({
      endDate: date,
    })
  }

  render() {
    return (
      <React.Fragment>
        <ReactDatepicker
          selected={this.state.startDate}
          onChange={date => this.handleStartChange(date)}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <ReactDatepicker
          selected={this.state.endDate}
          onChange={date => this.handleEndChange(date)}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </React.Fragment>
    )
  }
}

export default ReactDatepickerExampleDateRange
