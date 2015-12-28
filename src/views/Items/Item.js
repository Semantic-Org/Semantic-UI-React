import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {mutuallyExclusive} from '../../utils/customPropTypes';
import META from '../../utils/Meta';

export default class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentClass: PropTypes.string,
    description: mutuallyExclusive(['children']),
    extra: PropTypes.node,
    header: PropTypes.node,
    image: PropTypes.node,
    meta: PropTypes.node,
  };

  static defaultProps = {
    contentClass: 'middle aligned',
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Item',
    type: META.type.view,
  };

  render() {
    const description = <div className='description'>{this.props.children || this.props.description}</div>;
    const extra = <div className='extra'>{this.props.extra}</div>;
    const header = <div className='header'>{this.props.header}</div>;

    const imageClasses = classNames(
      'sd-item-image',
      'ui',
      _.get(this.props, 'image.props.className'),
      'image',
    );
    const imageProps = _.omit(_.get(this.props, 'image.props', {}), 'className');
    const image = (
      <div className={imageClasses}>
        <img {...imageProps} />
      </div>
    );
    const meta = <div className='meta'>{this.props.meta}</div>;

    const contentClass = classNames('sd-item-content', this.props.contentClass, 'content');
    const content = (
      <div className={contentClass}>
        {this.props.header && header}
        {this.props.meta && meta}
        {(this.props.children || this.props.description) && description}
        {this.props.extra && extra}
      </div>
    );
    const hasContent = !!this.props.header || !!this.props.meta || !!this.props.extra || !!this.props.children
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
    delete props.header;
    delete props.image;
    delete props.meta;

    return (
      <div {...props} className={classes}>
        {this.props.image && image}
        {hasContent && content}
      </div>
    );
  }
}
