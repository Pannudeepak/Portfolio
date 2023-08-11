const express = require("express");
const session = require("express-session");
//const fetch = require('node-fetch');
const path = require("path");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "pug");

app.use(
  session({
    saveUninitialized: true,
    secret: "deepak",
    resave: true,
    saveUninitialized: false,
    cookie: {
      path: "/",
      maxAge: 3600000,
    },
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", function (req, res) {
  res
    .status(404)
    .render("error/404", { url: req.url, message: "Page not found" });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
