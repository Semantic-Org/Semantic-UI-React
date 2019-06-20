import keys from 'lodash/keys'
import invert from 'lodash/invert'

export const positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',

  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',

  'right center': 'right',
  'left center': 'left',
}

export const positions = keys(positionsMapping)

export const placementMapping = invert(positionsMapping)
