import React, { useEffect, useState,useContext } from 'react'
import { Text,View,TextInput,TouchableOpacity,ScrollView,ActivityIndicator, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
import axios, { Axios } from 'axios';
import { AuthContext } from '../components/context/AuthContext';

const AddEmergencyContactScreen = ({navigation,route}) => {
    
    const [editData,setEditData] = useState({})
    const {userToken} = useContext(AuthContext)
    const user = userToken._id
    const [userData,setUserData]= useState({})
    const [fullName,setFullName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [relationship,setRelationship] = useState("")
    const [loading,setLoading] = useState(false)
    
    // console.log(fullName)
    const data = {fullName,phoneNumber,email,relationship,user}
        // console.log({...data})
    const submitEmergency =async()=>{
        const data = {fullName,phoneNumber,email,relationship,user}
        setLoading(true)
        if(editData){
            await axios.put(`https://emergency-backend-api.onrender.com/api/contact/${editData}`,{...data})
            .then((data)=>{
                setLoading(true)
                // console.log(_iddata)
                Alert.alert("Contact edited successfully")
                navigation.navigate("Contact")
                setLoading(false)
                console.log(data)
            })
            .catch((err)=>{
                setLoading(true)
                console.log(err)
                setLoading(false)
            })
        }

        else{
            await axios.post("https://emergency-backend-api.onrender.com/api/contact",data)
            .then((data)=>{
                setLoading(true)
                setFullName('')
                setPhoneNumber("")
                setEmail("")
                setRelationship("")
                setLoading(false)
                console.log(data)
                Alert.alert("Contact created successfully")
                navigation.navigate("Contact")
                setLoading(false)
                setEditData({})
            }
        )
        .catch((err)=>{
            setLoading(true)
            console.log(err)
            setLoading(false)
        })}
    }


    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
         
    //     });
    //     // Return the function to unsubscribe from the event so it gets removed on unmount
    //     return unsubscribe;
    //   }, [navigation]);

      useEffect(()=>{
        if(route.params?.contact){
            const {contact} = route.params
            // setEditData(contact)
            axios.get(`https://emergency-backend-api.onrender.com/api/contact/${contact._id}`)
            .then((data)=>{
                console.log(data)
                setUserData(data.data)
                setFullName(data.data.fullName)
                setEmail(data.data.email)
                setRelationship(data.data.relationship)
                setPhoneNumber(data.data.phoneNumber)
                setEditData(data.data._id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
                setLoading(false)
                setFullName('')
                setPhoneNumber("")
                setEmail("")
                setRelationship("")
                setPhoneNumber("")
                setEditData("")
        }
      },[route.params])

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

    <TouchableOpacity onPress={submitEmergency} className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" disabled={loading?true:false}>
        {
            loading?
            <ActivityIndicator color={"white"}/>
            :
            <Text className="text-white">{editData?"Update Contact":"Add Contact"}</Text> 
        }
    </TouchableOpacity>
</ScrollView>
  )
}

export default AddEmergencyContactScreen