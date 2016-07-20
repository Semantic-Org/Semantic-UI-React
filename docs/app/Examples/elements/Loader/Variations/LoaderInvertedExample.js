import React from 'react'
import { Loader, Segment } from 'stardust'

// TODO: Update <Segment> usage to V1 API

const LoaderInvertedExample = () => (
  <Segment className='inverted'>
    <Loader active inverted />

    <br />
    <br />
    <br />
    <br />
  </Segment>
)

export default LoaderInvertedExample
