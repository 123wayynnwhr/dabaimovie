// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 1.引入模块request-promise
// 云函数入口函数
var rp = require("request-promise")
exports.main = async (event, context) => {
// 2.创建变量url
  var url = `http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
try{
return rp(url)
.then(res=>{return res})
.catch(err=>{console.log(err)})
}catch(e){
  console.log(e)
}
// 3.发送请求
}