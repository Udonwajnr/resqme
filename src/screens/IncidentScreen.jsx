import React,{useState,useRef, useEffect,useContext} from 'react'
import { Text,TextInput,View,TouchableOpacity,Dimensions,StyleSheet,ScrollView,Alert,ImageBackground ,Image,ActivityIndicator} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Camera,CameraType} from 'expo-camera';
import { AuthContext } from '../components/context/AuthContext';
import CameraPreview from '../components/CameraPreview';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { RichEditor,RichToolbar } from 'react-native-pell-rich-editor';


const IncidentScreen = ({route,navigation}) => {
  const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>

    const {userToken} =   useContext(AuthContext)
    const {incident,address} = route.params
    const user = userToken._id

    const richText = React.useRef();

    const isFocused = useIsFocused();
    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);
    const cameraRef = useRef();
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [startCamera,setStartCamera] = useState(false) 
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    const [saved,setSaved] = useState(false)
    const [fileUrl,setFileUrl] = useState(null)
    const [incidentLocation,setIncidentLocation] = useState(address.formattedAddress||"")
    const [comment,setComment] = useState("")
    const [value, setValue] = useState(incident || null);
    const [isFocus, setIsFocus] = useState(false);
    const [natureOfIncident,setNatureOfIncident] = useState(incident)
    const [loading,setLoading] = useState(false)
    // console.log(natureOfIncident)
  
    

    let camera = Camera
    const data = [
        { label: 'Medical', value: 'Medical' },
        { label: 'Fire', value: 'Fire' },
        { label: 'Natural Disaster', value: 'Natural Disaster' },
        { label: 'Accident', value: 'Accident' },
        { label: 'Violence', value: 'Violence' },
        { label: 'Search And Rescue', value: 'Search And Rescue' },
      ];
      
      

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
    setSaved(true)
    let base64Img = `data:image/jpg;base64,${capturedImage.base64}`;
    let data = {
      file: base64Img,
      upload_preset: 'emergency'
    };
    await axios.post("https://api.cloudinary.com/v1_1/djwombdbg/image/upload",data)
    .then((res)=>{
      setSaved(true)
      setFileUrl(res?.data?.url)
      Alert.alert("upload successful")
      console.log(res.data.url)
      setSaved(false)
    }).catch((err)=>{
      Alert.alert("upload not Successful")
      console.log(error)
      setSaved(false)

    })
    
    console.log(" picture saved")
    setStartCamera(false)
    setPreviewVisible(false)
    // setCapturedImage(false)
  }

  const cancelCamera =()=>{
    setStartCamera(false)
  }
  // const setCamara =()=>{
  //   setStartCamera(false)
  // }

  const dataEntry = {incidentLocation,natureOfIncident,comment,fileUrl,user}

  const SubmitIncident = async()=>{
    setLoading(true)
    await axios.post("https://emergency-backend-api.onrender.com/api/incident",dataEntry)
    .then((data)=>{
      setIncidentLocation("")
      setNatureOfIncident("")
      setComment("")
      setFileUrl(null)
      setLoading(false)
      Alert.alert("YOu will be attended to as soon as Possible")
      navigation.navigate("Home")  
        console.log(data)
    }).catch((err)=>{
      setLoading(true)
      console.log(err)
      setLoading(false)
    })
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     setStartCamera(false)
    });
    
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(()=>{
      setNatureOfIncident(incident)
  },[address,incident])
  // console.log(capturedImage.ur)
  // console.log(address)
  
  
  
  return (
  
<>
{previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} saved={saved}/>
          ) :
          isFocused && startCamera && (
            <Camera
              style={{flex: 1,width:"100%",height:"100%",position:"absolute",zIndex:1}}
              ref={(r) => {
                camera = r
              }}
              type={type}
              className=""
              ratio='16:9'
            >
              <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                flexDirection: 'row',
                flex: 1,
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
    <TouchableOpacity
    style={{
      position: 'absolute',
      bottom: 28,
      right:15,
      flexDirection: 'row',
      flex: 1,
      padding: 1,
      justifyContent: 'flex-end'
      }}
      onPress={toggleCameraType}
    >
      <Ionicons name="camera-reverse-sharp" size={35} color="white" />
    </TouchableOpacity>


            </Camera>
      )}
    <View className="flex-1 flex-col pb-1 px-4 relative">
       <ScrollView  showsVerticalScrollIndicator={false}>

          <View className="mt-5">
              <Text>Incident location</Text>
              <View className="flex px-2 mt-2 flex-row items-center bg-[#ecedf0]">
                      <Entypo name="location-pin" size={24} color="black" />
                      <TextInput onChangeText={text=>setIncidentLocation(text)} defaultValue={address.formattedAddress} className="flex-1 h-9 pl-3 rounded-md text-[#535355]" selectionColor={'#535355'} placeholder='johndoe@gmail.com'/>
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
          disable={false}
          
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
             defaultValue={comment}
             onChangeText={text=>setComment(text)}
             />
        </View>
          
      <View className="mt-5">
        <View className="relative h-40 w-full border-[#cfd0d4] border-2 border-dotted justify-center items-center" >
          {
            capturedImage === null?
          <TouchableOpacity onPress={__startCamera} className="justify-center items-center">
              <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
            <Text> Photo Attachment </Text>
          </TouchableOpacity>
          :
          <View>
            

            <Image
            source={{uri:fileUrl}}
            style={{
              flex: 1,
            }}
            className="h-32 w-32"
            />

          </View>
          }

          {
            capturedImage !== null
             &&
             <TouchableOpacity className="absolute z-10 top-3 right-3" onPress={()=>setCapturedImage(null)}>
                <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          }

        </View>
    </View>



        <TouchableOpacity className="h-9 mt-5 rounded-md bg-[#e43151] justify-center items-center" onPress={()=>SubmitIncident()} disabled={loading ? true:false}>
          {
            loading?
            <ActivityIndicator/>
            :
            <Text className="text-white">Send Report</Text> 
          }
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
