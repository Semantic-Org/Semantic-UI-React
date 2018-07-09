import * as React from 'react'

type EventStackHandler = (event: Event) => void

export interface EventStackProps {
  [key: string]: any

  /** An event name on which we will subscribe. */
  name: string

  /** An event handler or array of event handlers. */
  on: EventStackHandler | EventStackHandler[]

  /** A name of pool. */
  pool?: string

  /** A DOM element on which we will subscribe. */
  target: 'document' | 'window' | Element
}

declare class EventStack extends React.Component<EventStackProps, {}> {}

export default EventStack
