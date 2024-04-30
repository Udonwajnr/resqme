import { View, Text ,useWindowDimensions,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html';
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
    },[route.params])
    const tagsStyles = {
        ul:{
            marginTop:-10
        }
      };
      
    return (
    <SafeAreaView>
        <View className="py-2 bg-slate-50">
            <Text className="text-2xl text-center capitalize">{data.title}</Text>
        </View>
        <ScrollView className="px-2">
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