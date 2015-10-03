import React from 'react';
import Select from 'src/components/Select/Select';

describe('Select', () => {
  it('has a default value', () => {
    let options = [
      {value: '', text: 'Please Select a Role'},
      {value: 'admin', text: 'Admin'},
      {value: 'editor', text: 'Editor'}
    ];
    let renderedSelect = render(<Select label='Roles' value='admin' options={options} />).findTag('select');
    renderedSelect.props.value.should.equal('admin');
  });
  it('has assigned amount of options', () => {
    let options = [
      {value: '', text: 'Please Select a Color'},
      {value: 'red', text: 'red'},
      {value: 'green', text: 'green'},
      {value: 'orange', text: 'orange'},
      {value: 'purple', text: 'purple'},
      {value: 'blue', text: 'blue'}
    ];
    let renderedSelect = render(<Select options={options} />);
    renderedSelect.findTag('select').props.children.length.should.equal(6);
    renderedSelect.scryTag('option')[2].props.value.should.equal('green');
  });
});
