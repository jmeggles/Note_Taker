// DEPENEDENCY...npm pkg called express to give server functionality.
const express = require("express");

// CONFIG....tells node that we are creating an express server.
const app = express();

// CONFIG...initial port, will be used in listner.
const PORT = process.env.PORT || 8080;

// CONFIG...sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER...sends the server to route files.
require("./routes/api")(app);
require("./routes/html")(app);

// LISTENER...starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: testing testing 123" + PORT);
});
