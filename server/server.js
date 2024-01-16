const express = require('express');
const app = express();
const router = require('./router/auth-router');


app.use(express.json());

//?mounting the router
app.use('/api/auth', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});