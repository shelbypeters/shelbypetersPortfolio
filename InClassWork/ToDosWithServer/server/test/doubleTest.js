const doubleFn = require('./1_double')
const assert= require('assert/strict')
// creates a bucket of tests
describe('1. Testing of double function', function(){
        // a single test
        it('It should return double of 2 -- success case', function(){
            let answer = doubleFn(2)
            assert.equal(answer, 4)
        })
        // a single test
        it('It should return double of -2 -- success case', function(){
            let answer = doubleFn(-2)
            assert.equal(answer, -4)
        })
        it('should fail - pass in a boolean -- sad case', function(){
            assert.throws(function(){
                return doubleFn(true)
            })
        })
    }
)
// Error     : should not happen (most probably is a bug)
// Exception : could happen, but our code needs to deal with it (not a bug)
// TDD (Test Driven Development)
// 1. Write tests first that capture the requirements
// 2. now write the code so that the test passes











