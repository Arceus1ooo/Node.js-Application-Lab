//Require packages and set the port
const express = require("express");
const port = 3002;
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

//Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

/*app.get("/", (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({message: "Node.js and Express REST API"});
});*/
routes(app);

//Start the server
const server = app.listen(port, (error) => {
    if (error)
    {
        return console.log(`Error: ${error}`);
    }
    console.log(`Server listening to port ${server.address().port}`);
});