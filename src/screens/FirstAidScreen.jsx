import React,{useEffect, useState} from 'react';
import { StyleSheet, TextInput, View,ScrollView, TouchableOpacity,Text } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const FirstAidScreen = ({navigation}) => {
    const [aidData,setAidData] = useState([])
    const getFirstAidData=async()=>{
        await axios.get("https://emergency-backend-api.onrender.com/api/post")
        .then((data)=>{
            setAidData(data.data)
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getFirstAidData()
    },[])
    
    return (
        <SafeAreaView className="bg-white">
            <View className="py-2 bg-white relative">
                <TouchableOpacity onPress={() => navigation.navigate("Explore")} className="absolute left-2 top-2 z-20">
                    <Entypo name="chevron-left" size={29} color="black" />
                </TouchableOpacity>
                <Text className="text-2xl text-center capitalize text-[17px] font-extrabold">First Aid</Text>
            </View>
            <ScrollView className="px-2.5 bg-white h-full ">
                <TextInput className="border-[#e0e2e3] border rounded-md py-2 bg-[#f9fafb] px-3 mt-2" placeholder='Search...'/>
                <View className="mt-2">
                    {
                        aidData.map((aid)=>{
                        return(
                            <TouchableOpacity key={aid._id} className="border-b border-b-[#e0e2e3] py-3" onPress={()=>navigation.navigate("FirstAidDetails",{aid})}>
                                <Text className="text-lg">{aid.title}</Text>
                            </TouchableOpacity>
                        )
                        })
                    }
                </View>
            </ScrollView>
         </SafeAreaView>
    );
}

export default FirstAidScreen;
