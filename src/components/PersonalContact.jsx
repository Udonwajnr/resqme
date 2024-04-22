import React, { useEffect,useState ,useContext} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native'
import axios from 'axios';
import { AuthContext } from './context/AuthContext';
import ContactCard from './ContactCard';

const PersonalContact = () => {
    const {userToken} = useContext(AuthContext)
    const user = userToken._id
    const [usersContacts,setUsersContact] = useState([])
    const [loading,setLoading] = useState(false)
    const [selectedIndex,setSelectedIndex] = useState(0) 

    const contacts =async()=>{
        await axios(`https://emergency-backend-api.onrender.com/api/user/${user}`)
        .then((res)=>{
            setLoading(true)
            console.log(res.data)   
            setUsersContact(res.data.contact)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(true)
            console.loge(err)
            setLoading(false)
        })
    }
    useEffect(()=>{
        contacts()
    },[])

    return (
    <View className="mt-3">
        {
            !loading?
            usersContacts.map((contact,index)=>{
                return(
                    <ContactCard key={contact._id} contact={contact} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/> 
                )
            }
        )
        :
         <ActivityIndicator color={"red"} size={'large'}/>
        }
    </View>
  )
}

export default PersonalContact
