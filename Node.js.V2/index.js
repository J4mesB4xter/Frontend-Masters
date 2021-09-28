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
