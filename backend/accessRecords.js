const express = require('express');
const accessRecord = express.Router();
const Record = require("./models/record");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')




accessRecord.use(morgan('combined'));
accessRecord.use(bodyParser.json());
accessRecord.use(bodyParser.urlencoded({
    extended: false
}));



accessRecord.use(cors())
accessRecord.use(bodyParser.json());
accessRecord.use(bodyParser.urlencoded({
    extended: true
}));



accessRecord.get('/retrieveAll', (req, res) => {
    let check = async function () {
        try {
            var result = await Record.retrieveAll();
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "error", error: err })
        }
    }
    check();
})

accessRecord.post('/createRecord', (req, res) => {
    let check = async function () {
        try {
            var result = await Record.createRecord(req.body);
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "error", error: err })
        }
    }
    check();
})


module.exports = accessRecord;