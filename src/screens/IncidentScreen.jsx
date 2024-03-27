import React,{useState} from 'react'
import { Text,TextInput,View,TouchableOpacity,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';


const IncidentScreen = () => {

    const data = [
        { label: 'Medical', value: 'Medical' },
        { label: 'Fire', value: 'Fire' },
        { label: 'Natural Disaster', value: 'Natural Disaster' },
        { label: 'Accident', value: 'Accident' },
        { label: 'Violence', value: 'Violence' },
        { label: 'SearchAndRescue', value: 'SearchAndRescue' },
      ];
      const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: '#e43151' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
  return (
    // navigation header
    <SafeAreaView className="flex-1 flex-col bg-slate-50 py-2.5 px-4">
        <View className="mt-5">
            <Text>Incident location</Text>
            <View className="flex px-2 mt-2 flex-row items-center bg-[#ecedf0]">
                    <Entypo name="location-pin" size={24} color="black" />
                    <TextInput className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='johndoe@gmail.com'/>
             </View>
        </View>

        <View className="mt-5">
            <Text>Nature of Incident</Text>
            <View className="mt-2">
            <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#e43151' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        //   inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
        //   search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Incident Type' : '...'}
        //   searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
             </View>
        </View>

        <View className="mt-5">
            <Text>Comment(optional)</Text>
            <TextInput
             multiline={true}
             numberOfLines={4}
             className="mt-2 p-2 rounded-md text-[#535355] bg-[#ecedf0]"
             selectionColor={'#535355'}
             placeholder='Leave a comment'
             style={{ height:200, textAlignVertical: 'top'}}
             />
        </View>

        <View className="mt-5">
            <View className="h-40 w-full border-[#cfd0d4] border-2 border-dotted justify-center items-center">
                <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
                <Text> Text Attachment </Text>
            </View>
        </View>

        <TouchableOpacity className="h-9 mt-5 rounded-md bg-[#e43151] justify-center items-center" >
                <Text className="text-white">Send Report</Text> 
         </TouchableOpacity>
    </SafeAreaView>
  )
}

export default IncidentScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });