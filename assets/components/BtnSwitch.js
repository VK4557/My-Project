import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'

export default function BtnSwitch() {
  const [enable,setEnable]= useState(false);

  return (
    <View>
      <Switch 
      value={enable} 
      onValueChange={newValue => setEnable(newValue)}
      />
    </View>
  )
}