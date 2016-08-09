import React, { Component } from 'react'
import { Rating } from 'stardust'

export default class RatingOnRateExample extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating maxRating={5} onRate={this.handleRate} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
