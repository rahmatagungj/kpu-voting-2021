const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://rahmatagungj:1010123@cluster0.7sail.mongodb.net/Cluster0?retryWrites=true&w=majority";
const DATABASE_NAME = "kpu-stkip-2021";


var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("system");
        console.log(collection)
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});