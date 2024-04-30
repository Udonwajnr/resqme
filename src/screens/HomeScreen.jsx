import React,{useContext,useState,useEffect} from 'react'
import { Text, TouchableOpacity, View, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {PulseAnimation} from 'react-native-animated-pulse';
import { AuthContext } from '../components/context/AuthContext';
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';
import timestamp from 'time-stamp';
import { Camera } from 'expo-camera';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const {logout,userToken,hasPermission, setHasPermission }=useContext(AuthContext)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude,setLatitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  const [address,setAddress] = useState('')
  const [usersContacts,setUsersContact] = useState([])

  const [medical,setMedical] = useState("Medical")
  const [fire,setFire] = useState("Fire")
  const [naturalDisaster,setNaturalDisaster] = useState("Natural Disaster")
  const [accident,setAccident] = useState("Accident")
  const [violence,setViolence] = useState("Violence")
  const [searchAndRescue,setSearchAndRescue] = useState("Search And Rescue")
  
  const contacts =async()=>{
    await axios.get(`https://emergency-backend-api.onrender.com/api/user/${userToken._id}`)
    .then((res)=>{
        console.log(res.data)   
        setUsersContact(res.data.contact)
    })
    .catch((err)=>{
        setLoading(true)
        console.log(err)
        setLoading(false)
    })
}
console.log(usersContacts)
  
  useEffect(()=>{
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let currentLocation = await Location.getCurrentPositionAsync();
            // console.log(currentLocation)
            setLatitude(currentLocation.coords.latitude)
            setLongitude(currentLocation.coords.longitude)
        const reverseGeoCodeAddress = await Location.reverseGeocodeAsync(currentLocation.coords).then((data)=>{
                    setAddress(data[0])
                })
                .catch((error)=>{
                    console.log("check your data connection")
                })
                setLocation(currentLocation);
      })();

      contacts()
  },[])

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const emergencySms =async()=>{
    const isAvailable = SMS.isAvailableAsync();
    if (isAvailable) {
        await SMS.sendSMSAsync(usersContacts.map((data)=>data.phoneNumber), 
        `${userToken.fullName}.\nEmergency:Quick Response. \nLocation: ${address.formattedAddress}.\nI am in an emergency situation and need immediate assistance. Please help!
        `
    )
    } else {
        console.log("There is no sms on this device")
    }
  }
    return (
    <SafeAreaView className="flex-1 flex-col bg-slate-50 py-3.5">
        <View className="flex-row justify-between px-4">
            <Text className="text-lg font-bold">Hi, {userToken?.fullName}</Text>
            <TouchableOpacity onPress={()=>logout()}>
                <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View className="px-4">
            <View className="mt-8">
                <Text className="text-center text-xl font-bold">Are you in an Emergency?</Text>
                <Text className="text-center text-[#b2b9c0] mt-3">Press the sos button ,your live location will be shared with the nearest help center and your emergency contact.</Text>            
            
                <View className="flex-row justify-center items-center my-5">
                    <TouchableOpacity className="bg-[#c72020] w-40 h-40 rounded-full flex-col justify-center items-center border-2 border-[#b22123]" onPress={emergencySms}>
                        <Text className="text-white text-2xl font-bold">SOS</Text>
                        <Text className="text-white">Press The Button</Text>    
                    </TouchableOpacity>                
                <View className="absolute -z-10">
                    <PulseAnimation color={'red'} numPulses={8} diameter={190} speed={4000} duration={5000} />
                </View>
                </View>
            </View>

                
            {/* location */}

            
            <TouchableOpacity className=" bg-[#ecedf0] rounded-lg flex-row items-center py-3 px-3 mt-4" onPress={()=>navigation.navigate("MapScreen",{latitude,longitude})}>
                <View className="mr-3">
                    <Entypo name="location-pin" size={24} color="black" />
                </View>

                <View className="flex-col wrap mr-7">
                    <Text className="text-[#b2b9c0]">Your Current Location</Text>
                    <Text className="font-bold break-words">{address.formattedAddress}</Text>
                </View>

            </TouchableOpacity>
            
            {/* remeber the iconns */}

            {/* and notification */}
            
            <View className="">
                <Text className="font-bold text-base my-2">What is your Emergency?</Text>
                <View className="flex-row flex-wrap gap-3 mt-0.5">
                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident",{incident:medical,address})}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128657;</Text>
                        </View>
                        <Text className="ml-1">Medical</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident",{incident:fire,address})}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128293;</Text>
                        </View>
                        <Text className="ml-1">Fire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident",{incident:naturalDisaster,address})}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#127786;&#65039;</Text>
                        </View>                   
                        <Text className="ml-1">Natural Disaster</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident",{incident:accident,address})}>
                        <Text className="mr-1 text-lg">💥</Text>
                        <Text className="ml-1">Accident</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md" onPress={()=>navigation.navigate("Incident",{incident:violence,address})}>
                    <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128298;</Text>
                        </View> 
                        <Text className="ml-1">Violence</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row border border-[#b2b9c0] items-center justify-center px-2 py-1 rounded-md"onPress={()=>navigation.navigate("Incident",{incident:searchAndRescue,address})}>
                        <View className="bg-[#ecedf0] rounded-full justify-center items-center flex-row p-1">
                            <Text className="mr-1 text-lg">&#128104;&#8205;&#128658;</Text>
                        </View> 
                        <Text className="ml-1 ">Search and Rescue</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen