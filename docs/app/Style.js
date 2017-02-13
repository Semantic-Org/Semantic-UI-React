const style = {}
const sidebarWidth = 250

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
  marginLeft: sidebarWidth,
  minWidth: parseInt(sidebarWidth, 10) + 300,
  maxWidth: parseInt(sidebarWidth, 10) + 900,
}

style.grid = {
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  backgroundColor: '#F0F0F0',
  content: '',
  // width: calc(100% - '2rem'),
  // height: calc(100% - '2rem'),
  // boxShadow: 0px 0px 0px 1px #DDDDDD inset,
}

style.first = {
  marginTop: '5em'
}

export default style
