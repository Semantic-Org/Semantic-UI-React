import React from 'react';
import Textarea from '../../../src/addons/Textarea/Textarea';

describe('Textarea', () => {
  it('has a default value', () => {
    var renderedTextarea = render(<Textarea value='Hello World' />);
    expect(renderedTextarea.first().props.value).to.equal('Hello World');
  });
  it('has a name assigned', () => {
    var renderedTextarea = render(<Textarea name='sample-post' />);
    expect(renderedTextarea.first().props.name).to.equal('sample-post');
  });
  it('has 3 rows by default', () => {
    var renderedTextarea = render(<Textarea name='sample' />);
    expect(renderedTextarea.findTag('textarea').props.rows).to.equal('3');
  });
  it('has assigned amount of rows', () => {
    var renderedTextarea = render(<Textarea rows='6' />);
    expect(renderedTextarea.findTag('textarea').props.rows).to.equal('6');
  });
});
