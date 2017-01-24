const express = require('express');
const port = process.env.PORT || 3000;
const db = require('./server/models');
const routes = require('./server/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sessions', routes.getSessions)
app.post('/sessions', routes.saveSession)

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  })
})
