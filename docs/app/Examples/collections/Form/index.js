import React, { Component } from 'react'
import FormContentExamples from './Content/FormContentExamples'
import FormTypesExamples from './Types/FormTypesExamples'
import FormFieldVariationsExamples from './FieldVariations/FormFieldVariationsExamples'
import FormGroupVariationsExamples from './GroupVariations/FormGroupVariationsExamples'
import FormFormVariationsExamples from './FormVariations/FormFormVariationsExamples'
import FormStatesExamples from './States/FormStatesExamples'
import FormValidationExamples from './Validation/FormValidationExamples'

export default class FormExamples extends Component {
  render() {
    return (
      <div>
        <FormTypesExamples />
        <FormContentExamples />
        <FormStatesExamples />
        <FormFormVariationsExamples />
        <FormFieldVariationsExamples />
        <FormGroupVariationsExamples />
        <FormValidationExamples />
      </div>
    )
  }
}
