const getOriginalComponent = (RawComponent) => {
  // Heads up! If component is wrapped with our HOC, we should grab information from wrapped
  // component
  return RawComponent.originalComponent || RawComponent
}

export default getOriginalComponent
