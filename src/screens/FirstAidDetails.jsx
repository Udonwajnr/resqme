import { View, Text ,useWindowDimensions,ScrollView,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html';
import { Entypo } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const FirstAidDetails = ({navigation,route}) => {
   const [data,setData] = useState({})
   const { width } = useWindowDimensions();
   const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true
    }
  };
    useEffect(()=>{
        if(route.params.aid){
            setData(route.params.aid)
        }
    },[route.params.aid])
    const tagsStyles = {
        ul:{
            marginTop:-13
        }
      };
      
    return (
    <SafeAreaView className="bg-white">
        <View className="py-2 bg-white relative">
        <TouchableOpacity onPress={() => navigation.navigate("FirstAid")} className="absolute left-2 top-2 z-20">
            <Entypo name="chevron-left" size={29} color="black" />
         </TouchableOpacity>
          <Text className="text-2xl text-center capitalize">{data.title}</Text>
        </View>
        <ScrollView className="px-2 bg-white">
           <RenderHtml
            contentWidth={width}
            source={{html:`${data.article}`}}
            enableExperimentalMarginCollapsing={true}
            enableExperimentalBRCollapsing={true}
            enableExperimentalGhostLinesPrevention={true}
            tagsStyles={tagsStyles}
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default FirstAidDetails