import doctrine from 'doctrine'

export default docBlock => doctrine.parse(docBlock || '', { unwrap: true })
