const express = require("express");
const proxy = require("express-http-proxy");

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const url = "https://tastedive.com/api/similar";

app.use(
  "/",
  proxy(url, {
    userResHeaderDecorator: () => ({ "Access-Control-Allow-Origin": "*" }),
  })
);

app.listen(port, (_) => {
  console.log(`Listening on http://localhost:${port}`);
});