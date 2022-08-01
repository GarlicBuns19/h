const express = require("express");
const app = express();
app.use(express.json())
const arr =[
  {
    id:1,
    name:'Working'
  }
]

app.get("/",(req, res) =>{
  res.send(arr);
});

app.listen(process.env.PORT || 5000);
