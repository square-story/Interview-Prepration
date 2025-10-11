import { stat } from 'fs/promises'

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
    const stats = await stat('../no-cluster.js');
    console.log(stats.isFile(), stats.size);
})()