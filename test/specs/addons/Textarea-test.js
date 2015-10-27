import React from 'react';
import {Textarea} from 'stardust';

describe('Textarea', () => {
  it('has a default value', () => {
    render(<Textarea defaultValue='Hello World' />)
      .findTag('textarea')
      .value.should.equal('Hello World');
  });
  it('has a name assigned', () => {
    render(<Textarea name='sample-post' />)
      .first()
      .props.name.should.equal('sample-post');
  });
  it('has assigned amount of rows', () => {
    render(<Textarea rows='6' />)
      .findTag('textarea')
      .getAttribute('rows')
      .should.equal('6');
  });
});
