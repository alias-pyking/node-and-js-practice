
// function createFunction(){

//     function multiplyBy2(num){
//         return num * 2;
//     }
    
//     return multiplyBy2;
// }

// const genratedFunction = createFunction();
// const genreateFunction1 = createFunction();
// console.log(genratedFunction(2));
// console.log(genratedFunction === genreateFunction1)
// console.log(createFunction === createFunction);


function outer(){
    let counter = 0;
    function incrementCounter(){
        console.log(counter);
        counter++;
    }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
console.log(outer().counter);
myNewFunction();
console.log(outer().counter);
