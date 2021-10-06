let example1 = "The latest airplane designs evolved from slabcraft."
let example2 = "Hi, do you know your abc's?"
let example3 = "Grab crab"

let examples = [example1, example2, example3]
let re = /abc/
examples.map(example => {console.log(re.test(example))})