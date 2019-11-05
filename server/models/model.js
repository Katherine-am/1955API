const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/API', {useNewUrlParser: true});

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Posts must have a name"]},
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema);

module.exports = {
    Person: Person
}