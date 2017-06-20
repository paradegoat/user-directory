
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require("./data");

const app = express();
app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get("/", function (req, res) {
  let profile = data.users[0].avatar;
  res.render('index', {profile});

});

app.listen(3000, function () {
  console.log("Success!");
})
