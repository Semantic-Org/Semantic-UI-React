import PropTypes from 'prop-types';
import React from 'react';

function SearchCategoryLayout(props) {
  var categoryContent = props.categoryContent,
      resultsContent = props.resultsContent;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, categoryContent), /*#__PURE__*/React.createElement("div", {
    className: "results"
  }, resultsContent));
}

SearchCategoryLayout.handledProps = ["categoryContent", "resultsContent"];
SearchCategoryLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  /** The rendered category content */
  categoryContent: PropTypes.element.isRequired,

  /** The rendered results content */
  resultsContent: PropTypes.element.isRequired
} : {};
export default SearchCategoryLayout;