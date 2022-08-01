const express = require("express");
const app = express();

const arr =[
  {
    id:1,
    name:'Working'
  }
]

app.get("/",(req, res) =>{
  res.send(JSON.stringify(arr));
});

app.listen(process.env.PORT || 5000);
