const mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var Record = new mongoose.Schema({
  studentId: { type: ObjectId, required: true },
  studentName: { type: String, required: true },
  month: { type: String, required: true },
  amount: { type: Number, required: true },
  receivedBy: { type: String, required: true },
  dateReceived: { type: Date, default: Date.now(), required: false },
  batch: { type: String, required: true }
});


Record.statics.retrieveAll = async function () {
    return await this.aggregate([
        {
           $group: {
               _id: "$_id", monthsPaid: { $sum: 1 }, amountPaid: { $sum: "$amount"}
           }
        }
    ])
}

Record.statics.createRecord = async function(record) {
    var Record = new this(record);
     var result= await Record.save();
     console.log(result);
     return Record;
}


module.exports = mongoose.model('Record', Record);