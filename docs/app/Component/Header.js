import React, {Component} from 'react';
import Icon from 'src/components/Icon/Icon';

class Header extends Component {
  render() {
    let colors = [
      'red',
      'green',
      'purple',
      'blue',
      'black',
      'brown',
      'teal',
      'pink',
      'olive',
      'yellow',
      'orange',
      'gray',
      'violet'
    ];

    let getStars = function() {
      return _.times(20, (index) => {
        return (
          <i className='icons' key={index}>
            <Icon className={`
              ${_.sample(['small', 'large', '', 'big'])} loading star icon
              ${_.sample(colors)}`}
            />
            <Icon className={`
              ${_.sample(['small', 'large', '', 'big'])} star loading icon
              ${_.sample(colors)}`}
            />
          </i>
        );
      });
    };
    return (
      <div style={{marginBottom: '100px'}}>
        <h1 style={{textAlign: 'center'}}>
          {getStars()}
          {getStars()}
        </h1>
        <h1 style={{textAlign: 'center', fontSize: '120px'}}>
          STARDUST
        </h1>
        <h1 style={{textAlign: 'center'}}>
          {getStars()}
          {getStars()}
        </h1>
      </div>
    );
  }
}

export default Header;
