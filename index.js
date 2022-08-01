const express = require("express");
const app = express();
const arr =[
  {
    id:1,
    name:'Working'
  }
]
const router = express.Router();
app.listen(process.env.PORT || 5000);

router.get('/arr', (req, res)=> {
  res.send(arr);
});

