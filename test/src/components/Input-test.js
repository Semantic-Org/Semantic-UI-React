import React from 'react';
import Input from 'src/components/Input/Input';

describe('Input', () => {
  it('has the input type of text by default', () => {
    render(<Input />).findTag('input').props.type.should.equal('text');
  });

  it('has a default value', () => {
    render(<Input defaultValue='John' />).findTag('input').props.defaultValue.should.equal('John');
  });

  it('has a type of phone', () => {
    render(<Input type='phone' />).findTag('input').props.type.should.equal('phone');
  });

  it('has a name of emailAddress', () => {
    render(<Input name='emailAddress' />).findTag('input').props.name.should.equal('emailAddress');
  });

  it('is an icon input if iconClass given', () => {
    render(<Input iconClass='linkedin' />).findTag('i').should.be.ok;
  });

  it('shows a popup on focus if data-content is given', () => {
    let renderedInput = render(<Input dataContent='Sample Popup'/>).first();
    renderedInput.elm.popup.called.should.equal(true);
  });
});
