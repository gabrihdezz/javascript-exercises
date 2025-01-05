const reverseString = function(word) {
    // return word.split("").reverse().join("");

    // OTRA OPCIÓN
    let reversed_word = [];
    let wordArray = word.split("");
    
    while (wordArray.length > 0) {
        reversed_word.push(wordArray.pop());
    }

    return reversed_word.join("");
};

// Do not edit below this line
module.exports = reverseString;
