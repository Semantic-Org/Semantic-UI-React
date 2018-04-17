module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Comments
  *******************************/


  /*-------------------
         View
  --------------------*/

  vars.maxWidth = `650px`
  vars.margin = `1.5em 0em`

  /*-------------------
        Elements
  --------------------*/

  /* Comment */
  vars.commentBackground = `none`
  vars.commentMargin = `0.5em 0em 0em`
  vars.commentPadding = `0.5em 0em 0em`
  vars.commentDivider = `none`
  vars.commentBorder = `none`
  vars.commentLineHeight = `1.2`
  vars.firstCommentMargin = `0em`
  vars.firstCommentPadding = `0em`

  /* Nested Comment */
  vars.nestedCommentsMargin = `0em 0em 0.5em 0.5em`
  vars.nestedCommentsPadding = `1em 0em 1em 1em`

  vars.nestedCommentDivider = `none`
  vars.nestedCommentBorder = `none`
  vars.nestedCommentBackground = `none`

  /* Avatar */
  vars.avatarDisplay = `block`
  vars.avatarFloat = `left`
  vars.avatarWidth = `2.5em`
  vars.avatarHeight = `auto`
  vars.avatarSpacing = `1em`
  vars.avatarMargin = `(${vars.commentLineHeight} - 1em) 0em 0em`
  vars.avatarBorderRadius = `0.25rem`

  /* Content */
  vars.contentMargin = `${vars.avatarWidth} + ${vars.avatarSpacing}`

  /* Author */
  vars.authorFontSize = `1em`
  vars.authorColor = `${siteVars.textColor}`
  vars.authorHoverColor = `${siteVars.linkHoverColor}`
  vars.authorFontWeight = `${siteVars.bold}`

  /* Metadata */
  vars.metadataDisplay = `inline-block`
  vars.metadataFontSize = `0.875em`
  vars.metadataSpacing = `0.5em`
  vars.metadataContentSpacing = `0.5em`
  vars.metadataColor = `${siteVars.lightTextColor}`

  /* Text */
  vars.textFontSize = `1em`
  vars.textMargin = `0.25em 0em 0.5em`
  vars.textWordWrap = `break-word`
  vars.textLineHeight = `1.3`

  /* Actions */
  vars.actionFontSize = `0.875em`
  vars.actionContentDistance = `0.75em`
  vars.actionLinkColor = `${siteVars.unselectedTextColor}`
  vars.actionLinkHoverColor = `${siteVars.hoveredTextColor}`

  /* Reply */
  vars.replyDistance = `1em`
  vars.replyHeight = `12em`
  vars.replyFontSize = `1em`

  vars.commentReplyDistance = `${vars.replyDistance}`

  /*-------------------
        Variations
  --------------------*/

  /* Threaded */
  vars.threadedCommentMargin = `-1.5em 0 -1em  (${vars.avatarWidth} / 2)`
  vars.threadedCommentPadding = `3em 0em 2em 2.25em`
  vars.threadedCommentBoxShadow = `-1px 0px 0px ${siteVars.borderColor}`


  /* Minimal */
  vars.minimalActionPosition = `absolute`
  vars.minimalActionTop = `0px`
  vars.minimalActionRight = `0px`
  vars.minimalActionLeft = `auto`

  vars.minimalTransitionDelay = `0.1s`
  vars.minimalEasing = `${siteVars.defaultEasing}`
  vars.minimalDuration = `0.2s`
  vars.minimalTransition = `opacity ${vars.minimalDuration} ${vars.minimalEasing}`

  return vars
}
