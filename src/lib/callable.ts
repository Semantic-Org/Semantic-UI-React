const callable = val => (typeof val !== 'function' ? () => val : val)

export default callable
