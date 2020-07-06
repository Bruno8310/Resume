var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var element = 0
for (const key in fruit) {
    if (fruit.hasOwnProperty(key)) {
        element += fruit[key];
    }
}
console.log(element);
