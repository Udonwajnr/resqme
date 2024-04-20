import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'
import { useState } from 'react'

const CameraPreview = ({photo ,retakePicture,savePhoto,saved}) => {
    // console.log('sdsfds', photo)
    
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%',
          position:"absolute",zIndex:1
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        >
              <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              disabled={saved?true:false}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
                {
                  saved
                  ?
                  <ActivityIndicator color={"white"}/>
                  :
               <Text style={{
                color: '#fff',
                fontSize: 20
              }}>save photo</Text> 
                }
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </View>
    )
  }
export default CameraPreview