// pages/detail/detail.js
const app = getApp();
console.log(app.globalData)
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
   hidden: false,
   iconList: [{
    icon: 'cardboardfill',
    color: 'red',
    badge: 120,
    name: 'VR'
  }, {
    icon: 'recordfill',
    color: 'orange',
    badge: 1,
    name: '录像'
  }, {
    icon: 'picfill',
    color: 'yellow',
    badge: 0,
    name: '图像'
  }, {
    icon: 'noticefill',
    color: 'olive',
    badge: 22,
    name: '通知'
  }, {
    icon: 'upstagefill',
    color: 'cyan',
    badge: 0,
    name: '排行榜'
  }],
  contentList: ['轮播','form表单','toast示例','dss'],
  nvTitle: ''
  },
  onLoad (option) {
    const eventChannel = this.getOpenerEventChannel()
    console.log(option.query)
    eventChannel.on('acceptDataFromOpenerPage', (data)=> {
      console.log(data)
      this.setData({
        nvTitle: data.desc
      })
    })
  },
  openShare() {
    this.setData({
      hidden: !this.data.hidden
    })
  }
})
