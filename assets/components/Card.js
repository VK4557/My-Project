import { View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import React from 'react'

import colors from '../config/colors'

export default function Card({image, title, subTitle, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.listContain}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={styles.text} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    listContain: {
        backgroundColor: colors.light,
        margin: 10,
        borderRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
    },
    subTitle:{
        fontWeight: "800",
        color: colors.secondary,
        fontSize: 15,
    },
    text: {
        padding: 12,
    },
})