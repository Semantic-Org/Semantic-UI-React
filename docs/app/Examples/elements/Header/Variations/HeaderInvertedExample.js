import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Header.H4 className='red inverted'>Red</Header.H4>
        <Header.H4 className='orange inverted'>Orange</Header.H4>
        <Header.H4 className='yellow inverted'>Yellow</Header.H4>
        <Header.H4 className='olive inverted'>Olive</Header.H4>
        <Header.H4 className='green inverted'>Green</Header.H4>
        <Header.H4 className='teal inverted'>Teal</Header.H4>
        <Header.H4 className='blue inverted'>Blue</Header.H4>
        <Header.H4 className='purple inverted'>Purple</Header.H4>
        <Header.H4 className='violent inverted'>Violent</Header.H4>
        <Header.H4 className='pink inverted'>Pink</Header.H4>
        <Header.H4 className='brown inverted'>Brown</Header.H4>
        <Header.H4 className='grey inverted'>Grey</Header.H4>
      </Segment>
    )
  }
}
