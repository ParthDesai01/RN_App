import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {

const username = route.params.username;

  return (



    <View>
      <Text style={{fontSize: 20, textAlign: "center",marginVertical: 55,}}>Hello {username}</Text>
      <Button
      title='Go back'
      onPress={()=>{
        navigation.navigate("Login");
      }}
      />
    </View>
  )
}

export default Home