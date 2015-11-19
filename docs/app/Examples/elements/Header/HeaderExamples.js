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
          Semantic UI uses conventional h1, h2, etc... for headers. For cleanliness in Stardust,
          we've created a Header component that uses sub-components for specifying header clasess.
          For example, a h2 tag will written as Header.H2. See the examples below for further clarfication.
        </Message>
        <HeaderTypesExamples />
        <HeaderContentExamples />
        <HeaderStatesExamples />
        <HeaderVariationsExamples />
      </div>
    );
  }
}
