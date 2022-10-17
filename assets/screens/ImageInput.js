import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from 'react-native-image-picker'

import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ImageInput = ({imageUrl, onChangeUri}) => {
    const getImage= async () => {
        try{
            const result= await ImagePicker.launchImageLibrary();
            onChangeUri(result.assets[0].uri)
            // console.log(result)
        }
        catch(error){
            console.log(error)
        }
    }
    const inputImage= () => {
        if(!imageUrl) getImage();
        else{
            Alert.alert("Delete","Are you sure you want to delete image?",[{text: "Yes",onPress: ()=> onChangeUri(null)},
             {text:"No"}
            ])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={inputImage}>
            <View style={styles.container}>
                {!imageUrl && <Icon name="camera" size={35}/>}
                {imageUrl && <Image style={styles.imageContain} source={{uri: imageUrl}} />}
            </View>
        </TouchableWithoutFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: colors.light,
        borderRadius: 15,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    imageContain: {
        width: "100%",
        height: "100%",
    }
})