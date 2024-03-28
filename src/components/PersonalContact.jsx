import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const PersonalContact = () => {
  return (
    <View className="mt-3">
        <View className=" flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-3">
                <Entypo name="user" size={18} color="black" />
                <View>
                    <Text className="text-base">Dad</Text>
                    <Text className="text-[#cecfd1]">+23412345678</Text>
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={17} color="#cecfd1" />
                </TouchableOpacity>
            </View>
        </View>

        <View className=" flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-3">
                <Entypo name="user" size={18} color="black" />
                <View>
                    <Text className="text-base">Mum</Text>
                    <Text className="text-[#cecfd1]">+23412345678</Text>
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={17} color="#cecfd1" />
                </TouchableOpacity>
            </View>
        </View>

        <View className=" flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-3">
                <Entypo name="user" size={18} color="black" />
                <View>
                    <Text className="text-base">Junior</Text>
                    <Text className="text-[#cecfd1]">+23412345678</Text>
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={17} color="#cecfd1" />
                </TouchableOpacity>
            </View>
        </View>

        <View className=" flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-3">
                <Entypo name="user" size={18} color="black" />
                <View>
                    <Text className="text-base">Aunty Bella</Text>
                    <Text className="text-[#cecfd1]">+23412345678</Text>
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={17} color="#cecfd1" />
                </TouchableOpacity>
            </View>
        </View>

        
    </View>
  )
}

export default PersonalContact