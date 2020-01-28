const express = require('express')
const app = express();
const path = require("path");
const record = require("./models/record");
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3002
const morgan = require('morgan');
const mongoose = require('mongoose');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const accessRecord = require('./accessRecords');
app.use('/record', accessRecord );

const Student = require('./accessStudent');
app.use('/student', Student );

const insertStudent = require('./insertStudent');
app.use('/insertStudents', insertStudent );


app.get('/', (req, res) => {
    res.send("Server is running")
})

// mongoose
//     .connect('mongodb+srv://badgebookdb:badgebookdb2019@cluster0-pn3a6.mongodb.net/bigdataproject?retryWrites=true&w=majority', {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//     })
//     .then(() => console.log('DB Connected!'))
//     .catch(err => {
//         console.log(err);
//         console.log("CONNECTION ERROR!");
//     });


mongoose.connect('mongodb://localhost:3002/team7', {
    useNewUrlParser: true,       
    useUnifiedTopology: true
})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected")
});    

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(port, function () {
    console.log('listening to port ' + port)
})