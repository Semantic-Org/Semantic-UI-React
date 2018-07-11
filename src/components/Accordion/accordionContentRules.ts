const accordionContentRules = {
  root: ({ props }) => ({
    display: 'none',
    verticalAlign: 'middle',
    ...(props.active && { display: 'block' }),
  }),
}

export default accordionContentRules
