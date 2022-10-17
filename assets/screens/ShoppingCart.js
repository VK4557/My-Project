import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
       <Image style={styles.cart} source={require("../Icon.png")} />
        <View style={styles.badgeContain}>
            <Image style={styles.badge} source={require("../Badge.png")}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 100,
    },
    cart: {
        width: 50,
        height: 50,
    },
    badgeContain: {
        position: "absolute",
        left: 35,
        bottom: 25,
    },
    badge: {
        width: 30,
        height: 30,
    }
})