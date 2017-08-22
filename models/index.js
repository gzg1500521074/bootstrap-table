let mongoose = require('../config/db-config');

let tableSchema = new mongoose.Schema({
    createdate: {
        type:Date,
        default: Date.now
    },
    username:String, 
    address: String
});

// 根据Schema创建Model
module.exports = mongoose.model('table', tableSchema);