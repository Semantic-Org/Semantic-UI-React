const accordionContentRules = ({ active, variables }) => ({
  root: {
    display: 'none',
    verticalAlign: 'middle',
    ...(active && { display: 'block' }),
  },
})

export default accordionContentRules
