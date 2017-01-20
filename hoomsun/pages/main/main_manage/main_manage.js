// pages/main/main_manage/main_manage.js
// Page({
//   data:{},
//   onLoad:function(options){
//     // 页面初始化 options为页面跳转所带来的参数
//   },
//   onReady:function(){
//     // 页面渲染完成
//   },
//   onShow:function(){
//     // 页面显示
//   },
//   onHide:function(){
//     // 页面隐藏
//   },
//   onUnload:function(){
//     // 页面关闭
//   }
// })
//获取应用实例  
var app = getApp()  
Page( {  
  data: {
    
    /** 
        * 页面配置 
        */  
        winWidth: 0,  
        winHeight: 0,  
    // tab切换  
    currentTab: 0,  

    products_scatter:[],
    products_plan:[],
    products_credit:[]
  },  
  onLoad: function() {  
    var _this = this;  
    
    /** 
     * 获取系统信息 
     */  
     wx.getSystemInfo( {  
      
      success: function( res ) {  
        _this.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
      
    });  


     getData(0,10,10,_this);
     
   },  
  /** 
     * 滑动切换tab 
     */  
     bindChange: function( e ) {  
      
      this.setData(
      { 
       currentTab: e.detail.current,
     }
     
     );  
      
    },  
  /** 
   * 点击tab切换 
   */  
   swichNav: function( e ) {  
    
    var _this = this;  
    
    if( this.data.currentTab === e.target.dataset.current ) {  
      console.log("this.data.currentTab === e.target.dataset.current");
      return false;  
    } else {  
      _this.setData( {  
        currentTab: e.target.dataset.current  
      })  
      console.log("this.data.currentTab != e.target.dataset.current");
    }  

    if(this.data.currentTab==0){
      console.log(this.data.currentTab);
      getData(0,10,10,_this);
    }else if(this.data.currentTab==1){
      console.log(this.data.currentTab);
      getData(2,10,10,_this);
    }else if(this.data.currentTab==2){
      console.log(this.data.currentTab);
      getData(1,10,10,_this);
    }
  }  


})  

function getData( category, offsety, limit,_this){
 wx.request({
  url: 'http://120.25.102.84:9001/products',
  data: {
    category: category ,
    offsety: offsety,
    limit: limit
  },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT,
      
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      
      success: function(res){
        console.log("data==============="+res.data.products)
        products:res.data.products[0]       
        // success
        if(category==0){
          _this.setData({
           
            products_scatter:res.data.products
          })
        }else if(category==1){
          _this.setData({
           
            products_credit:res.data.products
          })
        }else if(category==2){
          _this.setData({
           
            products_plan:res.data.products
          })
        }
        
        
      }
    });
};