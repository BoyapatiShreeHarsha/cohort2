const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shreeharshaboyapati042:mpaUEIYSnzjXdddU@cluster0.tak4cfk.mongodb.net/todo_list');

// Define schemas
const NotesSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    done:Boolean
});


const Note = mongoose.model('Note', NotesSchema);


module.exports = {
    Note
}