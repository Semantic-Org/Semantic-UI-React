import React from 'react'
import ElementType from './ElementType'

const getElementType = defaultAs => props => <ElementType defaultAs={defaultAs} {...props} />

export default getElementType
