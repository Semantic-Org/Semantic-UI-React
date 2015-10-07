import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

/**
 * A container that gives your content some side padding.
 *
 * @example
 * <Container>
 *   <div>
 *     <h1>This is content</h1>
 *   </div>
 * </Container>
 */

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
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
