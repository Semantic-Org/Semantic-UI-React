import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListLinkExample extends Component {
  render() {
    const link1 = <a>What is a FAQ?</a>;
    const link2 = <a>Who is our user base?</a>;
    const link3 = <a>Where is our office located?</a>;
    return (
      <List>
        <ListItem description={link1} />
        <ListItem description={link2} />
        <ListItem description={link3} />
      </List>
    );
  }
}
