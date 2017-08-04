const doctrine = require('doctrine')

module.exports = (docBlock) => doctrine.parse(docBlock || '', { unwrap: true })
