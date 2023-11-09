const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/routes/api');
const { connect } = require('./src/config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
});
