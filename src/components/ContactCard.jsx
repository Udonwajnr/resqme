import React, { useState } from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';

const ContactCard = ({contact,setSelectedIndex,selectedIndex,index}) => {
    const [active,setActive] = useState(false)

    const isNotActive=()=>{
        setActive(()=>selectedIndex!==index? !active:true)
    }
    
  return (
    <View className=" flex-row justify-between py-3 relative" >
    <TouchableOpacity className="flex-row items-center gap-3">
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
        <View className="w-28 bg-white  shadow-[]  p-2 absolute z-10 top-12 right-3" style={[styles.elevation]}>
        
            <TouchableOpacity>
                <View className="flex-row gap-1 py-2">
                <AntDesign name="edit" size={17} color="black" />
                    <Text>Edit</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="flex-row gap-1 py-2">
                    <Feather name="trash-2" size={17} color="#c72020" />
                    <Text className="text-[#c72020]">Remove</Text>
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