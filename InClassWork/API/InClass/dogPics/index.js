const express = require("express");
const app = express();

const $fetch = require("node-fetch");

var image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`;
const url = "https://dog.ceo/api/breeds/image/random";
const baseUrl = "https://dog.ceo/api"

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { image });
});

app.get("/getImage", (req, res) => {
    let route = "breeds/image/random"
    let endpoint = `${baseUrl}/${route}`
  $fetch(url)
  .then(response => {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
  })
  .then(data => res.render('index.ejs', {image: data.message}))
  .catch(err => res.render('error', {error: "Something doggone weird happened!"}))
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));