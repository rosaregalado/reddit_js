// server
const express = require('express');
const app = express();

require('./data/reddit-db');
require('./controllers/posts')(app);

// middleware
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/posts/new', (req, res) => {
  res.render('posts-new');
});


// Start server
app.listen(3000, () => {
  console.log('App listening on port localhost:3000!');
});