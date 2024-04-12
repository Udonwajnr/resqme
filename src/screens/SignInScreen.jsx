import React,{useState,useContext} from 'react'
import { View,Text,TextInput,TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useFonts} from "expo-font"
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from "expo-splash-screen"
import { AuthContext } from '../components/context/AuthContext';
// SplashScreen.preventAutoHideAsync();

const SignInScreen = ({navigation}) => {
    const [showPassword,setShowPassword] = useState(true)
    const {login,userToken,loginLoader} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleShowPassword=()=>{
      setShowPassword(!showPassword)
    }

    console.log(password,email)
    return (
        <SafeAreaView className="flex-1 px-4 flex-col py-10 bg-slate-50">
          <View>
              <Text className="text-2xl font-bold ">Welcome Back &#x1F44B; </Text>
              <Text className={"text-[#1a1d20] mt-4"}>Enter your details to sign in</Text>
          </View>
    
              <View className={"mt-6"}>
                  <View>
                    <Text className="text-[#525456] mb-3 ">Email</Text>
                    <View className="flex px-2 flex-row items-center bg-[#ecedf0]">
                    <AntDesign name="mail" size={18} color="#b9b9bb" />
                      <TextInput defaultValue={email} onChangeText={newEmail=>setEmail(newEmail)} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='johndoe@gmail.com'/>
                    </View>
                  </View>
    
                  <View className={"mt-3"}>
                    <Text className="text-[#525456] mb-3 mt-3">Password</Text>
                    <View className="flex flex-row px-2 items-center bg-[#ecedf0] overflow-hidden">
                      
                      <Feather name="lock" size={18} color="#b9b9bb" />  
                      <TextInput defaultValue={password} onChangeText={newPassword=>setPassword(newPassword)} secureTextEntry={showPassword?true:false} placeholder='Enter your Password' className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'}/>
                      
                      <TouchableOpacity onPress={handleShowPassword}>
                        {
                            showPassword?
                            <FontAwesome5 name="eye-slash" size={18} color="#b9b9bb" />
                             :
                             <AntDesign name="eyeo" size={18} color="#b9b9bb" /> 
                        }

                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="mt-4"><Text className="text-[#e43151] text-right">Forgot Password?</Text></TouchableOpacity>
                  </View>
              </View>
              
              <TouchableOpacity className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" onPress={()=>login(email,password)} disabled={loginLoader?true:false}>
                {
                  loginLoader?
                  <ActivityIndicator color={"white"}/>
                  :
                  <Text className="text-white">Sign In</Text> 
                }
              </TouchableOpacity>
    
              <View className="flex-row items-center mt-10">
                  <View className="border border-b-0 border-[#ecedf0] flex-1 w-6/12 h-[1px]" ></View>
                  <Text className="px-4 text-[#b9b9bb]">Or</Text>
                  <View className="border border-b-0 border-[#ecedf0] flex-1 w-6/12 h-[1px]"></View>
              </View>

              <View className="mt-10">
                <TouchableOpacity className="flex-row items-center justify-center border border-[#ecedf0] rounded-md h-9">
                    <Image source={require('../assets/google.png')} className="h-6 w-6 mr-1"/>
                    <Text className="font-semibold ml-1">Continue With Google</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-center mt-20">
                <Text className="items-center justify-center">Don't have an account ?</Text>
                <TouchableOpacity><Text className="text-[#e43151] ml-1" onPress={()=>navigation.navigate("Register")}>Sign Up</Text></TouchableOpacity>
              </View>
        </SafeAreaView>
      )
}

export default SignInScreen