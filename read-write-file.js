// fs module(sync)
// it reads the code line by line 

const { error } = require('console');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/something.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
});

writeFileSync("./content/signings", `Granit xhaka is out of the club, he is going to leverkusen, we are still getting this new: ${first}`, (error) => {
    if (error) throw error;
    console.log("file created")
} )



console.log(first)
