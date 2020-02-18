const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result));

// const r = Promise.reject(new Error('reason for rejection...'));
// r.catch(err => console.log(err));

const p1 = new Promise(reso => {
    setTimeout(() => {
        console.log("Async Operation 1...");
        reso(1);
    }, 2000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Async Operation 2...");
        resolve(2);
    }, 2000);
});

Promise.race([p1, p2])
    .then(arr => console.log(arr))
    .catch(err => console.log('error', err.message));