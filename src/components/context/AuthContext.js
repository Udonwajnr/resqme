import React,{Children, createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const [test,setTest] = useState("Text Value")
    const [isLoading,setIsLoading] = useState(false)
    const [loginLoader,setLoginLoader] = useState(false)
    const [userToken,setUserToken] = useState(null)

    const login = async(email,password)=>{
        setLoginLoader(true)
        await axios.post("https://emergency-backend-api.onrender.com/api/user/login",{email,password})
        .then((data)=>{
            setLoginLoader(true)
            console.log(data)
            setUserToken("kmfekfke");
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
        setUserToken(null);
        setIsLoading(false)
    }
    return(
        <AuthContext.Provider value={{login,logout,isLoading,userToken,setLoginLoader,loginLoader}}>
            {children}
        </AuthContext.Provider>
    )
}