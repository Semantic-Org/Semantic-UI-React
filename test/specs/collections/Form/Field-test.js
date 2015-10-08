import React from 'react';
import Field from 'src/collections/Form/Field';
import numberToWord from 'src/utils/numberToWord';

describe('Field', () => {
  it('has a label', () => {
    render(<Field label='First Name' />)
      .findTag('label')
      .props.children.should.equal('First Name');
  });

  it('renders children', () => {
    render(<Field label='First Name'>yo child</Field>)
      .findText('yo child');
  });

  it('can specify a width', () => {
    _.each(_.range(1, 17), (n) => {
      let classes = numberToWord(n) + ' wide';
      render(<Field width={n} />).findClass(classes);
    });
  });
});
