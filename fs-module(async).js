// fs module(async)
// callback is what runs after the function is done

const { readFile, writeFile } = require('fs')

readFile("./content/something.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    }
 const result = data;

 readFile("./content/signings.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    }
 const result1 = data;

 writeFile("./content/techconference.txt", `i saw a vvery fine girl at the conference, unrelateed but ${result} and ${result1}` , (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)

 })
 })
})
