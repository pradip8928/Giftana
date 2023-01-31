/*

 
*/




const mongoose = require("mongoose");


const messageSchema = mongoose.Schema({




    messagesUpdateOn: {
        type: Date,
        default: Date.now,
    },
    messagesCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("messages", messageSchema);