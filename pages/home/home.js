// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'new':{page:0,list:[]},
      'pop':{page:0,list:[]},
      'sell':{page:0,list:[]}
    }
  },
  handleTabCllick(event){
    const index=event.detail.index;
    console.log(index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData();

    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
   
  },
  // 请求轮播
  _getMultiData(){
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })

    })
  },
  // 请求商品数据
  _getGoodsData(type){
    const page=this.data.goods[type].page+1;
    
    getGoodsData(type,page).then(res=>{
        const list=res.data.data.list;
        const oldList=this.data.goods[type].list;
        oldList.push(...list)

        const typeKey =`goods.${type}.list`;
        const pageKey=`goods.${type}.page`;
        this.setData({
          [typeKey]:oldList,
          [pageKey]:page
        }) 
    })
  },


})