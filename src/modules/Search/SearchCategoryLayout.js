import PropTypes from 'prop-types'
import React from 'react'

function SearchCategoryLayout(props) {
  const { categoryContent, resultsContent } = props

  return (
    <>
      <div className='name'>{categoryContent}</div>
      <div className='results'>{resultsContent}</div>
    </>
  )
}

SearchCategoryLayout.propTypes = {
  /** The rendered category content */
  categoryContent: PropTypes.element.isRequired,

  /** The rendered results content */
  resultsContent: PropTypes.element.isRequired,
}

export default SearchCategoryLayout
