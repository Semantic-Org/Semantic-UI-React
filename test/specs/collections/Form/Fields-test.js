import faker from 'faker';
import React from 'react';

import {Field, Fields} from 'stardust';

describe('Fields', () => {
  it('evenlyDivided adds the word class for the number of child fields', () => {
    render(
      <Fields evenlyDivided>
        <Field />
        <Field />
      </Fields>
    )
      .findClass('two fields');
  });
  it('renders children', () => {
    const child = faker.hacker.phrase();
    render(<Fields>{child}</Fields>)
      .assertText(child);
  });
});
