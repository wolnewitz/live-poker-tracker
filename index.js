const express = require('express');
const port = process.env.PORT || 3000;
const http = require('http');
const db = require('./server/models');
const routes = require('./server/routes');

const app = express();

app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));

app.get('/test', routes.test);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  })
})
