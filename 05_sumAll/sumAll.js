const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return "ERROR";

    let i = num1;
    let sum = 0;
    if (num1 < num2) {
        while (i <= num2) {
            sum += i;
            i++;
        }
    } else {
        while (i >= num2) {
            sum += i;
            i--;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
