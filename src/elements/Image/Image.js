import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Image extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
  };

  render() {
    const classes = classNames(
      'sd-image',
      'ui',
      this.props.className,
      'image'
    );
    const props = _.clone(this.props);
    delete props.src;
    delete props.alt;

    return (
      <div {...props} className={classes}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
