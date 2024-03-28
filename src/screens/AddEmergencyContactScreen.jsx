import React from 'react'
import { Text,View,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
const AddEmergencyContactScreen = () => {
  return (
   <SafeAreaView className="flex-1 flex-col bg-slate-50 py-2.5 px-4">
        <View>
            <Text className="text-[#525456] mb-3 ">FullName</Text>
                <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                <Feather name="user" size={18} color="#b9b9bb"/>
                <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='Enter your Full Name'/>
            </View>
            </View>

            <View className='mt-3'>
                <Text className="text-[#525456] mb-3 ">Phone Number</Text>
                {/* <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='example@gmail.com'/> */}
                <TextInput className=" h-9 pl-3 bg-[#ecedf0] rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='example@gmail.com'/>
            </View>

            <View className={"mt-3"}>
            <Text className="text-[#525456] mb-3 ">Email</Text>
            <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
            <AntDesign name="mail" size={18} color="#b9b9bb"/>
                <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='example@gmail.com'/>
            </View>
            </View>
            

            <View className='mt-3'>
                <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='e.g Mother'/>
            </View>

            <View className="mt-3">
            <Text className="text-[#525456] mb-3 ">RelationShip(optional)</Text>
            <TextInput
             multiline={true}
             numberOfLines={4}
             className=" p-2 rounded-md text-[#535355] bg-[#ecedf0]"
             selectionColor={'#535355'}
             placeholder='Leave a comment'
             style={{ height:200, textAlignVertical: 'top'}}
             />
        </View>

   </SafeAreaView>
  )
}

export default AddEmergencyContactScreen