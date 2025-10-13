import http from 'node:http'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Home page')
    } else if (req.url === '/slowpage') {
        for (let i = 0; i < 5e9; i++) { }
        res.writeHead(200, { "content-type": "text/plain" })
        res.end('slow page rendered')
    }
})

server.on('request', (data) => console.log('yessss', data.headers))

server.listen(4000, () => console.log('server is running 4000 port'))

