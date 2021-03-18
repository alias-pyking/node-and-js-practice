function badaFoo() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('P1 resolve');
        }, 2000);
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('P2 resolve');
        }, 1000);
    });

    const p3 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject('P3 reject');
        }, 1000);
    });

    const p4 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('P4 reject');
        }, 1000000);
    });

    Promise.all([p1, p2, p3, p4]).then(values => {
        console.log(values);
    }).catch(errors => {
        console.log(errors);
    })

}
badaFoo();