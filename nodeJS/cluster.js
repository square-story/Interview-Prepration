import cluster from 'cluster'
import http from 'http'
import { cpus } from 'os'


console.log(cpus().length)


if (cluster.isPrimary) {
    console.log(`master process: ${process.pid}`)
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
} else {
    console.log(`workers process: ${process.pid}`)
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

    server.listen(3000, () => console.log('server is running'))
}