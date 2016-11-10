const hasDocument = typeof document === 'object'
const hasWindow = typeof window === 'object' || window.self === window

export default hasDocument && hasWindow
