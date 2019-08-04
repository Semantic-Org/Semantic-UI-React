const assert = require('assert')
const fs = require('fs')
const http = require('http')
const puppeteer = require('puppeteer')

const config = require('../config')

const html = `
<!DOCTYPE html>
<html>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.5/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.5/umd/react-dom.production.min.js"></script>
  <script src="/umd.js"></script>
  
  <div id="root"></div>
  <script>
    ReactDOM.render(
      React.createElement(semanticUIReact.Button, null, "Foo"),
      document.getElementById("root"),
    )
  </script>
</body>
`

const assertInnerHtml = async () => {
  const browser = await puppeteer.launch()
  const server = http
    .createServer((req, response) => {
      if (req.url === '/umd.js') {
        fs.readFile(config.paths.dist('umd', 'semantic-ui-react.min.js'), (err, data) => {
          response.setHeader('Content-type', 'text/javascript')
          response.end(data)
        })
        return
      }

      response.setHeader('Content-type', 'text/html')
      response.end(html)
    })
    .listen(9000)

  const page = await browser.newPage()
  await page.goto('http://localhost:9000')

  const innerHtml = await page.evaluate(() => document.querySelector('#root').innerHTML)

  await browser.close()
  server.close()

  assert.equal(
    innerHtml,
    '<button class="ui button">Foo</button>',
    'UMD bundle test: Something wrong with UMD build, please check!',
  )
}

assertInnerHtml().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})
