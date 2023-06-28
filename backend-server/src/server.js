const express = require('express');
const { PORT } = require('./config/settings');
const { expressConfig } = require('./config/expressConfig');
const { connectToDB } = require('./config/databaseConfig');

const app = express();

expressConfig(app);

connectToDB()
            .then(()=>{console.log('Successfully connected to the database!')})
            .catch((err)=>{console.log('Error connecting to the database: ',err)});

app.listen(PORT,()=>console.log(`Server is listening on PORT:${PORT}...`));