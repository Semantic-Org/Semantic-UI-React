const style = {};
let sidebarWidth = 200;

style.container = {
};

style.menu = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: sidebarWidth,
  background: '#333',
  overflowY: 'scroll',
};

style.main = {
  marginLeft: sidebarWidth,
  minWidth: sidebarWidth + 300,
  maxWidth: sidebarWidth + 900,
};

export default style;
