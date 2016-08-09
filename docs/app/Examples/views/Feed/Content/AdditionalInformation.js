import _ from 'lodash'
import React from 'react'
import { Feed } from 'stardust'

const { Content, Event, Extra, Label, Summary } = Feed
const imageElements = _.times(2, (i) => <img key={i} src='http://semantic-ui.com/images/wireframe/image.png' />)
const imageSources = _.times(2, () => 'http://semantic-ui.com/images/wireframe/image.png')

const AdditionalInformation = () => {
  return (
    <Feed>
      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Helen Troy</a> added 2 photos
          </Summary>
          <Extra images>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
          </Extra>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Helen Troy</a> added 2 photos
          </Summary>
          <Extra images={imageElements} />
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Helen Troy</a> added 2 photos
          </Summary>
          <Extra images={imageSources} />
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Helen Troy</a> added 2 photos
          </Summary>
          <Extra images>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
          </Extra>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/laura.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Laura Faucet</a> created a post
          </Summary>
          <Extra text>
            Have you seen what's going on in Israel? Can you believe it.
          </Extra>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/laura.jpg' />
        <Content date='3 days ago'>
          <Summary>
            <a>Laura Faucet</a> created a post
          </Summary>
          <Extra text="Have you seen what's going on in Israel? Can you believe it." />
        </Content>
      </Event>
    </Feed>
  )
}

export default AdditionalInformation
