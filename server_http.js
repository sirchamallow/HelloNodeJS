let http = require('http')
let fs = require('fs')
const EventEmitter = require('events')

let App = {
  start: function () {
    let emitter = new EventEmitter ()
    let server = http.createServer((request, response) => {
      response.writeHead(200)
      if (request.url === '/') {
        emitter.emit('root', response)
      }
      response.end()
    }).listen(port)
    return emitter
  }
}

let app = App.start(8080)
app.on('root', function(response){
  response.write('Je suis à la racine')
})

// let server = http.createServer()
// server.on('request', (request, response) => {
//   fs.readFile('index.html',(err, data) => {
//     if (err) {
//       response.writeHead(404)
//       response.end("Ce fichier n'existe pas :/")
//     } else{
//       response.writeHead(200, {
//         'Content-Type': 'text/html; charset=utf-8'
//       })
//       response.end(data)
//     }
//   })
// }).listen(8080)
