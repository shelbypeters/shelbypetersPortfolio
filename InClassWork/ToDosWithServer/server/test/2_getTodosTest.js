// Let's test if the GET /todos works as expected
//  - first : see if it works...doesn't work...returns
//             anything other than undefined
//  - second : see if it returns a 200 header
//  - third (optinal) : returns JSON

const server = require('../index')
const test = require('supertest')

describe('2. Test the GET /todos route', function() {
    // getting all todos?
    it('a. testing /todos = happy case', function(done) {
        test(server)
        .get('/todos')
        .expect('Content-Type', /json/i) // regex
        .expect(200, done)
    })
})