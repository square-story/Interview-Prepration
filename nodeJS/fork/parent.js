import { fork } from 'child_process'

const child = fork('./fork/child.js')

child.send({ msg: 'Hello from Parent' });
child.on('message', console.log)