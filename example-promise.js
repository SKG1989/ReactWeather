function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a === "number" && typeof b === "number")
            resolve(a+b);
        else{
            reject('Error with inputs');
        }
    })
}

addPromise(1, 2).then(function (num) {
    console.log(num);
},function (err) {
    console.log(err);
});
addPromise(1).then(function (num) {
    console.log(num);
},function (err) {
    console.log(err);
});
addPromise('add promise').then(function (num) {
    console.log(num);
},function (err) {
    console.log(err);
});

