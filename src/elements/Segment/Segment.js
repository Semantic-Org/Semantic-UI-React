import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Segment extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.any,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Segment',
    type: META.type.element,
  };

  render() {
    const heading = <h4 className='sd-segment-heading ui header'>{this.props.heading}</h4>;
    const classes = classNames(
      'sd-segment',
      'ui',
      this.props.className,
      'segment'
    );

    return (
      <div {...this.props} className={classes}>
        {this.props.heading && heading}
        {this.props.children}
      </div>
    );
  }
}
