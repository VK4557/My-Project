import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useNetInfo } from '@react-native-community/netinfo'

export default function OfflineNotice() {
    const internet= useNetInfo();
    console.log(internet);
    if(internet.type!=="unknown" && internet.isInternetReachable=== false){
        return (
            <View style={styles.container}>
              <Text style={styles.text}>No Internet Connection</Text>
            </View>
        )
    }
    return null;
  
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: "white",
        fontSize: 18,
    }
})