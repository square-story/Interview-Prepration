import { spawn } from 'child_process'

const child = spawn('ls', ['-lh']);

child.stdout.on('data', (data) => console.log(data, "yes"))
child.stderr.on('data', (data) => console.log('Error', data))
child.on('close', () => console.log('closing the child process'))