let example1 = "The latest airplane designs evolved from slabcraft."
let example2 = "Hi, do you know your abc's?"
let example3 = "Grab crab"
let example4 = "abcra crab dabcra"

let examples = [example1, example2, example3, example4]
let re = /abc/
let reg = new RegExp(/abc/,  'g')

examples.map(example => {console.log(re.test(example))})
examples.map(example => {console.log(re.exec(example))})
examples.map(example => {console.log(example.match(re))})
examples.map(example => {
  console.log(example.matchAll(reg))
})
examples.map(example => {
  console.log(example.search(reg))
})
examples.map(example => {
  console.log(example.replace(reg, 'flomp'))
})
// examples.map(example => {
//   console.log(example.replaceAll(reg, 'flomp'))
// })
examples.map(example => {console.log(example.split(re))}) //split omits the args you provide from the array, it seems.

