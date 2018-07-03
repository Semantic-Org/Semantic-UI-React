import { IButtonVariables } from './buttonVariables'

export type ButtonType = 'primary' | 'secondary'

interface IButtonProps {
  variables: IButtonVariables
  circular?: boolean
  type?: ButtonType
}

export default (props: IButtonProps) => {
  const { circular, type, variables } = props

  const {
    backgroundColor,
    backgroundColorHover,
    circularRadius,
    circularWidth,
    typePrimaryColor,
    typePrimaryBackgroundColor,
    typePrimaryBackgroundColorHover,
    typePrimaryBorderColor,
    typeSecondaryColor,
    typeSecondaryBackgroundColor,
    typeSecondaryBackgroundColorHover,
    typeSecondaryBorderColor,
  } = variables

  const root = {
    backgroundColor,
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderWidth: 0,
    ':hover': {
      backgroundColor: backgroundColorHover,
    },

    ...(circular && { borderRadius: circularRadius, width: circularWidth }),

    ...(type === 'primary' && {
      color: typePrimaryColor,
      backgroundColor: typePrimaryBackgroundColor,
      borderColor: typePrimaryBorderColor,
      ':hover': {
        backgroundColor: typePrimaryBackgroundColorHover,
      },
    }),

    ...(type === 'secondary' && {
      color: typeSecondaryColor,
      backgroundColor: typeSecondaryBackgroundColor,
      borderColor: typeSecondaryBorderColor,
      borderWidth: '2px',
      ':hover': {
        borderColor: 'transparent',
        backgroundColor: typeSecondaryBackgroundColorHover,
      },
    }),
  }

  return { root }
}
