import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const PublicEmergencyScreen = () => {
  return (
    <SafeAreaView className="flex-1 px-4 flex-col py-2 bg-white">
        <View>
            <Text>
                These are contacts of the selected option found in your location
            </Text>
            <View className="">
                <View className="flex-row justify-between border-b border-b-[#dbdee0] py-3">
                    <Text className="text-base ">08012345678</Text>
                    <TouchableOpacity className="flex-row gap-2">
                        <FontAwesome5 name="copy" size={18} color="#c72020" />
                        <Text className="text-[#c72020]">Copy</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between border-b border-b-[#dbdee0] py-3">
                    <Text className="text-base ">08012345678</Text>
                    <TouchableOpacity className="flex-row gap-2">
                        <FontAwesome5 name="copy" size={18} color="#c72020" />
                        <Text className="text-[#c72020]">Copy</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between border-b border-b-[#dbdee0] py-3">
                    <Text className="text-base ">08012345678</Text>
                    <TouchableOpacity className="flex-row gap-2">
                        <FontAwesome5 name="copy" size={18} color="#c72020" />
                        <Text className="text-[#c72020]">Copy</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between border-b border-b-[#dbdee0] py-3">
                    <Text className="text-base ">08012345678</Text>
                    <TouchableOpacity className="flex-row gap-2">
                        <FontAwesome5 name="copy" size={18} color="#c72020" />
                        <Text className="text-[#c72020]">Copy</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default PublicEmergencyScreen