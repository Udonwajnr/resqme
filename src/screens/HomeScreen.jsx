import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {PulseAnimation} from 'react-native-animated-pulse';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 flex-col bg-slate-50 py-3.5">
        <View className="flex-row justify-between px-4">
            <Text className="text-lg font-bold">Hi, Omotola Bella</Text>
            <View>
                <FontAwesome5 name="bell" size={24} color="black" />
            </View>
        </View>

        <View className="px-4">
            <View className="mt-9">
                <Text className="text-center text-xl font-bold">Are you in an Emergency?</Text>
                <Text className="text-center text-[#b2b9c0] mt-3">Press the sos button ,your live location will be shared with the nearest help center and your emergency contact.</Text>            
            
                <View className="flex-row justify-center items-center my-5">
                    <TouchableOpacity className="bg-[#c72020] w-40 h-40 rounded-full flex-col justify-center items-center border-2 border-[#b22123]" onPress={()=>navigation.navigate("Incident")}>
                        <Text className="text-white text-2xl font-bold">SOS</Text>
                        <Text className="text-white">Press for 3 seconds</Text>    
                    </TouchableOpacity>                
                <View className="absolute -z-10">
                    <PulseAnimation color={'red'} numPulses={8} diameter={190} speed={4000} duration={5000} />
                </View>

                </View>
            </View>

                
            {/* location */}

            
            <View className="  bg-[#ecedf0]  rounded-lg flex-row items-center py-3 px-3 mt-4">
                <View className="mr-3">
                    <Entypo name="location-pin" size={24} color="black" />
                </View>

                <View className="flex-col ml-3">
                    <Text className="text-[#b2b9c0]">Your Current Location</Text>
                    <Text className="font-bold">14,Adeogun Road, Fadeyi, Lagos</Text>
                </View>

            </View>
            
            {/* remeber the iconns */}

            {/* and notification */}
            
            <View className="">
                <Text className="font-bold text-base my-2">What is your Emergency?</Text>
                <View className="flex-row flex-wrap gap-3 mt-0.5">
                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident")}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128657;</Text>
                        </View>
                        <Text className="ml-1">Medical</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident")}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128293;</Text>
                        </View>
                        <Text className="ml-1">Fire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident")}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#127786;&#65039;</Text>
                        </View>                   
                        <Text className="ml-1">Natural Disaster</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident")}>
                        <Text className="mr-1 text-lg">💥</Text>
                        <Text className="ml-1">Accident</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident")}>
                    <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128298;</Text>
                        </View> 
                        <Text className="ml-1">Violence</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md"onPress={()=>navigation.navigate("Incident")}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128104;&#8205;&#128658;</Text>
                        </View> 
                        <Text className="ml-1 ">Search and Rescue</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen