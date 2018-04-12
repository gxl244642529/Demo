import React, { Component } from 'react';
import fetch from './fetch-polyfill';
import A from './Alert'
const ACCEPT = 'application/json'
const TYPE = 'application/json'
const DEFAULT_TIMEOUT = 5000;
const API_BASE = 'http://192.168.1.236:8091/api/'
const DEFAULT_METHOD = "POST"
const DEFAULT_HEADERS ={'Accept': 'application/json','Content-Type': 'application/json',}

export default class Api {
  static api(request){
    console.log("开始调用Api",request.api,request.data);
    let data ={
        timeout:request.timeout||DEFAULT_TIMEOUT,
        method:DEFAULT_METHOD,
        headers:DEFAULT_HEADERS,
        body:JSON.stringify(request.data)
    }
    fetch(API_BASE+request.api,data).then((response) => response.json())
      .then((responseData) => { // 上面的转好的json
          console.log("收到回复",responseData);
          let flag = responseData.flag;
          let result = responseData.result;
          switch (flag) {
            case -1:
              A.alert(result);
              break;
            case 0:
              request.success(result);
              break;
            default:
          }
      })
      .catch((error)=> {
          A.toast("网络错误")
      })
  }

}
