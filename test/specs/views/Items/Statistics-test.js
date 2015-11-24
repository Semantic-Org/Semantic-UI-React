import React from 'react';
import {Statistics} from 'stardust';
import faker from 'faker';

describe('Statistics', () => {
  it('renders children', () => {
    const child = faker.hacker.phrase();
    render(<Statistics>{child}</Statistics>)
      .assertText(child);
  });
});
