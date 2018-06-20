const hasDocument = typeof document === 'object' && document !== null
const hasWindow = typeof window === 'object' && window !== null && window.self === window

const isBrowser = () => hasDocument && hasWindow

export default isBrowser
