import { View, Text,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const ExploreScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <ScrollView className="px-2">
            <View>
                <Text className="text-xl  mb-2">Explore</Text>
                <Text>Get access to some information to attend to emergences</Text>
            </View>

            <View className="mt-3">
                <TouchableOpacity className="flex-row gap-3 items-center border-b border-b-[#e0e2e3] py-2" onPress={()=>navigation.navigate("FirstAid")}>
                    <Image
                    source={require('../assets/firstaid.png')}
                    className="w-6 h-6 "
                    />
                    <Text className="text-lg font-">First Aid</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-3">
                <TouchableOpacity className="flex-row gap-3 items-center border-b border-b-[#e0e2e3] py-2">
                    <Image
                    source={require('../assets/flood.png')}
                    className="w-6 h-6 "
                    />
                    <Text className="text-lg font-">Disaster Preparedness</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-3">
                <TouchableOpacity className="flex-row gap-3 items-center border-b border-b-[#e0e2e3] py-2">
                    <Image
                    source={require('../assets/hospital.png')}
                    className="w-6 h-6 "
                    />
                    <Text className="text-lg ">Health Centers Around Me</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreScreen