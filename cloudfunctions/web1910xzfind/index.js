// 云函数入口文件
const cloud = require('wx-server-sdk')
// 1.引入第三方模块request-promist
var rp=require("request-promise");
// 云函数入口函数
cloud.init()
exports.main = async (event, context) => {
  // 2.创建变量url
  var url ="http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=30";
  try{
  // 3.使用rp发送请求  
  return rp(url)              //发送请求
  .then(res=>{return res})    //成功回调
  .catch(err=>{return err})   //失败回调  
  }catch(e){
    console.log(e)
  }
 
}