function complexSum1(number1, number2) {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));   
}

console.log(complexSum1(2, 1));


const complexSum2 = function (number1, number2) {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
};

console.log(complexSum2(2, 1));

const complexSum3 = (number1, number2) => {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
};

console.log(complexSum3(2, 1));

