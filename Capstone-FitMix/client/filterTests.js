const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const app = express();

fetch("https://exercisedb.p.rapidapi.com/exercises", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "ee8952564emsh92c996d57eeb01cp189236jsn028b268f0da1"
		}
	})
.then(response => {
    return response.json()
	// console.log(response);
})
.then(data => {
    let targets = data.filter(exercise => exercise.target === 'glutes')
    console.log(targets)
})
.catch(err => {
	console.error(err);
	});

const port = process.env.PORT || 3000;
const theDate = new Date();
app.listen(port, () => console.log(` App is running on port ${port}.[${theDate}]END `));