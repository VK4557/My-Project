import { Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Button, Alert } from 'react-native'
import React from 'react'

export default function demoScreen() {
    console.log("App executed");
    let handlePress= () => {console.log("Text Clicked!")};
  
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle} onPress={handlePress}>Hello React Native</Text>
        <TouchableOpacity onPress={() => console.log("Image Pressed")}>
          <Image style={styles.images} source={require("../chair.jpg")}/>
        </TouchableOpacity>
        <Text style={styles.textStyle} onPress={handlePress}>This is Demo App</Text>
        <TouchableHighlight onPress={() => console.log("Image Pressed")}>
          <Image style={styles.images} source={{uri: "https://picsum.photos/200/300"}}/>
        </TouchableHighlight>
        <Button title="Click Me" color="orange" onPress={() => alert("Button Clicked")}/>
        <Button title="Alert Check" color= "green"
          onPress={() => 
            Alert.alert("Checking","Is everything OK",
            [{text: "Yes", onPress: () => console.log("Yes")},
            {text: "No", onPress: () => console.log("No")}]
            )
          }/>
        <Button title="Get" color= "black"
          onPress={() =>
            Alert.prompt("Input", "Enter data: ",
            (text) => console.log(text)) //not working on Android
          }/> 
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "dodgerblue",
      alignItems: "center",
      justifyContent: "center",
    },
  
    textStyle: {
      color: "white",
      fontSize: 30
    },
    images: {
      width: 150,
      height: 250,
    }
  });
  