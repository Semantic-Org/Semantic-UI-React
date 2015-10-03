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

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-container',
      this.props.className,
      'ui',
      'container'
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
