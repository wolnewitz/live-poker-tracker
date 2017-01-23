const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})
