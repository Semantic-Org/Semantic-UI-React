const chatMessageRules = ({ mine, variables }) =>
  console.log(mine) || {
    root: {
      padding: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      ...(mine
        ? {
            marginLeft: 'auto',
          }
        : {
            marginRight: 'auto',
          }),
      maxWidth: variables.messageWidth,
      color: 'rgb(64, 64, 64)',
      backgroundColor: mine ? variables.messageColorMine : variables.messageColor,
      borderRadius: '0.3rem',
    },
  }

export default chatMessageRules
