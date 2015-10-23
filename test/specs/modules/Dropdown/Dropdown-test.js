import React from 'react';
import {Dropdown} from 'stardust';

describe.only('Dropdown', () => {
  it('has a default value', () => {
    const options = [
      {value: '', text: 'Please select a role'},
      {value: 'admin', text: 'Admin'},
      {value: 'editor', text: 'Editor'}
    ];
    render(<Dropdown label='Roles' defaultValue='admin' options={options} />)
      .findTag('select')
      .value.should.equal('admin');
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
    render(<Dropdown options={options} />)
      .scryTag('option')
      .map((opt, i) => {
        opt.text.should.equal(options[i].text);
        opt.value.should.equal(options[i].value);
      });
  });
});
