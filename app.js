const express = require("express");
const mongoose = require("mongoose");

// Importing route functions.
const donors = require("./routes/donorsRouter");
const needers = require("./routes/needersRouter");

// Configuring listening port and dbURI parameters credentials.
const port = 8080;
const dbURI = "";
const app = express();

// Connecting to Mongodb Atlas using Mongoose through asynch fnc, that's the why of te .then and .catch.
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log("Successfully connected to de mongo DB.");
    })
    .catch((err) => {
        console.log(err);
    })

// Just for functionality and manage to be able to work with body-parsing forms.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Setting Pug as our views engine.
app.set('view engine', 'pug');

// Start to listen with out application.
app.listen(port, () => {
    console.log(`Server runing on port: ${port}.`);
});

// Using static method to manage public files like .css, .js, etc.
app.use(express.static("public"));

// Logger middleware to catch information about devices being served from our server.
app.use((req, res, next) => {
    console.log("----------------------------------------------------");
    console.log(`Access from: ${JSON.stringify(req.headers["x-forwarded-for"])}.`)
    console.log(`Device: ${JSON.stringify(req.headers["user-agent"])}`);
    console.log("----------------------------------------------------");
    next();
})

// Middleware to manage calls to server from / path, this is wellcome or home directory.
app.get("/", (req, res) => {
    res.render("index.pug", {title: "Blood Donors®", message: "Not used Message."});
});

// Middleware that manages routes made on /donors.
app.use("/donors", donors);

// Middleware for manage routes made on /receibers.
app.use("/needers", needers);

// 404 page
app.use((req, res) => {
    res.send("<head><link rel='stylesheet' src='/css/main.css'></link></head><main><article><h1>Mmmm... not found what you were looking for.</h1><img src='https://eslbrains.com/wp-content/uploads/2020/02/confused-words.png'></img></article></main>")
});