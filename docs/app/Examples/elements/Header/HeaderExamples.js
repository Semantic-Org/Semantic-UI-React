import React, {Component} from 'react';
import HeaderTypesExamples from './Types/HeaderTypesExamples';
import HeaderContentExamples from './Content/HeaderContentExamples';
import HeaderStatesExamples from './States/HeaderStatesExamples';
import HeaderVariationsExamples from './Variations/HeaderVariationsExamples';
import {Message} from 'stardust';

export default class HeaderExamples extends Component {
  render() {
    return (
      <div>
        <Message className='warning'>
          Semantic UI uses both <code>&lt;div&gt;</code> and <code>&lt;h*&gt;</code> tags
          for headers. In Stardust, the <code>&lt;Header&gt;</code> component renders a
          <code>&lt;div&gt;</code>. While subcomponents, <code>&lt;Header.H*&gt;</code>,
          render an <code>&lt;h*&gt;</code>. See the examples below for further clarfication.
        </Message>
        <HeaderTypesExamples />
        <HeaderContentExamples />
        <HeaderStatesExamples />
        <HeaderVariationsExamples />
      </div>
    );
  }
}
