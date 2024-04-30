import React,{useEffect, useState} from 'react';
import { StyleSheet, TextInput, View,ScrollView, TouchableOpacity,Text } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView>
            <ScrollView className="px-2 bg-white">
                <TextInput className="border-[#e0e2e3] border rounded-md py-2 bg-[#f9fafb] px-3" placeholder='Search...'/>
                <View>
                    {
                        aidData.map((aid)=>{
                        return(
                            <TouchableOpacity key={aid._id} className="border-b border-b-[#e0e2e3] py-2" onPress={()=>navigation.navigate("FirstAidDetails",{aid})}>
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
