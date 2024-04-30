import { View, Text ,useWindowDimensions} from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html';
const FirstAidDetails = ({navigation,route}) => {
   const [data,setData] = useState({})
   const { width } = useWindowDimensions();
    useEffect(()=>{
        if(route.params.aid){
            setData(route.params.aid)
        }
    },[route.params])

    return (
    <SafeAreaView>
        <View>
           <RenderHtml
            contentWidth={width}
            source={{html:`${data.article}`}}
            />
        </View>
    </SafeAreaView>
  )
}

export default FirstAidDetails