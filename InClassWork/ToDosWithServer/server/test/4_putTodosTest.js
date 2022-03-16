const test = require('supertest') // alternatively you may use chai (there are many more)
const app = require('./../index')

describe('3. Toggle completion satus on /todos (PUT)', function() {
    it('a. should create a new todo and flip it - happy case', function(done) {
        let newTodo = {description: 'Finish homework'}
        test(app)
        .post('/todos')
        .send(newTodo)
        .expect('Content-Type', /json/i)
        .expect(/homework/i)
        .expect(/iscomplete/i)
        .expect(200)
        .end(function(err, res) {
            // console.log(res.body)
            test(app)
            .put(`/todos/${res.body.id}`)
            .expect(200)
            .expect('Content-Type', /json/i)
            .expect({"id": 5, "description": 'Finish homework', "isComplete": true}, done)
        });
    });
    it('b. should create a new todo and flip it - sad case', function(done) {
        let newTodo = {description: 'Finish homework'}
        test(app)
        .post('/todos')
        .send(newTodo)
        .expect('Content-Type', /json/i)
        .expect(/homework/i)
        .expect(/iscomplete/i)
        .expect(200)
        .end(function(err, res) {
            // console.log(res.body)
            test(app)
            .put(`/todos/9999999`)
            .expect(404)
            .expect('Content-Type', /json/i)
            .expect('{"message": "ID does not exist in database"}', done)
        });
    });
});