console.log(1);

setTimeout(() => {
    return console.log(2)
}, 3000);

setTimeout(() => {
    return console.log(3)
}, 2000);

console.log(4);