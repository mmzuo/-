//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imageList:
      [{
        id: 0,
        type: 'image',
        desc:'微信',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
          type: 'image',
          desc:'小程序',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      },{
        id: 2,
          type: 'video',
          desc:'不停的学习呀',
          url: '../../static/video/test.mp4',
      }],
    show: false,
    message: '',
    contentList:[{
      imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg',
      title: '封装小程序组件啊哦',
      time:'2012/10/22',
      msg:'5',
      like:'123',
      haslook: '233',
      id: 1
    },{
      imgurl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
      title: '封装小程序组件啊哦',
      time:'2012/10/22',
      msg:'5',
      like:'123',
      haslook: '233',
      id:2
    },{
      imgurl:'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
      title: '封装小程序组件啊哦',
      time:'2012/10/22',
      msg:'5',
      like:'123',
      haslook: '233',
      id:4
    }],
    sliderList:[{
      imgUrl:'../../static/image/tech.png',
      "name":"测试2"
    },{
      imgUrl:'../../static/image/tech.png',
      "name":"测试1"
    },{
      imgUrl:'../../static/image/technicalCount.png',
      "name":"测试2"
    },{
      imgUrl:'../../static/image/tech.png',
      "name":"测试2"
    },{
      imgUrl:'../../static/image/tech.png',
      "name":"测试1"
    },{
      imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
      "name":"测试2"
    },{
      imgUrl:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
      "name":"测试2"
    },{
      imgUrl:'../../static/image/tech.png',
      "name":"测试1"
    },{
      imgUrl:'../../static/image/technicalCount.png',
      "name":"测试2"
    }]
    //....其他配置
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    // var that = this;
    // var attentionAnim = wx.createAnimation({
    //   duration: 500,
    //   timingFunction: 'linear',
    //   delay: 0
    // })
    // //设置循环动画
    // this.attentionAnim = attentionAnim
    // var next = true;
    // setInterval(function () {
    //   this.data.count++;
    //   var index = this.data.count % 3;
    
    //     //根据需求实现相应的动画
    //     this.attentionAnim.opacity(0).step()
      
    //   this.setData({
    //     //导出动画到指定控件animation属性
    //     attentionAnim: attentionAnim.export(),
    //     imageSrcBack: this.data.imageList[index],
    //     selectIndex: index
    //   })
    //   this.attentionAnim.opacity(1).step()
    //   setTimeout(function () {
    //     that.setData({
    //       attentionAnim: attentionAnim.export({duration: 3}),
    //       imageSrc: that.data.imageList[index],
    //     })
    //   }, 500)
    // }.bind(this), 5000)
  },
  toAttention(e){
    wx.navigateTo({
      url: '../detail/detail?id='+ this.data.selectIndex,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { desc: e.target.dataset.desc })
      }
    })
  },
  getUserInfo(event) {
    console.log(event.detail);
  },
  openDialog(event){
    this.setData({show: true,
    message: event.target.dataset.name ?event.target.dataset.name : event.currentTarget.dataset.name
    })
  },
  onClose() {
    this.setData({ close: false });
  },
})
