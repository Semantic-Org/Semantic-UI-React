import _ from 'lodash'

export const positionsMapping = {
  'top center': 'top',
  'top left': 'top-end',
  'top right': 'top-start',

  'bottom center': 'bottom',
  'bottom left': 'bottom-end',
  'bottom right': 'bottom-start',

  'right center': 'right',
  'left center': 'left',
}

export const positions = _.keys(positionsMapping)

export const placementMapping = {
  top: 'top center',
  'top-start': 'top left',
  'top-end': 'top right',

  bottom: 'bottom center',
  'bottom-end': 'bottom right',
  'bottom-start': 'bottom left',

  right: 'right center',
  left: 'left center',
}
