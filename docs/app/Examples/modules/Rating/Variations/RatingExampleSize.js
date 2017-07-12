import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingExampleSize = () => (
  <div>
    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='tiny' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='small' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='large' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
    <br />
    <br />
  </div>
)
export default RatingExampleSize
