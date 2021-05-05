const express = require("express");
const lowdb = require("lowdb");
const cookieParser = require("cookie-parser");

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("users.json");
const database = lowdb(adapter);

const app = express();

app.use(express.json);
app.use(express.static('../frontend'));

app.post('/api/login', (request, response) => {
  const credentials = request.body;

  const user = database
    .get('accounts')
    .find({ username: credentials.username, password: credentials.password })
    .value();

  let result = { success: false };

  if (user) {
    result.success = true;
  }
  response.json(result);
});

app.listen(8000, () => {
  console.log("Server Started");
});
