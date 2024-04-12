import React,{useState} from 'react'
import { Text,TouchableOpacity,View,ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OtpTextInput from 'react-native-text-input-otp'
import axios from "axios"
const OtpScreen = ({ route, navigation }) => {
  const { email} = route.params;
  const [otp, setOtp] = React.useState('');
  const [isLoading,setIsLoading] = useState(false)
  const [loginLoader,setLoginLoader] = useState(false)

  // 
  // console.log(email)

  const OptVerification =async()=>{
    await axios.post("https://emergency-backend-api.onrender.com/api/user/verify",{email,otp})
    .then((data)=>{
        console.log(data)
        // setUserToken("kmfekfke");
        setLoginLoader(false)
        setIsLoading(false)
        navigation.navigate("Login")
    })
    .catch((err)=>{
        setLoginLoader(true)
        console.log(err)
        setError(err.response.data.error)
        setLoginLoader(false)
    })
  }

  console.log(otp)

  return (
    <SafeAreaView className="flex-1 px-4 flex-col py-10 bg-slate-50">
        <View >
            <Text className="text-2xl font-bold ">OTP Verification</Text>
            <Text className={"text-[#b2b9c0] mt-1"}>Enter the otp sent to {email}</Text>
        </View>
      <View className="px-8 mt-10">
        <OtpTextInput
        otp={ otp }
        setOtp={ setOtp }
        digits={5}
        style={{ borderRadius: 0, borderTopWidth: 0 , borderRightWidth:0, borderLeftWidth:0, height: 45 }}
        fontStyle={{ fontSize: 20, fontWeight: 'bold' }}
        focusedStyle={{ borderColor: '#e43051', borderBottomWidth: 2 }}          
        
         />
      </View>

      <View className="flex-row items-center justify-center mt-12">
        <Text>Didn't receive code?</Text>
        <TouchableOpacity >
          <Text className="text-[#e43051]"> Resend Otp </Text>
           </TouchableOpacity>
      </View>

      <TouchableOpacity className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center" onPress={OptVerification} disabled={loginLoader?true:false}>
                {
                  loginLoader?
                  <ActivityIndicator color={"white"}/>
                  :
                  <Text className="text-white">Verify</Text> 
                }
              </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OtpScreen