Read our data: we want to see what all our todos are
    method = GET
    route = /todos
    response data = json
    amount of data = everything in database
    data sent back = array of objects
    success status code = 200
    unsuccessful status code = nothing

Create our data: we want to add new todos to our list
    method = POST
    route = /todos
    response data = json
    amount of data = one object which is the newly created todo
    data sent back = one object
    success status code = 200
    unsuccessful status code = nothing

Delete data: we want to remove ONE todo from our list
    method = DELETE
    route = /todos/<id>
    response data = json
    amount of data = everything in the UPDATED array
        (original array minus the deleted todo)
    data sent back = an array of objects
    success status code = 200
    unsuccessful status code = nothing

Update data: we want to update ONE todo with current isComplete status
    method = PUT
    route = /todos/<id>
    response data = json
    amount of data = one updated todo
    data sent back = one object with isComplete
    success status code = 200
    unsuccessful status code = nothing