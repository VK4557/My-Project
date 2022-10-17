import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'

const ImageInputList = ({imageUris=[], onRemoveImage, onAddImage}) => {
    const scrollView= useRef();
  return (
    <View>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        ref={scrollView} 
        onContentSizeChange={() => scrollView.current.scrollToEnd()} >
            <View style={styles.container}>
                {imageUris.map(uri => <ImageInput key={uri} imageUrl={uri} onChangeUri={()=> onRemoveImage(uri)} />)}
                <ImageInput onChangeUri={uri => onAddImage(uri)} />
            </View>
        </ScrollView>
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
})