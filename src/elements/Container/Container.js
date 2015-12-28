import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from '../../utils/Meta';

/**
 * A container that gives your content some side padding.
 */
export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Container',
    type: META.type.element,
  };

  render() {
    const classes = classNames(
      'sd-container',
      'ui',
      this.props.className,
      'container',
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
