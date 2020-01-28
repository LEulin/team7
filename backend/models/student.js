const mongoose = require("mongoose");

var Student = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  batch: { type: String, required: true }
});

Student.statics.retrieveAll = async function() {
  return await this.find();
};

Student.statics.insertStudent = async function(student) {
  var Student = new this(student);
  return await Student.save();
};
Student.statics.getSuggestions = async function(name) {
  var result = await this.find({ name: new RegExp(name, "i") });
  console.log(result);
  return result;
};

module.exports = mongoose.model("Student", Student);