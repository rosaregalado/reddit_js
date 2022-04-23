// server
const express = require('express');
const app = express();

// middleware
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
  res.render('home');
})



// Start server
app.listen(3000, () => {
  console.log('App listening on port localhost:3000!');
});