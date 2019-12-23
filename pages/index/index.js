//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    zechinInfo: '深圳市则成电子股份有限公司成立于2003年01月23日，注册地位于深圳市龙岗区南湾街道丹竹头社区康正路48号莲塘工业区6号楼1楼(半层)、2楼、3楼、4楼（整层），法人代表为薛兴韩。经营范围包括智能手机传感器及组件、医疗电子监控器、汽车用LED照明系统、电动工具用电源控制板、10G以太网耦合器、高精密薄膜开关、柔性线路板、刚挠结合线路板和HDI高密度积层线路板、透明取酰亚胺薄膜、自动化设备的技术开发、销售；LED灯具、线连接、电源控制板、薄膜开关的销售；电子产品的技术开发与销售；国内贸易，经营进出口（法律、行政法规禁止的项目除外；法律、行政法规限制的项目须取得许可后方可经营）。^智能手机传感器及组件、医疗电子监控器、汽车用LED照明系统、电动工具用电源控制板、10G以太网耦合器、高精密薄膜开关的生产（凭有效的环保批复经营）。深圳市则成电子股份有限公司对外投资4家公司，具有1处分支机构。',
    zhaobiaoList: [{
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
    ],
    detailList: [],
    fold: true,
    foldText: '展开',
    showIndex: -1
  },
  unfold: function(e) {
    var page = this;
    let value = !this.data.fold;
    var text = '';
    if (value) {
      text = '展开';
    } else {
      text = '收起';
    }
    this.setData({
      fold: value,
      foldText: text
    })
  },
  changeToggle: function(e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: -1
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getDetailList();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getDetailList: function() {
    var self = this;
    var detailArr = [];
    for (var i = 0; i < self.data.zhaobiaoList.length; i++) {
      detailArr[i] = self.data.zhaobiaoList[i].detail.split(";");
    }
    self.setData({
      detailList: detailArr
    })
    console.log(self.data.detailList);
  },
})