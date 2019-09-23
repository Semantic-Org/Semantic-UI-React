const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'docs', 'dist')))
  .use('/css', express.static(path.join(__dirname, 'themes', 'dist')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
