import React from 'react';
import {Dropdown} from 'stardust';

describe('Dropdown', () => {
  it('has a default value', () => {
    const options = [
      {value: '', text: 'Please select a role'},
      {value: 'admin', text: 'Admin'},
      {value: 'editor', text: 'Editor'}
    ];
    const renderedDropdown = render(<Dropdown label='Roles' value='admin' options={options} />).findTag('select');
    renderedDropdown.props.value.should.equal('admin');
  });
  it('has assigned amount of options', () => {
    const options = [
      {value: '', text: 'Please select a color'},
      {value: 'red', text: 'red'},
      {value: 'green', text: 'green'},
      {value: 'orange', text: 'orange'},
      {value: 'purple', text: 'purple'},
      {value: 'blue', text: 'blue'}
    ];
    const renderedDropdown = render(<Dropdown options={options} />);
    renderedDropdown.findTag('select').props.children.length.should.equal(6);
    renderedDropdown.scryTag('option')[2].props.value.should.equal('green');
  });
});
