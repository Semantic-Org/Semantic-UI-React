import { pxToRem } from '../../lib'

const getAvatarDimension = (size: number) => {
  return 12 + size * 4
}

const getPresenceIconSize = (size: number) => {
  if (size < 4) {
    return 8
  }
  if (size < 8) {
    return 10
  }
  return 12
}

const getPresenceIconPadding = (size: number, presenceIconPadding: number) => {
  if (size < 4) {
    return presenceIconPadding - 1
  }
  if (size < 8) {
    return presenceIconPadding
  }
  return presenceIconPadding + 1
}

const getPresenceSpanLeft = (size: number, presenceIconPadding: number) => {
  return (
    getAvatarDimension(size) -
    getPresenceIconSize(size) -
    getPresenceIconPadding(size, presenceIconPadding)
  )
}

const getPresenceSpanTop = (size: number, presenceIconPadding: number) => {
  return getPresenceIconSize(size) + getPresenceIconPadding(size, presenceIconPadding)
}

export default {
  root: () => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    background: 'inherit',
  }),
  imageAvatar: ({ props }) => ({
    width: pxToRem(getAvatarDimension(props.size)),
  }),
  avatarLabel: ({ props }) => ({
    width: pxToRem(getAvatarDimension(props.size)),
    height: pxToRem(getAvatarDimension(props.size)),
    lineHeight: pxToRem(getAvatarDimension(props.size)),
    fontSize: pxToRem(getAvatarDimension(props.size) / 2),
    verticalAlign: 'middle',
    textAlign: 'center',
  }),
  presenceSpan: ({ props, variables }) => ({
    display: 'block',
    position: 'relative',
    background: 'inherit',
    padding: pxToRem(getPresenceIconPadding(props.size, variables.presenceIconPadding)),
    margin: '0px',
    borderRadius: pxToRem(9999),
    height: pxToRem(
      getPresenceIconSize(props.size) +
        getPresenceIconPadding(props.size, variables.presenceIconPadding) * 2,
    ),
    width: pxToRem(
      getPresenceIconSize(props.size) +
        getPresenceIconPadding(props.size, variables.presenceIconPadding) * 2,
    ),
    top: `-${pxToRem(
      getPresenceSpanTop(
        props.size,
        getPresenceIconPadding(props.size, variables.presenceIconPadding),
      ),
    )}`,
    left: pxToRem(
      getPresenceSpanLeft(
        props.size,
        getPresenceIconPadding(props.size, variables.presenceIconPadding),
      ),
    ),
  }),
  presenceIconLabel: ({ props }) => ({
    position: 'relative',
    height: pxToRem(getPresenceIconSize(props.size)),
    width: pxToRem(getPresenceIconSize(props.size)),
    padding: '0px',
    lineHeight: pxToRem(getPresenceIconSize(props.size)),
    textAlign: 'center',
    verticalAlign: 'middle',
  }),
  presenceIcon: () => ({
    margin: 'auto',
    bottom: pxToRem(2),
    position: 'relative',
  }),
}
