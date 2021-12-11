const { Server } = require('ws')

const host = 'localhost'
const port = 9000

const wsServer = new Server({ host, port })

const mockData = [
  {
    name: 'Bob',
    height: 174
  },
  {
    name: 'Alice',
    height: '185'
  }
]

const onConnect = (wsClient) => {
  wsClient.on('message', (message) => {
    console.log(JSON.parse(message))
    try {
      switch (JSON.parse(message).action) {
        case 'USERS':
          wsClient.send(JSON.stringify(mockData))
          break
        default:
          console.log('Unknown message')
      }
    } catch (error) {
      console.log('Error: ', error)
      wsClient.send(500)
    }
  })
}

wsServer.on('connection', onConnect)

console.log(`Server is running on port ${port}`)
