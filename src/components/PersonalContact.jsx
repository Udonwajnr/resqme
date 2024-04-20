import React, { useEffect,useState ,useContext} from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';
import ContactCard from './ContactCard';

const PersonalContact = () => {
    const {userToken} = useContext(AuthContext)
    const user = userToken._id
    const [usersContacts,setUsersContact] = useState([])
    const contacts =async()=>{
        await axios(`https://emergency-backend-api.onrender.com/api/user/${user}`)
        .then((res)=>{
            console.log(res.data)   
            setUsersContact(res.data.contact)
        })
        .catch((err)=>{
            console.loge(err)
        })
    }

    useEffect(()=>{
        contacts()
    },[])

    console.log(usersContacts)
    return (
    <View className="mt-3">
        {
            usersContacts.map((contact,index)=>{
                return(
                    <ContactCard contact={contact}/> 
                )
            })
        }
    </View>
  )
}

export default PersonalContact
