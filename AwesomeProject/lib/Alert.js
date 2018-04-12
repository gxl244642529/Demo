import React, { Component } from 'react';

// const AModule = require('react-native').NativeModules.AModule
import { NativeModules } from 'react-native';
const AModule = NativeModules.AModule;
export default class Alert {

  static alert(info,callback){
    console.log(info)
  		callback = callback || function(){}
  		AModule.alert(info, callback );

  	}

  	static confirm(info,callback){
  		AModule.confirm(info,callback || function(){});
  	}

  	static toast(message){
  		AModule.toast(message);
  	}

  	static wait(message){
  		AModule.wait(message);
  	}
  	static cancelWait(){
  		AModule.cancelWait();
  	}

}
