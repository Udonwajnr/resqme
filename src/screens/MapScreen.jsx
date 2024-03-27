import React,{useState} from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import MapView,{Marker} from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

    return (
    <SafeAreaView className="flex-1 flex-col bg-slate-50">
        <View className="relative">
            <View className="h-">
                <MapView
                    style={{width:"100%",height:"100%",alignSelf: 'stretch'}}
                    region={mapRegion}>
                    <Marker coordinate={mapRegion} title='Marker' />
                </MapView>

            </View>

              <View className=" h-56 px-4  bg-white py-5 absolute w-full bottom-0 rounded-t-3xl">
                    <Text className="font-bold text-lg text-center ">Help is on the way!</Text>
                    <Text className="text-center mt-5 text-[#b2b9c0]">Please stand by and stay somewhere safe while help is coming</Text>
                    
                    <TouchableOpacity className="h-10 mt-8 rounded-md bg-[#e43151] justify-center items-center" >
                        <Text className="text-white">I'm safe now, Cancel Alert</Text> 
                     </TouchableOpacity>
              </View>

        </View>
    </SafeAreaView>
  )
}

export default MapScreen