import fs from 'fs'
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello ');
writeStream.write('World!');
writeStream.end();
writeStream.on('finish', () => console.log('Write complete'));
