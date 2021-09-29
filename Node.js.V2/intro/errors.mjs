//without promises, this is what error handling would look like. error handling is important beccause it allows you to control the outcome of bad inputs to your system

// import { readFile } from 'fs'

// readFile(new URL('app.ms', import.meta.url), 'utf-8', (err, data) => {
//     if (err) {
//         throw err
//     } else {
//         //
//     }
// })

//with promises:

// import { readFile } from 'fs/promises'

// try {
//     const result = await readFile(new URL('app.ms', import.meta.url), 'utf-8')
// } catch (e) {
//     console.error(e)
// //we know the previous catch is successful because the code continues with our expected next step
//     console.log('hello')
// }

//more compactly, it could even be 

// const result = readFile(new URL('app.ms', import.meta.url), 'utf-8')
// .catch(e => {
//     console.log('hello')
// })

import { readFile } from 'fs/promises'

process.on('uncaughtException', (e) => {
    console.log(e)
})
const result = await readFile(new URL('app.ms', import.meta.url), 'utf-8')
console.log('hello')
// important to note here, is that catching an uncaughtError through this method will still crash the app, 
// but you can collect debugging information. you cannot perform asynchronous tasks, however, since your app is
// going to end before it would come back to them.