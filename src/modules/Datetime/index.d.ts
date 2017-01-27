mport {ReactFocusEvents, ReactFormEvents, ReactMouseEvents} from '../..';
import * as React from 'react';

export interface DatetimeProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  /** Label prefixed to an option added by a user. */

  /** Initial value of open. */
  defaultOpen?: boolean;

}
