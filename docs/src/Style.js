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

  // --- START OF READABILITY FIX ---
  // Targets the medium screen width (~910px) identified in the issue
  '@media only screen and (min-width: 768px) and (max-width: 910px)': {
    '& .ui.vertical.menu .item': {
      fontSize: '14px !important', // Increased from 12px for legibility
      lineHeight: '1.6 !important', // Added breathing room between lines
      paddingTop: '0.9em !important', // Increased vertical hit area
      paddingBottom: '0.9em !important',
    },
    '& .ui.vertical.menu .header': {
      fontSize: '1.1em !important', // Improved visual hierarchy for section titles
      color: '#fff !important', // High contrast for headers
      marginBottom: '0.5em !important',
    },
    '& .ui.vertical.menu .menu .item': {
      color: 'rgba(255, 255, 255, 0.8) !important', // Increased text contrast (WCAG AA)
      fontSize: '13px !important',
    },
  },
  // --- END OF READABILITY FIX ---
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
