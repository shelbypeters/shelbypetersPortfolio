// commonjs is part of nodejs (vs. for example ESM architecture, e.g. in CRA )
// const logger = require('morgan')
function double(input_number) {
    if(typeof input_number !== 'number') {
        throw "not a number";
    }
    return input_number*2
}
// console.log(double(2))
module.exports = double
// JS Types - Primitives (?)
    // String
    // Numeric
    // Null
    // Boolean
    // Symbol
    // Undefined
    // BigInt
