var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(multer());
app.use(express.static(__dirname + '/public'));

var connectionString = 'mongodb://localhost/DFCI';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
	    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);


var columnSchema = new mongoose.Schema([{
    "#Uploaded_variation": String,
    Location: String,
    Allele: String,
    Gene: String,
    Feature: String,
    Feature_type: String,
    Consequence: String,
    cDNA_position: String,
    CDS_position: String,
    Protein_position: String,
    Amino_acids: String,
    Codons: String,
    Existing_variation:String,
    Extra: String
}], {collection: "data"});

var columns = mongoose.model("data", columnSchema);

app.get("/rest/data", function(req, res){
    columns.find(function(err, data){
        res.json(data);
    });
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);