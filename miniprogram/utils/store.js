// miniprogram/utils/store.js
// 通用小程序存储数据工具类
module.exports={
  // 保存数据
 setItem(key,value){
   wx.setStorageSync(key,value)
 },
  // 获取数据
  getItem(key){
  return wx.getStorageSync(key)
  },
  // 清空数据
  clear(key){
   key?wx.removeStorageSync(key):wx.clearStorageSync();
  }
}