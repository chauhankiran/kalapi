const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Application is running at \x1b[36mhttp://localhost:3000\x1b[0m");
});
