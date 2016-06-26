import React, { Component } from 'react'
import IconSetExamples from './IconSet/IconSetExamples'
import IconStatesExamples from './States/IconStatesExamples'
import IconVariationsExamples from './Variations/IconVariationsExamples'
import IconGroupsExamples from './Groups/IconGroupsExamples'
import { Message } from 'stardust'

export default class IconExamples extends Component {
  render() {
    return (
      <div>
        <Message className='info' icon='pointing right'>
          All icons are supported, see the Semantic UI Icon docs for more.
        </Message>
        <IconSetExamples />
        <IconStatesExamples />
        <IconVariationsExamples />
        <IconGroupsExamples />
      </div>
    )
  }
}
