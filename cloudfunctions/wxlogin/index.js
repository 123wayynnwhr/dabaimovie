// 云函数名称:wxlogin
// 功能:完成小程序云开发用户登录
// 功能一:获取小程序传递来数据user和OPENID小程序要素
// 功能二:查询是否在云数据库有匹配记录
//  没有记录表示没登录 添加并查询 返回 _id
// 有值表示登录成功

// 云函数入口文件
const cloud = require('wx-server-sdk')
// 1.初始云开发环境 添加环境id防止出错
cloud.init({
  env: "web1910-dd-h9u7r"
})

// 2.在云数据库添加集合 user
// 云函数入口函数
exports.main = async(event, context) => {
  // 3.获取云环境上下文对象
  const wxContext = cloud.getWXContext()
  // 4.连接云数据库对象
  const db = cloud.database();
  // 5.依据OPENID 查询集合user中是否有匹配的记录
  var result = await db.collection("user").where({
    openid: wxContext.OPENID
  }).limit(1).get();
  console.log(1);
  console.log(result);
  // 6.判断查询结果,如果没有记录
  if (result.data.length == 0) {
    // 6.1解构参数 user openid同步
    var params={
      // nickname:event.user.nickname,
      // url:event.user.url,
      // city:event.user.city,
      ...event.user,   //解构参数
      openid:wxContext.OPENID
    }
    console.log(2);
    console.log(params)
    // 6.2向user集合中添加一条记录 user openid同步
    const userData=await db.collection("user").add({
      data:params
    });
    // 6.3依据openid再次查询user集合中是否有匹配记录 tongbu 
    const result=await db.collection("user").where(
      {openid:wxContext.OPENID}).limit(1).get();
    console.log(3);
    console.log(result);
    // 6.4返回当前记录 _id
    return {userId:result.data[0]._id};
  } else {
    // 7.返回当前记录 _id
    return {userId:result.data[0]._id};
  }


  // return {
  //   openid: wxContext.OPENID, //跨平台
  //   appid: wxContext.APPID, //应用id
  //   result: result //!!!!
  // }

}