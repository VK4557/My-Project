import { View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ListIcon({name,size=50,color="white",backColor="black"}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size/2,
      backgroundColor: backColor,
      justifyContent: "center",
      alignItems: "center",
      }}>
      <Icon name={name} color={color} size={size * 0.5}/>
    </View>
  );
}

