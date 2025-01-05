const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let i = 0;
    let repeatedWord = "";
    while (i < times) {
        repeatedWord += word;
        i++;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
