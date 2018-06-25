import _ from 'lodash'

const normalizeHandlers = handlers => (_.isArray(handlers) ? handlers : [handlers])

export default normalizeHandlers
