import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: '#FFF4CC',*/
    backgroundColor:'#eaeaeb'
  },
  row:{flexDirection:'row'},
  loadingIndicator:{
    width:30,
    height:30
  },
  containerCenter:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  titleText:{
  	textAlign:'center',
  	fontSize:15,
  	top:13,
  	left:0,
    color:'#EB614B',
  	right:0,
  	position:'absolute',
    // width:100,
    // backgroundColor:'red',
  },
  titleRight:{
    textAlign:'right',
    fontSize:15,
    color:'#EB614B',
    top:13,
    left:0,
    right:10,
    // backgroundColor:'red',
    position:'absolute'
  },
  style_image:{
    // borderRadius:50,
    height:70,
    width:100,
    resizeMode:'contain',
    marginTop:30,
    alignSelf:'center',
  },
});

module.exports = commonStyle;
