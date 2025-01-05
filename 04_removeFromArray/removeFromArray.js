const removeFromArray = function(lista, ...args) {
    return lista.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
