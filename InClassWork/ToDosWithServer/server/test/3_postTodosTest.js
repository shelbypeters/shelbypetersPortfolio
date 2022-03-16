const test = require('supertest') // alternatively you may use chai (there are many more)
const app = require('./../index')

describe('3. POST request of .todos', function() {
    it('a. should create a new todo', function(done) {
        let newTodo = {description: 'Finish homework', isComplete: false}
        test(app)
        .post('/todos')
        .set('Accept', 'application/json') //request header
        .send(newTodo)
        .expect('Content-Type', /json/i)
        .expect(/homework/i)
        .expect(/iscomplete/i)
        .expect(200, done)
        .end(function(err, res) {
            // console.log(res.body)
            if (err) return done(err);
            return done();
        })
    })
})