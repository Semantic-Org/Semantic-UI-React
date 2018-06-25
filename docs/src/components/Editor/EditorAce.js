import React from 'react'

const EditorAce = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default

    require('brace/ext/language_tools')
    require('brace/mode/jsx')
    require('brace/mode/html')
    require('brace/theme/tomorrow')

    return <Ace {...props} />
  }

  return null
}

export default EditorAce
