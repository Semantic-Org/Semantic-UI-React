import React, { Component } from 'react'
import Types from './Types'
import Content from './Content'
import States from './States'
import Variations from './Variations'
import { Message } from 'stardust'

export default class HeaderExamples extends Component {
  render() {
    return (
      <div>
        <Message warning>
          Semantic UI uses both <code>&lt;div&gt;</code> and <code>&lt;h*&gt;</code> tags
          for headers. In Stardust, the <code>&lt;Header&gt;</code> component renders a
          <code>&lt;div&gt;</code>. While subcomponents, <code>&lt;Header.H*&gt;</code>,
          render an <code>&lt;h*&gt;</code>. See the examples below for further clarfication.
        </Message>
        <Types />
        <Content />
        <States />
        <Variations />
      </div>
    )
  }
}
