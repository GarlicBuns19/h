const express = require("express");
const app = express();
const arr =[
  {
    id:1,
    name:'Working'
  }
]
app.listen(process.env.PORT || 5000);

app.get('/arr', (req, res)=> {
  res.send(arr);
});

