import React,{useState,useRef, useEffect} from 'react'
import { Text,TextInput,View,TouchableOpacity,Dimensions,StyleSheet,ScrollView,Alert,ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Camera,CameraType} from 'expo-camera';
import { AuthContext } from '../components/context/AuthContext';
import CameraPreview from '../components/CameraPreview';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
const IncidentScreen = ({route,navigation}) => {
    const {incident} = route.params

    const isFocused = useIsFocused();
    
    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);
    const cameraRef = useRef();
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [startCamera,setStartCamera] = useState(false) 
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    let camera = Camera
    const data = [
        { label: 'Medical', value: 'Medical' },
        { label: 'Fire', value: 'Fire' },
        { label: 'Natural Disaster', value: 'Natural Disaster' },
        { label: 'Accident', value: 'Accident' },
        { label: 'Violence', value: 'Violence' },
        { label: 'Search And Rescue', value: 'Search And Rescue' },
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


    const __startCamera = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
   if(status === 'granted'){
     // do something
     setStartCamera(true)
   }else{
     Alert.alert("Access denied")
   }
    
  }

  const __takePicture = async () => {
    if (!camera) return
    const options = { quality: 0.7, base64: true };
    const photo = await camera.takePictureAsync(options)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }

  const __savePhoto=async(url)=>{
    let base64Img = `data:image/jpg;base64,${capturedImage.base64}`;
    let data = {
      file: base64Img,
      upload_preset: 'emergency'
    };
    await axios.post("https://api.cloudinary.com/v1_1/djwombdbg/image/upload",data)
    .then((res)=>{
      Alert.alert("upload successful")
      console.log(res)
    }).catch((err)=>{
      Alert.alert("upload not Successful")
      console.log(error)
    })
    
    console.log(" picture saved")
    setStartCamera(false)
    setPreviewVisible(false)
    setCapturedImage(false)
  }

  const cancelCamera =()=>{
    setStartCamera(false)
  }
  const setCamara =()=>{
    setStartCamera(false)
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     setStartCamera(false)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  console.log(capturedImage)
  return (
    // navigation header
<>



{previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture}/>
          ) :
          isFocused && startCamera && (
            <Camera
              style={{flex: 1,width:"100%",height:"100%",position:"absolute",zIndex:1}}
              ref={(r) => {
                camera = r
              }}
              className="  "
            >
              <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'flex-end'
                }}

                onPress={cancelCamera}
              >
              <AntDesign name="close" size={34} color="white" />
              </TouchableOpacity>
  <View
        style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
        }}
      >
        <View
        style={{
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
        }}
        >


            <TouchableOpacity
            onPress={__takePicture}
            style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: '#fff'
            }}
            />
    </View>
    </View>

            </Camera>
      )}
    <View className="flex-1 flex-col pb-1 px-4 relative">
       <ScrollView  showsVerticalScrollIndicator={false}>

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
          value={incident}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          disable={true}
          
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
        <View className="h-40 w-full border-[#cfd0d4] border-2 border-dotted justify-center items-center" >
          <TouchableOpacity onPress={__startCamera} className="justify-center items-center">
              <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
            <Text> Photo Attachment </Text>
          </TouchableOpacity>
        </View>
    </View>

    {/* <Text>{isFocused ? 'focused' : 'unfocused'}</Text> */}
        

        <TouchableOpacity className="h-9 mt-5 rounded-md bg-[#e43151] justify-center items-center">
                <Text className="text-white">Send Report</Text> 
         </TouchableOpacity>
       </ScrollView>
    </View>
</>
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
