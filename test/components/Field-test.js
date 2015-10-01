import React from 'react';
import Field from 'components/Field/Field';
import Textarea from 'components/Textarea/Textarea';

describe('Field', () => {
  it('has a label', () => {
    render(<Field label='First Name' />).findTag('label').should.be.ok;
    render(<Field label='First Name' />).findTag('label').props.children.should.equal('First Name');
  });
  it('renders textarea child element', () => {
    let renderedField = render(
      <Field label='First Name'>
        <Textarea name='firstName' />
      </Field>
    );
    renderedField.findTag('textarea').should.be.an('object');
  });
});
