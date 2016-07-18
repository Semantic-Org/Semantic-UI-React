import React, { Component } from 'react'
import Content from './Content'
import Types from './Types'
import Variations from './Variations'
import FieldVariations from './FieldVariations'
import GroupVariations from './GroupVariations'
import States from './States'
import Validation from './Validation'

export default class FormExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <Content />
        <States />
        <Variations />
        <FieldVariations />
        <GroupVariations />
        <Validation />
      </div>
    )
  }
}
