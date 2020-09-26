import _invert from "lodash/invert";
import _keys from "lodash/keys";
export var positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',
  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',
  'right center': 'right',
  'left center': 'left'
};
export var positions = _keys(positionsMapping);
export var placementMapping = _invert(positionsMapping);