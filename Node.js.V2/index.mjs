// `modules used to be encapsulated code that is portable
// ex.
// (function(){
//     var me = 'hello'
// }())
// `
// `with node we have common modules`

// const action = () => {

//     console.log('hello')
// }
// // `with this notation you have to explicitly export your module`

// module.exports = { action } 

//this is a common module, but the computer will often try to convert it to a ES6 module
//an ES6 to do the same thing would look more like this

// export const action = () => {
//     console.log('hello')
// }

//this creates a "named export" which we will import diretly
import { readFile, writeFile } from 'fs/promises'
//accessing the fs (filesystem) allows a ton of powerful processing inside of node and a lot of system tools that are useful

let template = await readFile(new URL('template.html', import.meta.url))

const data = {
    title : 'Learn Node.js',
    body : 'This is the Final HTML',
}

for (const [k, v] of Object.entries(data)) {
    template = template.toString().replace(`{${k}}`, v)
}

console.log(template)