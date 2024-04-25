import React, { useState } from 'react'
import { View,Text,TouchableOpacity,StyleSheet, Alert,Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';
import { useNavigation } from '@react-navigation/native';


const ContactCard = ({contact,setSelectedIndex,selectedIndex,index,setUsersContact,usersContacts}) => {
    const [active,setActive] = useState(false)
    const navigation = useNavigation()

    console.log(contact._id)
    const isNotActive=()=>{
        setActive(!active)
        setSelectedIndex(index)
    }

    const handleEmergencyCall = (number) => {
        // Replace '911' with your country's emergency number if different
        const emergencyNumber = number;
        
        // Construct the phone call URL
        const phoneCallUrl = `tel:${number}`;
    
        // Attempt to open the phone call URL
        Linking.openURL(phoneCallUrl)
          .then(() => {
            console.log('Phone call initiated');
          })
          .catch((error) => {
            console.error('Failed to initiate phone call', error);
          });
      };


    const deleteContact = async(id)=>{
        await axios.delete(`https://emergency-backend-api.onrender.com/api/contact/${id}`)
        .then((data)=>{
            console.log(data)
            Alert.alert("Contact Deleted Successfully")
            setUsersContact(usersContacts.filter(contact=>contact._id !== id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const editData = ()=>{

    }
    
  return (
    <View className=" flex-row justify-between py-3 relative" >
    <TouchableOpacity className="flex-row items-center gap-3" onPress={()=>handleEmergencyCall(contact.phoneNumber)}>
        <Entypo name="user" size={18} color="black" />
        <View>
            <Text className="text-base">{contact.fullName.length > 7?contact?.fullName?.slice(0,8) +'...':contact.fullName}</Text>
            <Text className="text-[#cecfd1]">{contact.phoneNumber}</Text>
        </View>
    </TouchableOpacity>

    <View className="flex-row items-center gap-3">
        <TouchableOpacity>
            <Ionicons name="call-outline" size={18} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={isNotActive}>
        <   Entypo name="dots-three-vertical" size={17} color="#cecfd1" />
        </TouchableOpacity>
    </View>
    {
        active &&
        <View className={selectedIndex === index?"w-28 bg-white  p-2 absolute z-10 top-12 right-5":"hidden"} style={[styles.elevation]}>
            <TouchableOpacity onPress={()=>navigation.navigate("AddEmergencyContact",{contact})}>
                <View className="flex-row gap-1 py-2">
                <AntDesign name="edit" size={17} color="black" />
                    <Text>Edit</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>deleteContact(contact._id)}>
                <View className="flex-row gap-1 py-2">
                    <Feather name="trash-2" size={17} color="#c72020" />
                    <Text className="text-[#c72020]">Delete</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
</View>
  )
}
export default ContactCard

const styles = StyleSheet.create({

    elevation: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },

  });