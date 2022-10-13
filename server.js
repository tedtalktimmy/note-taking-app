const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static(__dirname, '/assets'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function () {
  console.log(`listening on PORT ${PORT}`);
});