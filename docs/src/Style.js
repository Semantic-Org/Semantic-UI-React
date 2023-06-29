const style = {}
const sidebarWidth = 250

style.container = {
  display: 'flex',
  flexDirection: 'row', // Default value for non-mobile devices
}

style.menu = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  bottom: 0,
  left: 0,
  width: sidebarWidth,
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

// Manually check the screen size and apply appropriate styles
const screenWidth = window.innerWidth
if (screenWidth <= 768) {
  style.container.flexDirection = 'column'
  style.menu.position = 'relative'
  style.menu.width = '100%'
  style.sidebarMain.marginLeft = '0%'
}

export default style
