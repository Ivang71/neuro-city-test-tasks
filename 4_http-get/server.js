const { createServer } = require('http')
const { get } = require('https')

const host = 'localhost'
const port = 8000

const requestListener = async (req, res) => {
  get('https://reqres.in/api/users', (serverRes) => {
    let data = ''

    serverRes.on("data", (chunk) => {
      data += chunk
    })

    serverRes.on('end', () => {
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      })
      res.write(data)
      res.end()
    })
  }).on('error', (err) => {
    console.log('Error: ' + err.message)
  })
}

const server = createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
