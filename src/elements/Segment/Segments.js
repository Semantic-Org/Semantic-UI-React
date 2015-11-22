import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Segments extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Segments',
    type: META.type.element,
    parent: 'Segment'
  };

  render() {
    const {children} = this.props;

    const classes = classNames(
      'sd-segments',
      'ui',
      this.props.className,
      'segments',
    );

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}
