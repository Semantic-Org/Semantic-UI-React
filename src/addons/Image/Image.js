import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-image',
      'ui',
      this.props.className,
      'image',
    );
    return (
      <div {...this.props} className={classes}>
        <img src={this.props.src} />
      </div>
    );
  }
}

