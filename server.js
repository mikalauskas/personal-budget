const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

const apiRoutes = require('./api/routes.js');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});
