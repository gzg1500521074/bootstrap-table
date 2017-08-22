var moment = require('moment');

moment.locale('zh-cn'); // 使用中文

var formatDate = function (date, friendly) {
  // 将从mongodb数据库取出的数据直接传进moment方法即可,不用进行其它转换
  date = moment(date);

  if (friendly) {
    return date.fromNow();  // 友好提示样式时间
  } else {
    return date.format('YYYY-MM-DD HH:mm:ss');// 标准时间
  }
};

// 格式化时间
module.exports = formatDate;

/*得到标准中国时间方法*/
// <%= topicData.createTime.toLocaleDateString()+' '+ topicData.createTime.toTimeString().replace(/\sGM.*$/, '') %>