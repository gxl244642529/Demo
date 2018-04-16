import React, { Component } from 'react';
import{NativeModules} from 'react-native'
const Share = NativeModules.Share;


export default class Sharesdk {
  static share(callback){
    Share.share(callback);
  }
}
