var needle = require('needle');

needle.get('https://type.fit/api/quotes', function(error, response) {
    if (!error && response.statusCode == 200)
        var obj = JSON.parse(response.body);
        console.log(obj[3].text);
});