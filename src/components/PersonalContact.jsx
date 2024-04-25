import React, { useEffect,useState ,useContext} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native'
import axios from 'axios';
import { AuthContext } from './context/AuthContext';
import ContactCard from './ContactCard';
import { useNavigation } from '@react-navigation/native';

const PersonalContact = () => {
    const {userToken} = useContext(AuthContext)
    const user = userToken._id
    const [usersContacts,setUsersContact] = useState([])
    const [loading,setLoading] = useState(false)
    const [selectedIndex,setSelectedIndex] = useState(0) 

    const navigation = useNavigation()

    const contacts =async()=>{
        await axios.get(`https://emergency-backend-api.onrender.com/api/user/${user}`)
        .then((res)=>{
            setLoading(true)
            // console.log(res.data)   
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

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
         setSelectedIndex(0)
         contacts()

        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    return (
    <View className="mt-3">
        {
            !loading?
            usersContacts.map((contact,index)=>{
                return(
                    <ContactCard key={contact._id} usersContacts={usersContacts} contact={contact} index={index} setUsersContact={setUsersContact} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/> 
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
