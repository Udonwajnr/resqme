import React,{useState,useCallback} from 'react'
import { View,Text,TextInput,TouchableOpacity,Button,StyleSheet,Alert,ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from "expo-splash-screen"
import axios from "axios"


const SignUpScreen = ({navigation}) => {
  const [showPassword,setShowPassword] = useState(true)
  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null); 
  const [countryPickerVisible, setCountryPickerVisible] =  useState(false); 
  const [otp,setOtp] = useState("")
  const [error,setError] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const [loginLoader,setLoginLoader] = useState(false)
 
  const register = async()=>{
    setLoginLoader(true)
    await axios.post("https://emergency-backend-api.onrender.com/api/user",{fullName,email,phoneNumber,password,otp})
    .then((data)=>{
        console.log(data)
        // setUserToken("kmfekfke");
        setLoginLoader(false)
        setIsLoading(false)
        navigation.navigate("Otp")
    })
    .catch((err)=>{
        setLoginLoader(true)
        console.log(err)
        setError(err.response.data.error)
        setLoginLoader(false)
    })
}

  // console.log(error[0])

  const onSelectCountry = (country) => { 
    setCountryCode(country.cca2); 
    setSelectedCountry(country); 
    setCountryPickerVisible(false); 
   }; 

   const toggleCountryPicker = () => { 
    setCountryPickerVisible(!countryPickerVisible); 
  };

  const handleShowPassword =()=>{
    setShowPassword(!showPassword)
  }

  const redirect =()=>{
    console.log("hello my people")
  }

//   const [isLoaded] =useFonts({
//     "os":require("./../../assets/fonts/OpenSans-ExtraBold.ttf")
// })

// const handleOnLayout = useCallback(async () => {
//     if (isLoaded) {
//       await SplashScreen.hideAsync(); //hide the splashscreen
//     }
//   }, [isLoaded]);


//   if (!isLoaded) {SafeAreaView
//     return null;
//   }
  
  return (

    <SafeAreaView className="flex-1 px-4 flex-col py-10 bg-slate-50">
      <View>
          <Text className="text-2xl font-bold ">Sign Up </Text>
          <Text className={"text-[#b2b9c0] mt-2"}>Fill in Your Credentials to SignUp</Text>
        </View>

        <View className={"mt-6"}>
                  <View>
                    <Text className="text-[#525456] mb-3 ">FullName</Text>
                    {error[0]&& <Text className=" italic text-xs error text-red-500">FullName cannot be empty</Text>}

                      <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                      <Feather name="user" size={18} color="#b9b9bb"/>
                      <TextInput defaultValue={fullName} onChangeText={fullName=>setFullName(fullName)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='Enter your Full Name'/>
                    </View>
                  </View>

                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 ">Email</Text>
                    {error[2]&& <Text className=" italic text-xs error text-red-500">Email cannot be empty</Text>}
                    <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                    <AntDesign name="mail" size={18} color="#b9b9bb"/>
                      <TextInput defaultValue={email} onChangeText={newEmail=>setEmail(newEmail)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='johndoe@gmail.com'/>
                    </View>
                  </View>

                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 ">Phone Number</Text>
                      {error[1]&& <Text className=" italic text-xs error text-red-500">PhoneNumber cannot be empty</Text>}
                    <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                    <Feather name="phone" size={18} color="#b9b9bb" />
                      <TextInput defaultValue={phoneNumber} onChangeText={phoneNumber=>setPhoneNumber(phoneNumber)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='08012345678'/>
                    </View>
                  </View>
                


                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 mt-3">Password</Text>
                    {error[3]&& <Text className=" italic text-xs error text-red-500">Password cannot be empty</Text>}
                    <View className="flex flex-row px-2 items-center bg-[#ecedf0] overflow-hidden">
                      <Feather name="lock" size={18} color="#b9b9bb" />  
                        <TextInput defaultValue={password} onChangeText={password=>setPassword(password)} secureTextEntry={showPassword?true:false} placeholder='Enter your Password' className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'}/>
                      
                      <TouchableOpacity onPress={handleShowPassword}>
                        {
                            showPassword?
                            <FontAwesome5 name="eye-slash" size={18} color="#b9b9bb" />
                             :
                             <AntDesign name="eyeo" size={18} color="#b9b9bb" /> 
                        }

                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 mt-3"> Confirm Password</Text>
                    <View className="flex flex-row px-2 items-center bg-[#ecedf0] overflow-hidden">
                      
                      <Feather name="lock" size={18} color="#b9b9bb" />  
                      <TextInput secureTextEntry={showPassword?true:false} placeholder='Re-enter Password' className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'}/>
                      <TouchableOpacity onPress={handleShowPassword}>
                        {
                            showPassword?
                            <FontAwesome5 name="eye-slash" size={18} color="#b9b9bb" />
                             :
                             <AntDesign name="eyeo" size={18} color="#b9b9bb" /> 
                        }
                      </TouchableOpacity>
                    </View>
                  </View> */}

              <TouchableOpacity className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" onPress={register} disabled={loginLoader?true:false}>
                  {
                    loginLoader?
                    <ActivityIndicator color={"white"}/>
                    :
                    <Text className="text-white">Sign Up</Text> 
                  }
              </TouchableOpacity>

               <View className="flex-row items-center justify-center mt-20">
                <Text className="items-center justify-center">Already have an account ?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text className="text-[#e43151] ml-1">Sign In</Text></TouchableOpacity>
              </View>
              </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingHorizontal: 20, 
  }, 
  phoneInput: { 
      height: 50, 
      width: '100%', 
      borderWidth: 1, 
      borderColor: '#ccc', 
      marginBottom: 20, 
      paddingHorizontal: 10, 
  }, 
  countryButton: { 
      marginBottom: 20, 
  }, 
  countryPickerButton: { 
      borderRadius: 5, 
      backgroundColor: '#fff', 
      marginBottom: 20, 
  }, 
  countryPickerCloseButton: { 
      width: 20, 
      height: 20, 
  }, 
  submitButton: { 
      width: '100%', 
  }, 
}); 
export default SignUpScreen