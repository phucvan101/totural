
// const names = require('./4-names')
// const sayHi = require('./5-utls')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.fuck)
// console.log(data)
// sayHi(names.peter)


// const http = require('http');

// const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.end('welcome to our home page');
    // }
    // if (req.url === '/about') {
    //     res.end('he va lo');
    // }
    // if (req.url === '/love') {
    //     res.end(
    //         `<h1>Nguyen Van Phs</h1>
    //         <a href = "https://www.facebook.com/divaquanhta/videos/1151119358935289"> face </a>`
    //     )
    // }

    // res.end(`
    // <h1>Oops!</h1>
    // <p>we can't seen to find the page you are looking for</p>
    // <a href="/">back home</a>
    // `)
// })

// server.listen(5000)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items)

console.log(newItems);
 
