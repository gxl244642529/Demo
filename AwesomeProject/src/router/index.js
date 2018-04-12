/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen'
// import TabRouter from './src/components/TabRouter'
import BackButton from '../widget/BackButton'
import Test from '../components/Test'
import Detail1 from '../components/Detail1'

import {
  Home_Fou,
  Home_NoFou,
  Licai_Fou,
  Licai_NoFou,
  Server_Fou,
  Server_NoFou,
  My_Fou,My_NoFou
} from '../resources/ImageResources'

const StackOptions = ({navigation}) => {

  //console.log(navigation);
  onBack=()=>{
    console.log("返回")
    this.props.navigation.goback();
  }
  return {
      headerTintColor: '#333333',
      headerStyle:{height:80 },
      headerBackTitle:null,
      headerTitleStyle : {left:0,fontSize:25,fontWeight:'500'},
      headerLeft:<BackButton onPress={console.log("返回测试")}/>,
      headerRight:( <Text ></Text> )
    };
};

const Home = TabNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: ()=> TabOptions('首页',Home_NoFou,Home_Fou,'首页'),
    },
    ProfileScreen: {
        screen:ProfileScreen,
        navigationOptions: ()=> TabOptions('理财',Licai_NoFou,Licai_Fou,'理财'),
    },
    Test3: {
        screen:ProfileScreen,
        navigationOptions: ()=> TabOptions('服务',Server_NoFou,Server_Fou,'服务'),
    },
    Test4:{
        screen:MainScreen,
        navigationOptions: ()=> TabOptions('我的',My_NoFou,My_Fou,'我的'),
    },
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:true, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    // tabBarOptions:{
    //     // iOS属性
    //     // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
    //     // activeTintColor:'red', // label和icon的前景色 活跃状态下（选中）。
    //     // inactiveTintColor:'#bfbfbf', // label和icon的前景色 不活跃状态下(未选中)。
    //     //
    //     // activeBackgroundColor:'#fff', //label和icon的背景色 活跃状态下（选中） 。
    //     // inactiveBackgroundColor:'#fff', // label和icon的背景色 不活跃状态下（未选中）。
    //
    //     showLabel:true, // 是否显示label，默认开启。
    //     // style:{}, // tabbar的样式。
    //     // labelStyle:{}, //label的样式。
    //
    //     // 安卓属性
    //
    //     // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
    //     // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
    //     showIcon:true, // 是否显示图标，默认关闭。
    //     // showLabel:true, //是否显示label，默认开启。
    //     // style:{}, // tabbar的样式。
    //     // labelStyle:{}, // label的样式。
    //     // upperCaseLabel:false, // 是否使标签大写，默认为true。
    //     // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
    //     // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
    //     // scrollEnabled:false, // 是否启用可滚动选项卡。
    //     // tabStyle:{}, // tab的样式。
    //     // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
    //     // labelStyle:{}, // label的样式。
    //     // iconStyle:{}, // 图标的样式。
    // },4e3a 678
    tabBarOptions:{
      showIcon:true,
      activeTintColor:'#ffb33a',
      inactiveTintColor:'#bfbfbf',
      style:{backgroundColor:'#ffffff',paddingTop:6.5},
      labelStyle: {fontSize:14,marginTop:3},
      indicatorStyle:{height:0}
  }

});


const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({focused})=> {
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height:24,width:24,resizeMode:'contain',}]}

            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:22,color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'#fff'};
    const tabBarVisible = true;
    // const header = null;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

export default  AppNavigator = StackNavigator({
  Home: {screen: Home,
  navigationOptions:{
      header:null,
    }},

  Test:{screen:Test,navigationOptions:{
    headerTitle:"我是测试界面"
  }},
  Detail1:{
      screen:Detail1,
  },


},{ navigationOptions: ({navigation}) => StackOptions({navigation})});
