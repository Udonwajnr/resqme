import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {createStaticNavigation,useNavigation,} from '@react-navigation/native';
  
const ContactBackButton = () => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Entypo name="chevron-left" size={29} color="black" />
    </TouchableOpacity>
  )
}


export default ContactBackButton;
