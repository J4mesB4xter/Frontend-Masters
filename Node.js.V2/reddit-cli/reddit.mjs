#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

console.log(process.argv)
const { argv }  = yargs(process.argv)

//old school fetch request: without async
// fetch('http://reddit.com/.json').then(res => {
//         res.json().then(data => {
//             console.log(data)
//         }).catch(e => {
//             console.log("error:", e)
//         })
// })

const res = await fetch('https://reddit.com/.jon')
const data = await res.json().catch(e => ({data: {}}))
const children = data?.data?.children ?? []
const randomPost = children[Math.floor(Math.random() * children?.length)]
const link = `https://reddit.com${randomPost?.data?.permalink}`

if (argv.print) {
    console.log(`
    title: ${randomPost?.data?.title}
    link:  ${link}
    `)
} else {
    open(link)
}