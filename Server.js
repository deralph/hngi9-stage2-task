const express = require("express");
const app = express();

const { performArithemetic, errorPage } = require("./controller");

const port = 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("all ok");
});
app.post("/calculate", performArithemetic);

app.use(errorPage);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
