let userModel = require('../models/index.js');

let tableInfo = {};

tableInfo.index = async (req, res, next) => {
    // 获取集合中文档的数量
    let tableDataLen = await userModel.count();
    let currPage = req.query.page || 1;
    if(currPage<=0){currPage=1;}
    const pageSize = 3;
    let pageMax = Math.ceil(tableDataLen/pageSize);
    if(currPage>=pageMax){ currPage = pageMax;}
    let pageSkip = (currPage-1)*pageSize;

    // 获取集合的数据
    let tableData = await userModel.find().limit(pageSize).skip(pageSkip).sort({createdate:-1}).exec();

    // 渲染数据
    res.render('index',{
        tableData:tableData,
        currPage: currPage,
        pageCount: pageMax,
        pageSkip: pageSkip
    });
}

module.exports = tableInfo;