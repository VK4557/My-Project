import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function PickerItem ({label,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
        <Text style={styles.picker}>{label}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    picker: {
        fontSize: 20,
        margin: 15,
        color: "black"
    }
})