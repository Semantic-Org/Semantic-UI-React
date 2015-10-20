import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  };

  render() {
    let classes = classNames('sd-list-item', this.props.className, 'item');
    let header = <div className='header'>{this.props.header}</div>;
    return (
      <div {...this.props} className={classes}>
        {this.props.image || this.props.icon}
        <div className='content'>
          {this.props.header && header}
          <div className='description'>
            {this.props.children || this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
