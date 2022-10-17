import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground blurRadius={3}
     style={styles.container} source={require("../background.jpg")}>
      <View style={styles.btnContain}>
        <AppButton title="Login" onPress={()=> navigation.navigate("Login")} />
        <AppButton title="Registor" color="secondary" onPress={()=> navigation.navigate("SignUp")}/>
      </View>
      <View style={styles.setBox2}/>
      <View style={styles.intro}>
        <Image style={styles.logo} source={require("../logo-red.png")}/>
        <Text style={styles.tagLine}>Welcome To Pizone</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnContain: {
    padding: 20,
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  intro: {
    position: "absolute",
    top: 80,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  tagLine: {
    fontSize: 30,
    fontWeight: "500",
    color: "black",
    padding: 15,
  },
  
})


export default WelcomeScreen;
