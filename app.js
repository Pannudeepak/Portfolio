const express = require("express");
const app = express();
const port = process.env.PORT || 80;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});
app.post("/send-email", (req, res) => {
  res.redirect("/");
});

app.get("*", function (req, res) {
  res
    .status(404)
    .render("error/404", { url: req.url, message: "Page not found" });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
