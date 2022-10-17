import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ListItem({image, title, subTitle, iconComponent}) {
  return (
    <View style={styles.container}>
      {iconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContain}>
        <Text style={styles.name}>{title}</Text>
        {subTitle && <Text style={styles.subName}>{subTitle}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#f8f4f4",
    },
    detailsContain: {
      marginLeft: 15,
      justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 20,
    },
    name: {
        fontSize: 16,
        color: "black",
        fontWeight: "700"
    },
    subName: {
        color: "#6e6969",
        fontWeight: "500"
    }
})
