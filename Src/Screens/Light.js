import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
 
 
const API1 = 'https://jsonplaceholder.typicode.com/posts/1';
const API2 = 'https://jsonplaceholder.typicode.com/posts/2';
const API3_URL = 'https://jsonplaceholder.typicode.com/posts/3';

const Light = () => {
  const [light1,setRedLight] =useState('red')
  const [light2,setYellowLight] =useState('yellow')  
  const [light3,setGreenLight] =useState('green')

    const lightPress=()=>{
        light1 ==='red'?setRedLight('red'):('grey')
        light2==='yellow'?setYellowLight('green'):('grey')
        light3 ==='green'?setGreenLight('red'):('grey')
        null;

      }
  return (
<View style={styles.container}>
      <View style={styles.lightContainer}>
        <View
          style={[
            styles.light,
            light1 && styles.lightRed,
          ]}
        />
        <View
          style={[
            styles.light,
            light2 && styles.lightYellow,
          ]}
        />
        <View
          style={[
            styles.light,
            light3 && styles.lightGreen,
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={lightPress}
      >
        <Text style={styles.buttonText}>Fetch API</Text>
      </TouchableOpacity>
    </View>
     
  )
}
 const styles=StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent:'center'
  },
  lightContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 20,
  },
  lightRed: {
    backgroundColor: 'red',
  },
  lightYellow: {
    backgroundColor: 'yellow',
  },
  lightGreen: {
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    padding:10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    
  },


  })
export default Light