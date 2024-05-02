import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const HealthCenters = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white">
        <View>
        <View className="py-2 bg-white relative">
            <TouchableOpacity onPress={() => navigation.navigate("Explore")} className="absolute left-2 top-2 z-20">
                <Entypo name="chevron-left" size={29} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl text-center capitalize text-[17px] font-extrabold">Health Centers Around Me</Text>
            </View>
        </View>
        <Text className="px-3 t font-bold">Here are some Health centers found around your location</Text>
        <ScrollView className="h-full bg-white px-3 ">
            <TouchableOpacity className="flex-row gap-2 border-b border-b-[#cccfd2] py-3 items-center">
                 <Entypo name="location-pin" size={28} color="#c72020" />
                <View className="mr-9">
                    <Text className="text-base font-bold">Ibom Multi-Specialty Hospital</Text>
                    <Text className="text-[#cccfd2] font-bold mt-1">Ekit Itam II, Itu L.G.A.,  Uyo Ikot Ekpene Road, Uyo, Akwa Ibom State</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-2 border-b border-b-[#cccfd2] py-3 items-center">
                 <Entypo name="location-pin" size={28} color="#c72020" />
                <View className="mr-9">
                    <Text className="text-base font-bold">Ibom Multi-Specialty Hospital</Text>
                    <Text className="text-[#cccfd2] font-bold mt-1">Ekit Itam II, Itu L.G.A.,  Uyo Ikot Ekpene Road, Uyo, Akwa Ibom State</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-2 border-b border-b-[#cccfd2] py-3 items-center">
                 <Entypo name="location-pin" size={28} color="#c72020" />
                <View className="mr-9">
                    <Text className="text-base font-bold">Alma Clinics</Text>
                    <Text className="text-[#cccfd2] font-bold mt-1">No 19 Ikot Udoro Street, 149 off Iko Ekpene Road, By NYSC Secretariat Road,  Uyo, Akwa Ibom Nigeria</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-2 border-b border-b-[#cccfd2] py-3 items-center">
                 <Entypo name="location-pin" size={28} color="#c72020" />
                <View className="mr-9">
                    <Text className="text-base font-bold">Domingo Specialist Hospital</Text>
                    <Text className="text-[#cccfd2] font-bold mt-1">Plot 9 Unit E Ewet Housing Estate,  Uyo, Akwa Ibom Nigeria</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HealthCenters