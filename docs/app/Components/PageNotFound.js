import React, { Component } from 'react'

class PageNotFound extends Component {
  render() {
    const style = {
      backgroundImage: 'url(//unsplash.it/1600/1200/?random)',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }

    return (
      <div style={style} />
    )
  }
}

export default PageNotFound
