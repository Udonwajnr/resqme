import React from 'react'
import { Text,TouchableOpacity,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OtpTextInput from 'react-native-text-input-otp'
const Otpscreen = () => {
  const [otp, setOtp] = React.useState('');


  return (
    <SafeAreaView className="flex-1 px-4 flex-col py-10 bg-slate-50">
        <View >
            <Text className="text-2xl font-bold ">OTP Verification</Text>
            <Text className={"text-[#b2b9c0] mt-1"}>Enter the otp sent to +23412345678</Text>
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
          <Text className="text-[#e43051]"> Resend Otp</Text>
           </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity className="h-9 mt-9 rounded-md  bg-[#e43151] justify-center items-center ">
          <Text className="text-white">Verify</Text>
        </TouchableOpacity>
      </View>

      

    </SafeAreaView>
  )
}

export default Otpscreen