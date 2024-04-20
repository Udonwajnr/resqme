import React, { useEffect, useState,useContext } from 'react'
import { Text,View,TextInput,TouchableOpacity,ScrollView,ActivityIndicator, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from '../components/context/AuthContext';

const AddEmergencyContactScreen = ({navigation}) => {
    const {userToken} = useContext(AuthContext)
    const user = userToken._id
    const [fullName,setFullName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [relationship,setRelationship] = useState("")
    const [loading,setLoading] = useState(false)


    const submitEmergency =async()=>{
        const data = {fullName,phoneNumber,email,relationship,user}
        setLoading(true)
        await axios.post("https://emergency-backend-api.onrender.com/api/contact",data)
        .then((data)=>{
            setLoading(true)
            console.log(data)
            Alert.alert("Contact created successfully")
            navigation.navigate("Contact")
            setLoading(false)
        }
        )
        .catch((err)=>{
            setLoading(true)
            console.log(err)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
         setFullName('')
         setPhoneNumber("")
         setEmail("")
         setRelationship("")
         setLoading(false)
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

  return (
    <ScrollView className="flex-1 flex-col bg-slate-50 py-2.5 px-4">
    <View>
        <Text className="text-[#525456] mb-3 ">Name</Text>
            <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
            <Feather name="user" size={18} color="#b9b9bb"/>
            <TextInput defaultValue={fullName} onChangeText={newText=>setFullName(newText)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='e.g John doe'/>
        </View>
        </View>

        <View className='mt-3'>
            <Text className="text-[#525456] mb-3 ">Phone Number</Text>
            {/* <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='example@gmail.com'/> */}
            <TextInput defaultValue={phoneNumber} maxLength={14} keyboardType='phone-pad' onChangeText={(text)=>setPhoneNumber(text)} className=" h-9 pl-3 bg-[#ecedf0] rounded-md text-[#535355]" selectionColor={'#535355'} placeholder="08012345678"/>
        </View>

        <View className={"mt-3"}>
        <Text className="text-[#525456] mb-3 ">Email</Text>
        <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
        <AntDesign name="mail" size={18} color="#b9b9bb"/>
            <TextInput defaultValue={email} onChangeText={(text)=>setEmail(text)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='e.g example@gmail.com'/>
        </View>
        </View>
        

    <View className="mt-3">
        <Text className="text-[#525456] mb-3">RelationShip(optional)</Text>
        <TextInput
         className=" p-2 rounded-md text-[#535355] bg-[#ecedf0]"
         selectionColor={'#535355'}
         placeholder='e.g Mother'
         defaultValue={relationship}
         onChangeText={text=>setRelationship(text)}
         />
    </View>

    <TouchableOpacity onPress={submitEmergency} className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" >
        {
            loading?
            <ActivityIndicator color={"white"}/>
            :
            <Text className="text-white">Add Contact</Text> 
        }
    </TouchableOpacity>


</ScrollView>
  )
}

export default AddEmergencyContactScreen