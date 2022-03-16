const express = require("express");
const app = express();
const $fetch = require("node-fetch");


const getRandomQuote = (req,res) => {
  let url = "https://api.quotable.io/random";
  $fetch(url)
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
      let quote = {
        author: data.author,
        content: data.content
      }
      console.log(data.content)
      console.log(data.author)
      res.render('home.ejs', {data: quote})
    })
    .catch((err) => {
      console.log("Problem getting data from API", err)
      res.json({message: "There's a problem with server"})
  });
}

app.get("/", getRandomQuote);

app.get("/randomQuote", getRandomQuote);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("App is listening!"));
