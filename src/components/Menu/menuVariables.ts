export interface IMenuVariables {
  defaultColor: string
  defaultActiveColor: string
  defaultActiveBackgroundColor: string
  defaultBorderColor: string

  typePrimaryColor: string
  typePrimaryActiveColor: string
  typePrimaryActiveBackgroundColor: string
  typePrimaryBackgroundColorHover: string
  typePrimaryBorderColor: string
  typePrimaryActiveBorderColor: string
}

export default (siteVars: any): IMenuVariables => {
  return {
    defaultColor: siteVars.gray02,
    defaultActiveColor: siteVars.gray01,
    defaultActiveBackgroundColor: siteVars.gray10,
    defaultBorderColor: siteVars.gray08,

    typePrimaryColor: siteVars.gray02,
    typePrimaryActiveColor: siteVars.brand,
    typePrimaryActiveBackgroundColor: siteVars.brand14,
    typePrimaryBackgroundColorHover: siteVars.brand16,
    typePrimaryBorderColor: siteVars.brand08,
    typePrimaryActiveBorderColor: siteVars.brand12,
  }
}
