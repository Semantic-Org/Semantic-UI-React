import React, { PropTypes } from 'react'

import {
  META,
  SUI,
  useVerticalAlignProp,
} from '../../lib'
import { Icon } from '../'

function ListIcon(props) {
  const { verticalAlign } = props

  return <Icon {...props} className={useVerticalAlignProp(verticalAlign)} />
}

ListIcon._meta = {
  name: 'ListIcon',
  parent: 'List',
  type: META.TYPES.ELEMENT,
  props: {
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

ListIcon.propTypes = {
  verticalAlign: PropTypes.oneOf(ListIcon._meta.props.verticalAlign),
}

export default ListIcon
