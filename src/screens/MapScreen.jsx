import React,{useEffect, useState} from 'react'
import { View,Text, TouchableOpacity,BackHandler } from 'react-native'
import MapView,{Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GOOGLE_MAP_KEY} from "@env"

const MapScreen = ({route,navigation}) => {
  const {latitude,longitude }  = route.params
  const [location,setLocation] = useState({latitude:0,longitude:0}) 
  const [isSelectionModeEnabled, setIsSelectionModeEnabled]=React.useState(false);
  const [mapRegion, setmapRegion] = useState({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      useEffect(()=>{
        if(route.params.latitude && route.params.longitude && route.params.userLocation){
        setLocation({latitude:route.params.latitude,longitude:route.params.longitude,userLocation:route.params.userLocation})
        }
        else{
          setLocation({latitude:0,longitude:0})
        }

      },[route.params])

      useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            navigation.navigate("HealthCenters")
          };
          const subscription = BackHandler.addEventListener(
            'hardwareBackPress',
            onBackPress
          );
    
          return () => subscription.remove();
        }, [])
      );
      return (
    <SafeAreaView className="flex-1 flex-col ">
        <View className="relative">
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{width:"100%",height:"100%",alignSelf: 'stretch'}}
                    region={mapRegion}
                    showsMyLocationButton   
                    showsUserLocation
                    >

                      <Marker coordinate={{latitude:location.latitude,longitude:location.longitude}}/>
                      <MapViewDirections
                      origin={location.userLocation}
                      destination={{latitude:location.latitude,longitude:location.longitude}}
                      apikey={GOOGLE_MAP_KEY}
                      strokeWidth={3}
                      strokeColor="hotpink"
                    />
                    {/* <Marker coordinate={mapRegion} title='Me' /> */}
                </MapView>
            </View>
              {/* <View className=" h-56 px-4  bg-white py-5 absolute w-full bottom-0 rounded-t-3xl">
                    <Text className="font-bold text-lg text-center ">Help is on the way!</Text>
                    <Text className="text-center mt-5 text-[#b2b9c0]">Please stand by and stay somewhere safe while help is coming</Text>
                    
                    <TouchableOpacity className="h-10 mt-8 rounded-md bg-[#e43151] justify-center items-center" >
                        <Text className="text-white">I'm safe now, Cancel Alert</Text> 
                     </TouchableOpacity>
              </View> */}

        </View>
    </SafeAreaView>
  )
}

export default MapScreen