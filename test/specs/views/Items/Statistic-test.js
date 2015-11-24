import _ from 'lodash';
import React from 'react';
import {Statistic} from 'stardust';
import faker from 'faker';

describe('Statistic', () => {
  it('renders value', () => {
    const value = faker.hacker.phrase();
    render(<Statistic value={value} />).assertText(value);
  });
  it('renders data', () => {
    const data = _.random(0, 10000000);
    render(<Statistic data={data} />).assertText(data);
  });
});
