import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import customPropTypes from '../../utils/customPropTypes';

export default class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentClass: PropTypes.string,
    description: customPropTypes.mutuallyExclusive(['children']),
    extra: PropTypes.node,
    heading: PropTypes.node,
    image: PropTypes.node,
    meta: PropTypes.node,
  };

  static defaultProps = {
    contentClass: 'middle aligned',
  };

  render() {
    const heading = <div className='header'>{this.props.heading}</div>;
    const meta = <div className='meta'>{this.props.meta}</div>;
    const description = <div className='description'>{this.props.children || this.props.description}</div>;
    const extra = <div className='extra'>{this.props.extra}</div>;
    const contentClass = classNames('sd-item-content', this.props.contentClass, 'content');
    const content = (
      <div className={contentClass}>
        {this.props.heading && heading}
        {this.props.meta && meta}
        {this.props.children && description || this.props.description && description}
        {this.props.extra && extra}
      </div>
    );
    const hasContent = !!this.props.heading || !!this.props.meta || !!this.props.extra || !!this.props.children
    || !!this.props.description;

    const classes = classNames(
      'sd-item',
      this.props.className,
      'item',
    );
    const props = _.clone(this.props);
    // Delete all static PropTypes props in cloned porps object before spreading of props onto rendered component
    delete props.children;
    delete props.className;
    delete props.description;
    delete props.extra;
    delete props.heading;
    delete props.image;
    delete props.meta;

    return (
      <div {...props} className={classes}>
        {this.props.image}
        {hasContent && content}
      </div>
    );
  }
}
