const promise = new Promise(function (resolve, reject) {
    resolve("성공");
})

promise.then(function (data1) {
    console.log(data1);
})


const promise2 = new Promise(function (resolve, reject) {
    reject("실패");
})

promise2
    .then(function (data2) {
        console.log(data2);
    }).catch(function (error2) {
        console.log(error2);
    });

