import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Header, Loader } from 'stardust'

const containerStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100vh',
  zIndex: 3000,
}

const textStyle = {
  position: 'absolute',
  padding: '1em',
  top: 0,
  left: 0,
  right: 0,
  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2 ))',
  zIndex: 4000,
}

const imageStyle = {
  position: 'absolute',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  zIndex: 2000,
}

// we use slightly random image sizes to ensure we get a new image from unsplash.it
const getImageUrl = () => `url(//unsplash.it/${_.random(1500, 1600)}/${_.random(1100, 1200)}})`

class PageNotFound extends Component {
  state = { backgroundImage: getImageUrl() }

  getNewImage = () => this.setState({ backgroundImage: getImageUrl() })

  render() {
    const { backgroundImage } = this.state
    return (
      <div style={containerStyle}>
        <div style={textStyle}>
          <Header inverted>
            Couldn't find that, but check this out:
          </Header>
          <Button className='mini inverted basic' onClick={this.getNewImage}>
            See Another
          </Button>
        </div>
        <div style={{ ...imageStyle, backgroundImage }} />
        <Loader active />
      </div>
    )
  }
}

export default PageNotFound
