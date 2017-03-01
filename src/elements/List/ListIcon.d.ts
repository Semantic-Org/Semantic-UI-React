import * as React from 'react';

import { SemanticVERTICALALIGNMENTS } from '../..';
import { IconProps } from '../Icon/Icon';

interface ListIconProps extends IconProps {
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

declare const ListIcon: React.StatelessComponent<ListIconProps>;

export default ListIcon;
