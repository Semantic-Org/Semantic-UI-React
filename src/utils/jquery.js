/**
 * Ensure the user's app only uses our one copy of jQuery and SUI jQuery plugins.
 */
import _ from 'lodash'
import { makeDebugger } from './debug'

const debug = makeDebugger('jquery')

let jQuery
if (window.jQuery) jQuery = window.jQuery
else if (_.get(window, '$.prototype.jquery')) jQuery = window.$

if (jQuery) {
  /* eslint-disable no-console */
  console.error([
    'Do not load jQuery on the window, it is bundled with Stardust.',
    'Stardust will soon be jQuery free: https://github.com/TechnologyAdvice/stardust/issues/247.',
    'Note that, until this is complete, including jQuery on the page will mean that jQuery ' +
    'is included twice: once on the window, and then again by Stardust and Semantic UI which ' +
    'will overwrite `window.jQuery`.',
  ].join(' '))
  /* eslint-enable no-console */
}

debug('Loading jQuery')
// load jQuery, then load SUI jQuery
window.jQuery = window.$ = require('jquery')

debug('Loading SUI Form plugin')
require('semantic-ui-css/components/form')
