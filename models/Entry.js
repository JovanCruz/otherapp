var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    range:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('Entries', EntrySchema);