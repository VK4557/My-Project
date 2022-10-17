import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../config/colors'

export default function NavigateBtn({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
        <View style={styles.container}>
            <Icon name="plus-circle" size={50} color="white" />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        bottom: 28,
        borderRadius: 40,
        backgroundColor: colors.primary,
        borderWidth: 5,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
})