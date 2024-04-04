import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  

const BackButton = () => {
    const navigation = useNavigation();

    return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={29} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton