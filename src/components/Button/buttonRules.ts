import { IButtonVariables } from './buttonVariables'

export type ButtonType = 'primary' | 'secondary'

interface IButtonTypeProps {
  color: string
  backgroundColor: string
  borderColor: string
}

interface IButtonRules {
  variables: IButtonVariables
  circular?: boolean
  type?: ButtonType
}

const buttonTypeRules = ({
  type,
  variables,
}: {
  type: ButtonType
  variables: IButtonVariables,
}): IButtonTypeProps => {
  if (!type) {
    return undefined
  }

  const {
    typePrimaryColor,
    typePrimaryBackgroundColor,
    typePrimaryBorderColor,
    typeSecondaryColor,
    typeSecondaryBackgroundColor,
    typeSecondaryBorderColor,
  } = variables

  switch (type) {
    case 'primary':
      return {
        color: typePrimaryColor,
        backgroundColor: typePrimaryBackgroundColor,
        borderColor: typePrimaryBorderColor,
      }
    case 'secondary':
      return {
        color: typeSecondaryColor,
        backgroundColor: typeSecondaryBackgroundColor,
        borderColor: typeSecondaryBorderColor,
      }
  }
}

export default (btnRules: IButtonRules) => {
  const { circular, type, variables } = btnRules
  const { circularRadius, circularWidth } = variables

  const defaultRules = {
    display: 'inline-block',
    verticalAlign: 'middle',
    textShadow: 'none',
    backgroundImage: 'none',
  }

  const root = {
    ...defaultRules,
    ...(circular && { borderRadius: circularRadius, width: circularWidth }),
    ...buttonTypeRules({ type, variables }),
  }

  return { root }
}
