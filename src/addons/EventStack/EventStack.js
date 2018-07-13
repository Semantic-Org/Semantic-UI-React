import PropTypes from 'prop-types'
import { PureComponent } from 'react'

import { eventStack } from '../../lib'

/**
 * This component exposes the EventStack API as public and provides a declarative way to manage it.
 */
export default class EventStack extends PureComponent {
  static propTypes = {
    /** An event name on which we will subscribe. */
    name: PropTypes.string.isRequired,

    /** An event handler or array of event handlers. */
    on: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]).isRequired,

    /** A name of pool. */
    pool: PropTypes.string,

    /** A DOM element on which we will subscribe. */
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['document', 'window']),
      PropTypes.instanceOf(Element),
    ]).isRequired,
  }

  static defaultProps = {
    pool: 'default',
  }

  componentDidMount() {
    this.subscribe(this.props)
  }

  componentDidUpdate(prevProps) {
    this.unsubscribe(prevProps)
    this.subscribe(this.props)
  }

  componentWillUnmount() {
    this.unsubscribe(this.props)
  }

  subscribe(props) {
    const { name, on, pool, target } = props

    eventStack.sub(name, on, { pool, target })
  }

  unsubscribe(props) {
    const { name, on, pool, target } = props

    eventStack.unsub(name, on, { pool, target })
  }

  render() {
    return null
  }
}
