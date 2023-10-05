/*for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
} */
let obj = {
    key: 1,
    value: 4
};

let output = {...obj};
output.value -= obj.key;

console.log(output.value)
