const buttonRules = ({ circular, variables }) => ({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(circular && { borderRadius: variables.circularRadius, width: variables.circularWidth }),
  },
})

export default buttonRules
