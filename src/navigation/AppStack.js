import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import IncidentScreen from '../screens/IncidentScreen';
import BackButton from '../components/BackButton';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:"#C72020",
      tabBarInactiveTintColor:"#cfcfd0",
      tabBarStyle:{
          backgroundColor:"white"
      },
      headerStyle:{
          backgroundColor:"white",
      },
      headerTitleStyle:{
          fontWeight:"bold",
          fontSize:25,
          color:'black', 
          textAlign:"center",
      },
      headerTitleAlign:"center"
      }}>

    <Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarIcon:({focused})=>(<Entypo name="home" size={24} color={focused?"#C00100":"#cfcfd0"} />),
    headerShown:false
    }}/>

    <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
        headerShown:false,
        // tabBarButton: () => null,
        // tabBarStyle: { display: "none" },
    }} 
    />

    <Tab.Screen name="Incident" component={IncidentScreen} options={{
            tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            headerShown:true,
            headerStyle:{
            // backgroundColor:"red",
            // padding:"10px"
            },
            // headerShadowVisible:"500px",
            tabBarButton: () => '',
            tabBarStyle: { display: "" },
            headerTitleStyle:{
            fontWeight:"bold",
            fontSize:17,
            color:'black', 
            textAlign:"left",
        },
        
        headerLeft: (navigation) => <BackButton/>,
        headerTitle:"Report An Incident",
        headerTitleAlign: 'center',
            // tabBarButton: () => null,
            // tabBarStyle: { display: "none" },
    }} 
    />

    <Tab.Screen name="More" component={IncidentScreen} options={{
            tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            headerShown:false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
    }} 
    />


    </Tab.Navigator>
  )
}