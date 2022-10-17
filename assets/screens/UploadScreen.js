import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import colors from '../config/colors'
import Lottie from 'lottie-react-native'

export default function UploadScreen({progress, visible=false, onDone}) {
  return (
      <Modal visible={visible} >
          <View style={styles.container}>
            { progress< 1? (<Progress.Bar progress={progress} color={colors.primary} width={200}/>): (<Lottie  source={require('../animations/done.json')} loop={false} autoPlay onAnimationFinish={onDone} style={styles.animation} />)
            }
          </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    animation: {
        width: 500,
        height: 500,
    },
})