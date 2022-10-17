import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

import Colors from '../config/colors'

export default function AppButton({title, onPress, color= "primary"}) {
  return (
    <TouchableOpacity style={[styles.setBox1, {backgroundColor: Colors[color]}]} onPress={onPress} > 
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    setBox1: {
        width: "100%",
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
      },
      text: {
        color: "white",
        fontSize: 23,
        fontWeight: "500",
      }
})