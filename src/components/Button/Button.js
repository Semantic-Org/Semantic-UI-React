import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import SIZES from '../../utils/SIZES';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(_.values(SIZES)),
    type: React.PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    type: 'button',
    children: 'Click Here',
  };

  render() {
    let classes = classNames('sd-button', 'ui', this.props.size, 'blue', 'button');
    return (
      <button className={classes} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
