import { pxToRem } from '../../lib'

export interface IButtonVariables {
  backgroundColor: string
  backgroundColorHover: string
  circularRadius: string
  circularWidth: string
  typePrimaryColor: string
  typePrimaryBackgroundColor: string
  typePrimaryBackgroundColorHover: string
  typePrimaryBorderColor: string
  typeSecondaryColor: string
  typeSecondaryBackgroundColor: string
  typeSecondaryBackgroundColorHover: string
  typeSecondaryBorderColor: string
}

export default (siteVars: any): IButtonVariables => {
  return {
    backgroundColor: siteVars.gray08,
    backgroundColorHover: siteVars.gray06,
    circularRadius: pxToRem(999),
    circularWidth: '32px',
    typePrimaryColor: siteVars.white,
    typePrimaryBackgroundColor: siteVars.brand,
    typePrimaryBackgroundColorHover: siteVars.brand04,
    typePrimaryBorderColor: 'transparent',
    typeSecondaryColor: siteVars.black,
    typeSecondaryBackgroundColor: siteVars.white,
    typeSecondaryBackgroundColorHover: siteVars.gray06,
    typeSecondaryBorderColor: siteVars.gray06,
  }
}
