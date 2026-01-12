import { stat } from 'fs/promises'
import path from 'path';
//import {stat} from "fs"

// stat('../cluster.js', (err, data) => {
//     if (err) {
//         console.error('something off in the cluster.js', err)
//         return;
//     }
//     console.log(data.isFile())
//     console.log(data.size)
//     console.log(data.isDirectory())
//     console.log(data.mtime)
// })


(async () => {
    const stats = await stat(path.join('.', 'something.txt'));
    console.log(stats.isFile(), stats.size);
})()