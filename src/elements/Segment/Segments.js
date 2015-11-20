import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Segment extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Segments',
    type: META.type.element,
  };

  render() {
    const classes = classNames(
      'sd-segments',
      'ui',
      this.props.className,
      'segments',
    );

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
