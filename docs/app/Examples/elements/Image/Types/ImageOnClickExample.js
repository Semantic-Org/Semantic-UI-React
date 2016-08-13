import React, { Component } from 'react'
import { Image } from 'stardust'

const src = 'http://semantic-ui.com/images/wireframe/image-text.png'

class ImageOnClickExample extends Component {
  handleClick = () => this.setState({})

  render() {
    const { didClick } = this.state

    return (
      <div>
        <Image src={src} size='small' onClick={this.handleClick} />
        {didClick && (
          <p>Captured image click!</p>
        )}
      </div>
    )
  }
}

export default ImageOnClickExample
