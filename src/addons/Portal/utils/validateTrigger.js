import * as React from 'react'

/**
 * Asserts that a passed element can be used and that props will be applied properly.
 */
export default function validateTrigger(element) {
  React.Children.only(element)

  if (element.type === React.Fragment) {
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.')
  }
}
