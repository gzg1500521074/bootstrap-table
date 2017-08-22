let express = require('express');
let router = express.Router();

let tableInfo = require('../controllers/index.js');

/*获取表格的数据*/
router.get('/', tableInfo.index);

module.exports = router;
