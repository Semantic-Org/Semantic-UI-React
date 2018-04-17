module.exports = (theme) => {
  const vars = {}

  /*******************************
              Comments
  *******************************/

  /*-------------------
        Elements
  --------------------*/

  /* Comment */
  vars.commentBackground = `#FFFFFF`
  vars.commentMargin = `1em 0em 0em`
  vars.commentPadding = `1em 1.5em`
  vars.commentBorder = `1px solid rgba(0, 0, 0, 0.1)`
  vars.commentDivider = `1px solid rgba(0, 0, 0, 0.1)`
  vars.firstCommentMargin = `1em`
  vars.firstCommentPadding = `1em`

  /* Nested Comment */
  vars.nestedCommentsMargin = `0em 0em 0.5em 0.5em`
  vars.nestedCommentsPadding = `1em 0em 0em 1em`
  vars.nestedCommentBackground = `#F0F0F0`

  /* Avatar */
  vars.avatarWidth = `3.5em`
  vars.avatarSpacing = `1.5em`
  vars.avatarBorderRadius = `${theme.circularRadius}`

  /* Content */
  vars.contentMargin = `${vars.avatarWidth} + ${vars.avatarSpacing}`

  /* Author */
  vars.authorFontSize = `1em`
  vars.authorColor = `${theme.primaryColor}`
  vars.authorHoverColor = `${theme.primaryColorHover}`
  vars.authorFontWeight = `bold`

  vars.metadataDisplay = `block`
  vars.metadataSpacing = `0em`
  vars.metadataColor = `${theme.textColor}`

  /*-------------------
        Variations
  --------------------*/

  /* Threaded */
  vars.threadedCommentMargin = `-1.5em 0 -1em  (${vars.avatarWidth} / 2)`

  return vars
}
