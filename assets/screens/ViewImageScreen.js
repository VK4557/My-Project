import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function ViewImageScreen(props) {

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={40}/>
      </View>
      <View style={styles.delIcon}>
        <Icon name="delete" color="white" size={40}/>
      </View>
      <Image resizeMode="contain" style={styles.photo} source={require("../chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
    closeIcon: {
      position: "absolute",
      top: 20,
      left: 20,
    },
    delIcon: {
      position: "absolute",
      top: 20,
      right: 20,
    },
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    photo: {
      width: '100%',
      height: '100%'
    },
});

export default ViewImageScreen;
