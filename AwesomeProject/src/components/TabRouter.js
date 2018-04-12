import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

// import TabNavigator from '../widget/TabNavigator'
import TabNavigator from 'react-native-tab-navigator';
import CommonStyle from '../../lib/CommonStyle'
import MainScreen from './MainScreen'
import ProfileScreen from './ProfileScreen'
import {
  Home_Fou,
  Home_NoFou,
  Licai_Fou,
  Licai_NoFou,
  Server_Fou,
  Server_NoFou,
  My_Fou,My_NoFou
} from '../resources/ImageResources'

export default class  TabRouter extends Component{
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'Home'
    }
  }
  _renderTabarItems(selectedTab,title,icon,selectedIcon,Component){
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === selectedTab}
        title={title}
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.icon} source={icon} resizeMode="contain"/>}
        renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} resizeMode="contain"/>}
        onPress={() => this.setState({ selectedTab: selectedTab })} >
         <Component />
       </TabNavigator.Item>
    )
  }
  render(){

    return(
      <View style={CommonStyle.container}>
        <TabNavigator tabBarStyle={styles.tabBarStyle}>
          {this._renderTabarItems('Home',"首页",Home_NoFou,Home_Fou,MainScreen)}
          {this._renderTabarItems('Licai',"理财",Licai_NoFou,Licai_Fou,ProfileScreen)}
          {this._renderTabarItems('Server',"服务",Server_NoFou,Server_Fou,MainScreen)}
          {this._renderTabarItems('My',"我的",My_NoFou,My_Fou,ProfileScreen)}
      </TabNavigator>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
      width: 24,
      height: 24,
  },
  tabBarStyle:{
    backgroundColor:'#fff',
    height:60,
    alignItems:'center'
  },
  tabText:{
    color:'#bfbfbf',
    fontSize:12
  },
  selectedTabText:{
   color:'#ffb33a',
   fontSize:12
 },
});
