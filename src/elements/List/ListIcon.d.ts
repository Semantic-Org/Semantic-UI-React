import * as React from 'react';

import { SemanticVERTICALALIGNMENTS } from '../..';
import { IconProps } from '../Icon';

export interface ListIconProps extends IconProps {
  /** Additional classes. */
  className?: string;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

declare const ListIcon: React.StatelessComponent<ListIconProps>;

export default ListIcon;
