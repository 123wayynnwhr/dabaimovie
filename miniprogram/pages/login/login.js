// pages/login/login.js
//1:引入存储工具类
const store = require("../../utils/store.js");
console.log(1);
console.log(store);
Page({
  data: {
    //2:当小程序启动:如果己经验证获取存储对象中id返回
    //userId模板登录判断条件 有 登录成功
    userId:store.getItem("userId")
  },
  getUserInfo3:function(e){
    //功能:获取用户公开信息
    //console.log(e);
    //1:第一步获取用户信息
    var user = e.detail.userInfo;
    //console.log(1);
    //console.log(user);
    //3:第二步调用小程序云函数
    wx.cloud.callFunction({
      name:"wxlogin",
      data:{user}
    }).then(res=>{
    //4:云函数返回UserId 保存 UserId登录凭证
      //console.log(res.result.userId);
      //5:将云函数返回userId保存存储对象中
      store.setItem("userId",res.result.userId);
      console.log(2);
      console.log(store.getItem("userId"));
      //6:立即更新data数据
      this.setData({
        userId:res.result.userId
      })
      console.log(3);
      console.log(this.data.userId);
      //7:在模板中添加判断显示
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})