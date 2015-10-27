import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListDescriptionExample extends Component {
  render() {
    const mapIcon = <i className='map marker icon' />;

    return (
      <List>
        <ListItem image={mapIcon} header='Chicago' description='This city is located in the state of Illinois' />
        <ListItem image={mapIcon} header='Nashville' description='This city is located in the state of Tennessee' />
      </List>
    );
  }
}
