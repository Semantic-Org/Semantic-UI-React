import React from 'react';
import Field from 'src/components/Field/Field';
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

  it('can be small', () => {
    render(<Field small />).findClass('small');
  });

  it('can be large', () => {
    render(<Field large />).findClass('large');
  });

  it('can be inline', () => {
    render(<Field inline />).findClass('inline');
  });

  it('can be disabled', () => {
    render(<Field disabled />).findClass('disabled');
  });

  it('can be required', () => {
    render(<Field required />).findClass('required');
  });

  it('can have an error', () => {
    render(<Field error />).findClass('error');
  });

  it('can specify a width', () => {
    _.each(_.range(1, 17), (n) => {
      let classes = numberToWord(n) + ' wide';
      render(<Field width={n} />).findClass(classes);
    });
  });
});
