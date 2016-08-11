const style = {}
const sidebarWidth = '16rem'

style.container = {
}

style.menu = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: sidebarWidth,
  paddingBottom: '1em',
  // match menu background
  // prevents a white background when items are filtered out by search
  background: '#1B1C1D',
  overflowY: 'scroll',
}

style.main = {
  background: '#fff',
  marginLeft: sidebarWidth,
  minWidth: parseInt(sidebarWidth, 10) + 300,
  maxWidth: parseInt(sidebarWidth, 10) + 900,
}

export default style
