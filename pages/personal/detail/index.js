// pages/personal/detail/index.js
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone: '',
      phoneMsg:'',
      number:"",
      remark:'',
      username:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number:'',
      remark:'',
      phone:'',
      phoneMsg:''
    })
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

  },
  checkPhone(e) {
    if(!this.data.phone) {
      this.setData({'phoneMsg': '手机号不能为空'})
      return false
    } else if (!/^1[3457896]\d{9}$/.test(this.data.phone)) {
      this.setData({'phoneMsg': '请输入格式正确的代码'});
      return false;
    } else {
      this.setData({'phoneMsg': ''});
      return true
    }
  },
  onClickIcon(value) {
    Toast.success('用户名只允许输入手机号');
  },
  onSubmit(){
    let obj = {
      number: this.data.number,
      phone: this.data.phone,
      username: this.data.username,
      remark: this.data.remark
    };
    this.checkPhone();
    console.log(obj);
  }
})