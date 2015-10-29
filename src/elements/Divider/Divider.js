import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Divider extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    header: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Divider',
    type: META.type.element,
  };

  render() {
    const children = _.clone(this.props.children);
    const header = <div className='header'>{this.props.header}</div>;
    const classes = classNames(
      'sd-button',
      'ui',
      this.props.className,
      'divider'
    );
    return (
      <div {...this.props} className={classes}>
        <div className='divider'>
          {children | header}
        </div>
      </div>
    );
  }
}
