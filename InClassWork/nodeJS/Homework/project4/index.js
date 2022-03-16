const express = require('express');
const app = express();
const pokemon = require('pokemon');
const pokeDex = [];


app.get('/', function(req,res) {
    res.send('I am the Pokemon root route.');
});

app.get('/pokemon', function(req,res) {
    res.send(pokemon.random());
});

app.get('/dex', function(req,res) {
    for (i = 0; i < 5; i++) 
    pokeDex.push(pokemon.random());
    res.send(pokeDex);
});

// const pokeObject = [];

// app.get('/pokemon/dex', function(req,res) {
//     for (i = 0; i < 5; i++) 
//     pokeObject.push({
//         pokemon: pokemon.random(),
//         attack: 1,
//         defense: 2,
//     });
//     res.send(pokeObject);
// });

const pokeObject = [];
const attack1 = function random(min, max) {
    const num = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    return num;
  }
const defense1 = function random(min, max) {
    const num = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    return num;
}

app.get('/pokemon/dex', function(req,res) {
    for (i = 0; i < 5; i++) 
    pokeObject.push({
        pokemon: pokemon.random(),
        attack: attack1(),
        defense: defense1(),
    });
    res.send(pokeObject);
});

// const poke1 = pokeObject[0];
// const poke2 = pokeObject[1];

app.get('/battle', function(req,res) {
    const poke1 = pokeObject[0];
    const poke2 = pokeObject[1];
    for (i = 0; i < 5; i++) 
    pokeObject.push({
        pokename: pokemon.random(),
        attack: attack1(),
        defense: defense1(),
    });
    // if(poke1[attack] > poke2[attack]) {
    //     res.send(poke1.pokename); 
    // } 
    // else if (poke1[attack] < poke2[attack])
    // {
    //     res.send(poke2.pokename)   
    // } 
    // else {
    //     res.send('It is a tie') 
    // }
    res.send(poke1);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running in ${port}`));
