const style = {}
const sidebarWidth = 250

style.menu = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  bottom: 0,
  left: 0,
  width: sidebarWidth,
  // match menu background
  // prevents a white background when items are filtered out by search
  background: '#1B1C1D',
  overflowX: 'hidden',
}

style.sidebarMain = {
  marginLeft: sidebarWidth,
  minWidth: parseInt(sidebarWidth, 10) + 300,
}

style.main = {
  ...style.sidebarMain,
  maxWidth: parseInt(sidebarWidth, 10) + 900,
}

export default style
