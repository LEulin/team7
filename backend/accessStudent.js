const express = require('express');
const accessStudent = express.Router();
const Student = require("./models/student");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')




accessStudent.use(morgan('combined'));
accessStudent.use(bodyParser.json());
accessStudent.use(bodyParser.urlencoded({
    extended: false
}));



accessStudent.use(cors())
accessStudent.use(bodyParser.json());
accessStudent.use(bodyParser.urlencoded({
    extended: true
}));



accessStudent.get('/retrieveAll', (req, res) => {
    let check = async function () {
        try {
            var result = await Student.retrieveAll();
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "error", error: err })
        }
    }
    check();
})

accessStudent.get("/getSuggestions/:name", (req, res) => {
    console.log("params: "+req.params.name)
    let check = async function () {
        try {
            var result = await Student.getSuggestions(req.params.name);
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "error", error: err })
        }
    }
    check();
})



module.exports = accessStudent;