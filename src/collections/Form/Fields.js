import _ from 'lodash';
import React, {Children, Component, PropTypes} from 'react';
import classNames from 'classnames';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import numberToWord from 'src/utils/numberToWord';
import META from 'src/utils/Meta.js';

export default class Fields extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    evenlyDivided: PropTypes.bool,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Fields',
    parent: 'Form',
    type: META.type.collection,
  };

  render() {
    let fieldCount = 0;
    Children.forEach(this.props.children, child => {
      _.get(child, 'type._meta.name') === 'Field' && fieldCount++;
    });
    fieldCount = numberToWord(fieldCount);

    const classes = classNames(
      'sd-fields',
      this.props.evenlyDivided && fieldCount,
      this.props.className,
      'fields'
    );
    const props = getUnhandledProps(this);
    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
