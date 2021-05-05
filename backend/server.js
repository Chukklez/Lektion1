const express = require('express');
const lowdb = require('lowdb');
const cookieParser = require ('cookie-parser');

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('users.json');
const database = lowdb(adapter);

const app = express();










app.listen(8000, () => {
    console.log('Server Started');
});