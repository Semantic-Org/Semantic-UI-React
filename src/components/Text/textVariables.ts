export interface ITextVariables {
  importantWeight: number
}

export default (siteVars: any): ITextVariables => {
  return {
    importantWeight: 600,
  }
}
