import React from 'react'
import { Text, View,TouchableOpacity,Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const PublicContact = () => {
    const policeEmergencyCall = (number) => {
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

      const fireServiceEmergencyCall = (number) => {
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

      const HealthCareEmergencyCall = (number) => {
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

  return (
    <View className="mt-3">
        {/* police */}
        <View className=" flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-2">
                <Text >&#128660;</Text>
                <Text className="text-base">Police</Text>
            </TouchableOpacity>

            <View className="flex-row items-center">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <Entypo name="chevron-small-right" size={20} color="#cecfd1" />
            </View>
        </View>

        {/* fire service */}
        <View className="flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-2">
                <Text>&#128658;</Text>
                <Text className="text-base">Fire Service</Text>
            </TouchableOpacity>

            <View className="flex-row items-center">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <Entypo name="chevron-small-right" size={20} color="#cecfd1" />
            </View>
        </View>

        {/* Hospital */}
        <View className="flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-2">
                <Text>&#127973;</Text>
                <Text>Hospital</Text>
            </TouchableOpacity>

            <View className="flex-row items-center">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <Entypo name="chevron-small-right" size={20} color="#cecfd1"/>
            </View>
        </View>

        {/* emergency*/}
        <View className="flex-row justify-between py-3">
            <TouchableOpacity className="flex-row items-center gap-2">
                <Text>&#128226;</Text>
                <Text>Emergency Management</Text>
            </TouchableOpacity>

            <View className="flex-row items-center">
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={18} color="black" />
                </TouchableOpacity>
                <Entypo name="chevron-small-right" size={20} color="#ecedf0" />
            </View>
        </View>

        {/* police */}
        {/* <View>
            <View>
                <Text>&#128660;</Text>
                <Text>Police</Text>
            </View>

            <View>
                <Ionicons name="call-outline" size={18} color="black" />
                <Entypo name="chevron-small-right" size={15} color="#ecedf0" />
            </View>
        </View> */}

    </View>
  )
}

export default PublicContact