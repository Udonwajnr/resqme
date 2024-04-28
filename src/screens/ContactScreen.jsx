import React from 'react'
import { Text, TouchableOpacity,View,useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PublicContact from '../components/PublicContact';
import PersonalContact from '../components/PersonalContact';
import {TabView, SceneMap,TabBar} from "react-native-tab-view"
import axios from 'axios';

const FirstRoute = () => (
    <PublicContact/>
  );
  
  const SecondRoute = () => (
    <PersonalContact/>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#c72020', }}
      style={{ backgroundColor: 'white' }}
      activeColor='#c72020'
      inactiveColor='#b9b9bc'
      
    />
  );
const ContactScreen = ({navigation}) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'General' },
      { key: 'second', title: 'Personal' },
    ]);

  return (
    <SafeAreaView className="flex-1 px-4 flex-col py-2 bg-white">
        <View className="flex-row justify-between mb-5 ">
            <Text className="text-xl">Emergency Contacts</Text>
            {/* <AntDesign name="search1" size={18} color="black" /> */}
        </View>
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{backgroundColor: 'white',}}
      renderTabBar={renderTabBar}
    />
    </SafeAreaView>
  )
}

export default ContactScreen