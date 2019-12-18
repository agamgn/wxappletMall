import request from './network.js'
import { baseURL } from './config.js'


export function getMultiData() {
  console.log(baseURL + '/home/multidata')
  return request ({
    url: baseURL +'/home/multidata'
  })
}


export function getGoodsData(type,page) {
  return request({
    url: baseURL+"/home/data",
    data:{
      type,
      page
    }
  })
}