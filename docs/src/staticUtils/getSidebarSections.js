const getSidebarSections = (displayName) => {
  try {
    return require(`../exampleMenus/${displayName}.examples.json`)
  } catch (e) {
    return []
  }
}

export default getSidebarSections
