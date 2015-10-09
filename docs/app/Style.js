const style = {};
let sidebarWidth = 200;

style.container = {
  display: 'flex',
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
  flex: '1 0 auto',
  marginLeft: sidebarWidth,
  minWidth: 700,
};

export default style;
