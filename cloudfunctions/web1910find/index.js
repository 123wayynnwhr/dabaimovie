
// 云函数入口函数
// 1.创建云对象:连接云平台其它组件
const cloud = require('wx-server-sdk')
// 2.初始化云对象
cloud.init()
// 3.创建数据库对象(云函数连接云数据库)
const db = cloud.database();
// 云函数入口函数
exports.main = async(event, context) => {
  // 功能:查询web1910集合中所有数据
  try {
    return await db
      .collection("web1910") //指定集合
      .get()                 //查询
      .then(res => {         //查询结果
        return res
      })
      .catch(err => {
        console.log(err)
      })
  } catch (e) {
    console.log(e)
  }

}