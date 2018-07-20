import {
  atMentionTextColor,
  disabledTextColor,
  errorTextColor,
  successTextColor,
  timestampTextColor,
  textExtraSmallFontSize,
  textExtraSmallLineHeight,
  textSmallFontSize,
  textSmallLineHeight,
  textMediumFontSize,
  textMediumLineHeight,
  textLargeFontSize,
  textLargeLineHeight,
  textExtraLargeFontSize,
  textExtraLargeLineHeight,
  textX2FontSize,
  textX2LineHeight,
  textX3FontSize,
  textX3LineHeight,
  textX4FontSize,
  textX4LineHeight,
} from '../../themes/teams/siteVariables'

import { Sizes } from '../../lib/enums'

export default {
  root: ({ props, variables: v }) => ({
    ...(props.atMention && { color: atMentionTextColor }),
    ...(props.disabled && { color: disabledTextColor }),
    ...(props.error && { color: errorTextColor }),
    ...(props.success && { color: successTextColor }),
    ...(props.timestamp && { color: timestampTextColor }),
    ...(props.important && { fontWeight: v.importantWeight }),
    ...(props.size === Sizes.ExtraSmall && {
      fontSize: textExtraSmallFontSize,
      lineHeight: textExtraSmallLineHeight,
    }),
    ...(props.size === Sizes.Small && {
      fontSize: textSmallFontSize,
      lineHeight: textSmallLineHeight,
    }),
    ...(props.size === Sizes.Medium && {
      fontSize: textMediumFontSize,
      lineHeight: textMediumLineHeight,
    }),
    ...(props.size === Sizes.Large && {
      fontSize: textLargeFontSize,
      lineHeight: textLargeLineHeight,
    }),
    ...(props.size === Sizes.ExtraLarge && {
      fontSize: textExtraLargeFontSize,
      lineHeight: textExtraLargeLineHeight,
    }),
    ...(props.size === Sizes['2x'] && {
      fontSize: textX2FontSize,
      lineHeight: textX2LineHeight,
    }),
    ...(props.size === Sizes['3x'] && {
      fontSize: textX3FontSize,
      lineHeight: textX3LineHeight,
    }),
    ...(props.size === Sizes['4x'] && {
      fontSize: textX4FontSize,
      lineHeight: textX4LineHeight,
    }),
  }),
}
