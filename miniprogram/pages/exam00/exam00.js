// pages/exam00/exam00.js
Page({
  data: {

  },
 f2:function(){
  //  功能:调用云函数web1910sum
  wx.cloud.callFunction({
    name:"web1910sum",  //云函数名称
    data:{i:10,j:20}    //传递数据
  })
  .then(res=>{        //调用成功
    console.log(res)  //结果
  })
  .catch(err=>{
    console.log(err)
  })
 },
 f3:function(){
  //  功能:调用云函数web1910find
  // #查询web1910集合中所有记录信息
  wx.cloud.callFunction({
    name:"web1910find"
  })
    .then(res => {        //调用成功
      console.log(res)  //结果
    })
    .catch(err => {
      console.log(err)
    })
 },
  f4: function () {
    //  功能:调用云函数web1910xzfind
    // #查询web1910集合中所有记录信息
    wx.cloud.callFunction({
      name: "web1910xzfind"
    })
      .then(res => {        //调用成功
        console.log(res)  //结果
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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