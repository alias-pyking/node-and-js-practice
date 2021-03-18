// const { rejects } = require("assert");

// const foo = ()  => console.log('foo');


// const bar = () => {
//     foo();
//     setTimeout(()=> {
//         console.log('setTimeout');
//     }, 0)
// }

// process.nextTick(()=> {
//     console.log('Next tick');
// })

// bar();

setTimeout(()=> {
    console.log('after')
}, 0);

console.log('before')