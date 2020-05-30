const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConversationSchema = new mongoose.Schema({
    idUser: {type: String, required:true},
    idProfessional: {type: String, required:true},
    messages: [{
        idSender: String,
        date: Date,
        content: String
    }]

})

module.exports = mongoose.model('Conversation', ConversationSchema);