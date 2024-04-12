import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext} from './src/components/context/AuthContext';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { ActivityIndicator,View } from 'react-native';


const AppNav = () => {
    const {isLoading,userToken} = useContext(AuthContext)
    if(isLoading){
        return(
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size={"large"}/>
            </View>

        )
    }
  return (
        <NavigationContainer>
            {
            userToken !== null
            ?
            <AppStack/> 
            :
            <AuthStack/>
            }
        </NavigationContainer>
  )
}

export default AppNav