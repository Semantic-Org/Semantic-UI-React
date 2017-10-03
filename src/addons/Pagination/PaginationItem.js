import _ from 'lodash'
import React, {Component} from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  keyboardKey,
  META,
} from '../../lib'
import Ref from '../Ref'
import Menu from '../../collections/Menu'

const keyMapping = {
  [keyboardKey.ArrowLeft]: 'onLeftKeyDown',
  [keyboardKey.ArrowRight]: 'onRightKeyDown',
}

/**
 * An item of a pagination.
 */
class PaginationItem extends Component {
  componentDidUpdate({ active: prev }) {
    const { active: current } = this.props

    if(current && current !== prev) this.ref.focus()
  }

  handleKeyDown = (e) => {
    const eventName = keyMapping[keyboardKey.getCode(e)]

    if(eventName) _.invoke(this.props, eventName, e, this.props)
  }

  handleRef = c => (this.ref = c)

  render() {
    const {active, ...rest} = this.props
    const ariaLabel = 'TODO'

    // TODO: Remove Ref https://github.com/Semantic-Org/Semantic-UI-React/pull/1879 will be merged
    return (
      <Ref innerRef={this.handleRef}>
        {Menu.Item.create({
          ...rest,
          active,
          'aria-current': active,
          'aria-label': ariaLabel,
          onKeyDown: this.handleKeyDown,
        })}
      </Ref>
    )
  }
}

PaginationItem.create = createShorthandFactory(PaginationItem, content => ({content}))

export default PaginationItem