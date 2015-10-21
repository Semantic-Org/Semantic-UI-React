import React from 'react';
import {Textarea} from 'stardust';

describe('Textarea', () => {
  it('has a default value', () => {
    render(<Textarea defaultValue='Hello World' />)
      .findTag('textarea')
      .getDOMNode()
      .value.should.equal('Hello World');
  });
  it('has a name assigned', () => {
    const renderedTextarea = render(<Textarea name='sample-post' />);
    expect(renderedTextarea.first().props.name).to.equal('sample-post');
  });
  it('has assigned amount of rows', () => {
    const renderedTextarea = render(<Textarea rows='6' />);
    expect(renderedTextarea.findTag('textarea').props.rows).to.equal('6');
  });
});
