const express = require('express');
const { PORT } = require('./config/settings');

const app = express();

app.listen(PORT,()=>console.log(`Server is listening on PORT:${PORT}...`));