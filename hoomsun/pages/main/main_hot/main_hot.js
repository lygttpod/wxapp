// pages/main/main_hot/main_hot.js
Page({
  data:{
     imgUrls:[],
     products:[],
    // imgUrls: [
    //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    // ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const _this = this
     wx.request({
      url: 'https://api.hoomxb.com/banners',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT,
      
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      
      success: function(res){
        console.log("imgUrls==============="+res.data.banners[0].picUrl)
        // success
        _this.setData({
          imgUrls:res.data.banners
        })
       
      }
    }),
    wx.request({
      url: 'http://120.25.102.84:9001/topProducts',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT,
      
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      
      success: function(res){
        console.log("data==============="+res.data.products)
         products:res.data.products[0]       
        // success
        _this.setData({
          products:res.data.products
        })
       
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})