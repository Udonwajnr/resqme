import React,{Children, createContext, useState,useEffect} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const [test,setTest] = useState("Text Value")
    const [isLoading,setIsLoading] = useState(false)
    const [loginLoader,setLoginLoader] = useState(false)
    const [userToken,setUserToken] = useState(null)
    const [userData,setUserData] = useState({})
    const [hasPermission, setHasPermission] = useState(null);

    const login = async(email,password)=>{
        setLoginLoader(true)
        await axios.post("https://emergency-backend-api.onrender.com/api/user/login",{email,password})
        .then((data)=>{
            setLoginLoader(true)
            console.log(data.data.data)
            setUserToken(data.data.data);
            AsyncStorage.setItem("userToken", JSON.stringify(data?.data?.data))
            setLoginLoader(false)
            setIsLoading(false)
        })
        .catch((error)=>{
            setLoginLoader(true)
            console.log(error)
            setLoginLoader(false)
        })
    }


    const logout =() => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.clear()
        setIsLoading(false)
    }

    console.log(userToken)

    const isLoggedIn=async()=>{
        try{
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem("userToken");
            setUserToken(JSON.parse(userToken));
            setIsLoading(false)
        }
        catch(e){
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect (()=>{
        isLoggedIn()
    },[])

    
    return(
        <AuthContext.Provider value={{login,logout,isLoading,userToken,setLoginLoader,loginLoader,userData,hasPermission, setHasPermission}}>
            {children}
        </AuthContext.Provider>
    )
}