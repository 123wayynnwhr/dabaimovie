// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 功能:完成二个整型数相加
  // 1.获取用户传递数据i,j 并且相加
  var sum=event.i+event.j;
  // 2.将结果返回 
  return {result:sum}

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}