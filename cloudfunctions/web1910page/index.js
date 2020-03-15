// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 1.引入第三方库 request 
// 2.创建变量url=request-promise
var re = require("request-promise")
exports.main = async (event, context) => {
  var url = `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`;
  // 云函数入口函数
  // event 事件对象:获取用户传数据age
  try {
    return re(url)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }catch(e) {
    console.log(e)
  }
}