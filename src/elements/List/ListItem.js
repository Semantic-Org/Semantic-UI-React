import _ from 'lodash';
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
    const children = _.clone(this.props.children);
    const classes = classNames('sd-list-item', this.props.className, 'item');
    const description = _.clone(this.props.description);
    const hasHeader = !!this.props.header;
    const header = <div className='header'>{this.props.header}</div>;
    const icon = _.clone(this.props.icon);
    const image = _.clone(this.props.image);

    const props = _.clone(this.props);
    delete props.children;
    delete props.className;
    delete props.description;
    delete props.header;
    delete props.icon;
    delete props.image;

    return (
      <div {...props} className={classes}>
        {image || icon}
        <div className='content'>
          {hasHeader && header}
          <div className='description'>
            {children || description}
          </div>
        </div>
      </div>
    );
  }
}
