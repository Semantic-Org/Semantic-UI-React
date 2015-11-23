import React, {Children, Component, PropTypes} from 'react';
import _ from 'lodash';
import invariant from 'fbjs/lib/invariant';
import classNames from 'classnames';
import META from 'src/utils/Meta';
import Segment from './Segment';

export default class Segments extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    const {children} = this.props;

    invariant(
      !_.any( Children.map(children, child => child.type !== Segment) ),
      'May only contain children of type Segment.',
    );
  }

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
