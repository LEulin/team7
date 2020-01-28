const express = require("express");
const insertStudent = express.Router();
const Student = require("./models/student");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

insertStudent.use(morgan("combined"));
insertStudent.use(bodyParser.json());
insertStudent.use(
  bodyParser.urlencoded({
    extended: false
  })
);

insertStudent.use(cors());
insertStudent.use(bodyParser.json());
insertStudent.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var students = [
  {
    name: "Jonathan Rivas",
    email: "jonathan.rivas@student.passerellesnumeriques.org",
    batch: "2020-B"
  },
  {
    name: "Lealyn Eulin",
    email: "lealyn.eulin@student.passerellesnumeriques.org",
    batch: "2020-B"
  },
  {
    name: "Nerissa Sunit",
    email: "nerissa.sunit@student.passerellesnumeriques.org",
    batch: "2020-B"
  },
  {
    name: "Another Student",
    email: "another.student@student.passerellesnumeriques.org",
    batch: "2020-B"
  },
];

insertStudent.get("/", (req, res) => {
  let check = async function() {
    try {
        for (var i=0; i< students.length ;++i) {
            var result = await Student.insertStudent(students[i]);
            console.log(result)
        }
        
      res.send(students);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "error", error: err });
    }
  };
  check();
});

module.exports = insertStudent;