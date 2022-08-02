const express = require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 5000;
app.use(express.json());

const cars =
    {
      id: 1,
      name: "Hello",
    };

app.listen(port, (req, res) => {
  console.log(`Running port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  // res.send(console.log(cars));
  res.send(data.cars['Ford'].map(e => e.name));
});
