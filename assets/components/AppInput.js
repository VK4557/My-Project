import { TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome'
import colors from '../config/colors'

export default function AppInput({iconName, width="100%", ...othersProps}) {
  return (
    <View style={[styles.inputContain,{width}]}>
      {iconName &&<Icon name={iconName} size={25} style={styles.setIcon} />}
      <TextInput style={styles.textInput} {...othersProps} />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContain: {
        backgroundColor: colors.light,
        borderRadius: 25,
        marginVertical: 10,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: "center",
    },
    setIcon: {
        marginRight: 10,
    },
    textInput: {
        fontSize: 18,
        flex: 1,
    }
})