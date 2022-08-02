const express = require("express");
const app = express();
const data = require('./data.json')
let port = process.env.PORT || 5000;
app.use(express.json())
app.listen(port, (req,res) => {
  console.log(`Running port http://localhost:${port}`)
});

app.get('/', (req, res)=> {
  res.send(data);
});

