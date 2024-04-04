import React,{useState,useCallback} from 'react'
import { View,Text,TextInput,TouchableOpacity,Button,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from "expo-splash-screen"


const SignUpScreen = () => {
  const [showPassword,setShowPassword] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [countryCode, setCountryCode] = useState(''); 
  const [selectedCountry, setSelectedCountry] = useState(null); 
  const [countryPickerVisible, setCountryPickerVisible] =  useState(false); 


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
                      <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                      <Feather name="user" size={18} color="#b9b9bb"/>
                      <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='Enter your Full Name'/>
                    </View>
                  </View>

                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 ">Email</Text>
                    <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                    <AntDesign name="mail" size={18} color="#b9b9bb"/>
                      <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='johndoe@gmail.com'/>
                    </View>
                  </View>
                
                  <View className='mt-3'>
                  <Text className="text-[#525456] mb-3 ">Phone Number</Text>
                  </View>


                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 mt-3">Password</Text>
                    <View className="flex flex-row px-2 items-center bg-[#ecedf0] overflow-hidden">
                      
                      <Feather name="lock" size={18} color="#b9b9bb" />  
                      <TextInput secureTextEntry={showPassword?true:false} placeholder='Enter your Password' className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'}/>
                      
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

                  <View className={"mt-3"}>
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
                  </View>

               <TouchableOpacity className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" >
                 <Text className="text-white">Sign Up</Text> 
               </TouchableOpacity>

               <View className="flex-row items-center justify-center mt-20">
                <Text className="items-center justify-center">Don't have an account ?</Text>
                <TouchableOpacity><Text className="text-[#e43151] ml-1">SignIn</Text></TouchableOpacity>
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