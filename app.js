const express = require("express");
const bodyParser = require("body-parser");
const loanRouter = require("./routes/ltk/loan.router");
const app = express();
const port = 3000;
const isLocal = true;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "✨ 👋🌏 ✨",
    stage: process.env.NODE_ENV,
  });
});

app.get("/ping", (req, res) => {
  res.json({
    message: "🏓",
  });
});

app.use("/loans", loanRouter);

if (isLocal) {
  //local host
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;
