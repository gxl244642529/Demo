import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,

} from 'react-native';
const WIDTH = Dimensions.get('window').width;
import {Head,Notice,Onli_server,card_d1} from '../resources/ImageResources'
import WebView from '../../lib/WebView'
import { withNavigation  } from 'react-navigation'
import { NavigationActions } from 'react-navigation'
import Api from '../utils/Http'
import Swiper from 'react-native-swiper';
import { NativeModules } from 'react-native';
// import ShareView from '../../lib/ShareView'
// const SendMessage = NativeModules.SendMessage;
import Sharesdk from '../../lib/Sharesdk'
import JPushModule from 'jpush-react-native';
class Header extends Component{
  _test=()=>{
    console.log("测试中....")
    NavigationActions.navigate({routeName:'Test'})
  }
  componentDidMount(){
    let data = {version:2700}
    Api.api({
      api:'m_config/config2700',
      data:data,
      success:(result)=>{
        console.log(result);
      }
    });
  }
  render(){
    // const { navigate } = this.props.navigation;

    return(
      <View style={{backgroundColor:'#fff'}}>
        <View style={{height:50,alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginLeft:15,marginRight:15,marginTop:12}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={this.props.onPress}>
            <Image source={Head} style={{width:30,height:30,marginLeft:15,borderRadius:5}} />
            <Text style={{paddingLeft:14.5}}>184*****681</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
              <Image source={Onli_server} style={{width:20,height:22,margin:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Notice} style={{width:20,height:22,marginRight:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
export default class  MainScreen extends Component{
  constructor(props) {
    super(props);
    // console.log(WIDTH);
    this.state={

    }
  }
  componentDidMount(){
    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad((resultCode) => {
          if (resultCode === 0) {}
    });
    // 接收自定义消息
   JPushModule.addReceiveCustomMsgListener((message) => {
     this.setState({pushMsg: message});
   });
   // 接收推送通知
    JPushModule.addReceiveNotificationListener((message) => {
      console.log("receive notification: " + message);
    });
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.log("Opening notification!");
      console.log("map.extra: " + map.extras);
      // 可执行跳转操作，也可跳转原生页面
      // this.props.navigation.navigate("SecondActivity");
    });
  }
  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }
  _onPress=()=>{
    SendMessage.sendMsg("18459150681",(result)=>{
      console.log(result);
    })
  }
  _share=()=>{
    // this.setState({share:true})

    Sharesdk.share((result)=>{
      console.log("snfjkashdfdahnf"+result);
    })
  }
          //  <WebView  url="https://www.baidu.com" style={{width:300,height:300}}></WebView>
  render() {
     return (
       <View >
          <StatusBar backgroundColor={'#fff'} barStyle ={'dark-content'}/>
          <Header onPress={()=>this.props.navigation.navigate('Test')}/>
          <View style={{backgroundColor:'#fff',height:200}}>
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View><Image source={card_d1} style={{width:329.5,height:188,backgroundColor:'red'}} resizeMode="contain"/></View>
                  <Image source={card_d1} style={{width:329.5,height:188}} resizeMode="contain"/>
                    <Image source={card_d1} style={{width:329.5,height:188}} resizeMode="contain"/>
            </Swiper>

          </View>
          <ScrollView style={{backgroundColor:'#fff',alignSelf:'center',marginTop:11}} horizontal={true}>
            <Image source={card_d1} style={{width:329.5,height:188}} resizeMode="contain"/>
              <Image source={card_d1} style={{width:329.5,height:188}} resizeMode="contain"/>
          </ScrollView>
          <TouchableOpacity onPress={this._onPress}><Text>测试发送短信</Text></TouchableOpacity>
          <TouchableOpacity onPress={this._share}><Text>测试分享</Text></TouchableOpacity>
          {this.state.share&&<ShareView/>}

       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaeb',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
