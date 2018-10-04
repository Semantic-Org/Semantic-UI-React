const getSidebarSections = (displayName) => {
  try {
    return require(`../../src/exampleMenus/${displayName}.examples.json`)
  } catch (e) {
    return []
  }
}

export default getSidebarSections
