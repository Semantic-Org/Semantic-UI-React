#!/usr/bin/env zsh

rm parts/*
files=(Actions Content Description Divider Extra Header Item Menu Meta Label Value Avatar Bar Date Event ImageContent Summary Title)

for file in $files; do
  class="${file}"
  file_location="parts/${class}.js"
  touch ${file_location}
  echo "import cx from 'classnames'" >> ${file_location}
  echo "import React, { PropTypes } from 'react'" >> ${file_location}
  echo "" >> ${file_location}
  echo "import META from '../utils/Meta'" >> ${file_location}
  echo "import { getUnhandledProps } from '../utils/propUtils'" >> ${file_location}
  echo "" >> ${file_location}
  echo "function ${class}(props) {" >> ${file_location}
  echo "  const { children, className } = props" >> ${file_location}
  echo "  const classes = cx(" >> ${file_location}
  echo "    className," >> ${file_location}
  echo "    '${file:l}'" >> ${file_location}
  echo "  )" >> ${file_location}
  echo "  const rest = getUnhandledProps(${class}, props)" >> ${file_location}
  echo "  return (" >> ${file_location}
  echo "    <div className={classes} {...rest}>" >> ${file_location}
  echo "      {children}" >> ${file_location}
  echo "    </div>" >> ${file_location}
  echo "  )" >> ${file_location}
  echo "}" >> ${file_location}
  echo "" >> ${file_location}
  echo "${class}._meta = {" >> ${file_location}
  echo "  library: META.library.semanticUI," >> ${file_location}
  echo "  type: META.type.part," >> ${file_location}
  echo "  name: '${class}'" >> ${file_location}
  echo "}" >> ${file_location}
  echo "" >> ${file_location}
  echo "${class}.propTypes = {" >> ${file_location}
  echo "  /** Primary content of the ${class}. */" >> ${file_location}
  echo "  children: PropTypes.node," >> ${file_location}
  echo "" >> ${file_location}
  echo "  /** Classes to add to the ${class} className. */" >> ${file_location}
  echo "  className: PropTypes.string," >> ${file_location}
  echo "}" >> ${file_location}
  echo "" >> ${file_location}
  echo "export default ${class}" >> ${file_location}
done;
