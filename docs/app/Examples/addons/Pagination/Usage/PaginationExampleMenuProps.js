import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExampleShorthand = () => (
  <Pagination
    defaultActivePage={1}
    pointing
    secondary
    showPreviousAndNext={false}
    totalPages={3}
  />
)

export default PaginationExampleShorthand
