export interface IDividerVariables {
  defaultColor: string
  defaultBackgroundColor: string
  typePrimaryColor: string
  typePrimaryBackgroundColor: string
  typeSecondaryColor: string
  typeSecondaryBackgroundColor: string
}

export default (siteVars: any): IDividerVariables => {
  return {
    defaultColor: siteVars.gray04,
    defaultBackgroundColor: siteVars.gray14,
    typePrimaryColor: siteVars.brand,
    typePrimaryBackgroundColor: siteVars.brand,
    typeSecondaryColor: siteVars.gray02,
    typeSecondaryBackgroundColor: siteVars.gray10,
  }
}
