var mongoose = require('mongoose');
const Promise = require("bluebird");
// 解决警告：node:1671) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise;

// 定义连接数据库地址(需要手动进入mongo终端界面进行创建数据库及数据库用户)
var dbUrl = 'mongodb://localhost:27017/table';

// Mongoose的默认连接逻辑从4.11.0起不再适用,需要加一个参数{useMongoClient: true}
var promise = mongoose.connect(dbUrl, {useMongoClient: true}, function(err){
    if(err){
        console.log(err.errmsg)
    }else{
        console.log('正在连接MongoDB数据库......')
    }
});

// 此处待详细查资料
promise.then(function(db){
    console.log('连接MongoDB数据库成功-^^-')
});

module.exports = mongoose;