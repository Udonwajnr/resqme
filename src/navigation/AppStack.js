import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import IncidentScreen from '../screens/IncidentScreen';
import BackButton from '../components/BackButton';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AddEmergencyContactScreen from '../screens/AddEmergencyContactScreen';
import ContactBackButton from '../components/ContactBackButton';
import MapScreen from "../screens/MapScreen"
import ExploreScreen from '../screens/ExploreScreen';
import { MaterialIcons } from '@expo/vector-icons';
import FirstAidScreen from '../screens/FirstAidScreen';
import FirstAidDetails from '../screens/FirstAidDetails';
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

  <Tab.Screen name="Explore" component={ExploreScreen} options={{
          tabBarIcon:({focused})=>(<MaterialIcons name="explore" size={24} color={focused?"#C00100":"#cfcfd0"} />),
          headerShown:false,
          // tabBarButton: () => null,
          // tabBarStyle: { display: "none" },
      }} 
      />

    <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
        headerShown:false,
        // tabBarButton: () => null,
        // tabBarStyle: { display: "none" },
    }} 
    />

  

    <Tab.Screen name="Incident" component={IncidentScreen} options={{
            tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            // headerShown:true,
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

<Tab.Screen name="FirstAidDetails" component={FirstAidDetails} options={{
            tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            // headerShown:true,
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
        headerShown:false,
        headerLeft: (navigation) => <BackButton/>,
        headerTitle:"Report An Incident",
        headerTitleAlign: 'center',
            // tabBarButton: () => null,
            // tabBarStyle: { display: "none" },
    }} 
    />

    <Tab.Screen name="AddEmergencyContact" component={AddEmergencyContactScreen} options={{
            // tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            headerShown:true,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
            headerTitle:"Add Emergency Contact",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontWeight:"bold",
              fontSize:17,
              color:'black', 
              textAlign:"left",
          },
          headerLeft: (navigation) => <ContactBackButton/>,
          
    }} 
    />

<Tab.Screen name="FirstAid" component={FirstAidScreen} options={{
            // tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            headerShown:false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
            headerTitle:"First Aid",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontWeight:"bold",
              fontSize:17,
              color:'black', 
              textAlign:"left",
          },
    }} 
    />
<Tab.Screen name="MapScreen" component={MapScreen} options={{
            // tabBarIcon:({focused})=>(<Feather name="phone-call" size={24} color={focused?"#C00100":"#cfcfd0"} />),
            headerShown:false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
            headerTitle:"Add Emergency Contact",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontWeight:"bold",
              fontSize:17,
              color:'black', 
              textAlign:"left",
          },
          headerLeft: (navigation) => <ContactBackButton/>,
    }} 
    />
    </Tab.Navigator>
  )
}