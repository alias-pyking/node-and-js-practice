const fs = require('fs');


const content = 'Some content';

fs.writeFile('./promise.js', content, err => {
    if(err){
        console.err(err);
    }
    console.log('Written successfully');
});