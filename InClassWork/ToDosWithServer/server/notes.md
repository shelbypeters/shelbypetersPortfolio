Consuming an API

1) Third party tells us what endpoints/routes
2) What type of response - json or xml or something else
    3) Do we need authenticatoin or authorization
4) How much data - everything or specifics
    5) How many requests can I make?
6) What data we can actually get - name, birthday, or everything!

Building an API

1) We get to decide what the endpoints/rules are
2) We decide on what type of data - json or xml or primitive
3) We decide how much data the client gets back
4) We decide what data is actually returned - we are going to send SS#!
5) We decide the status code to send

CRUD - what is it?

Create - adding a todo to our list
    - POST method
Read - get todos and display it
    - GET method
Update - have we completed the todo - ex: mark it with a line
    - PUT method
Delete - remove the todo from our list
    - DELETE method

The client is going to use a form. Inside the form there will be a POST method.
 * Use a form with POST:
 * Reason: - Sensitive information
            - Large amounts of data
            - Send files
            - Images
* POST will not cache the data, GET does

/doggy/:house -> req.params.house
/doggy/search?house=car -> req.query.house
* Post in a form with submit button = use req.body.house 
(req.body.description)

