const hasDocument = typeof document === 'object' && document !== null
const hasWindow = typeof window === 'object' && window !== null && window.self === window

export default hasDocument && hasWindow
