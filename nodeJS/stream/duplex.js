import { Duplex } from 'stream'

const duplex = new Duplex({
    read() {
        this.push('Hello');
        this.push(null);
    },
    write(chunk, encoding, callback) {
        console.log('Received chunk:', chunk.toString());
        callback();
    }
});

duplex.on('data', chunk => console.log('Data:', chunk.toString()));
duplex.write('Hi!');
