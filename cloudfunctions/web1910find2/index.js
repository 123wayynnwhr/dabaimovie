// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 1.创建数据库对象并且连接数据库
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  // 查询条件age>19
  try{
  return await db.collection("web1910")  //指定操作集合
 .where({age:db.command.gt(19)})     //添加条件age>19
 .get()                               //查询
 .then(res=>{return res})            //查询结果
 .catch(err=>{console.log(err)})     //出错 
  }catch(e){
    console.log(e);
  }
}