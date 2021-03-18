
const printHello = () => { console.log('Hello')};

setTimeout(printHello, 0);


function blockingCode(){
    console.log('start');
    let sum = 0;
    for(let i = 0; i < 20000000; i++){
        sum += i;
    }
    console.log('end');
}
blockingCode()

console.log('Me first');
