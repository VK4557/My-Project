import { View, Text } from 'react-native'
import React from 'react'
import ImageInputList from '../screens/ImageInputList'
import { useFormikContext } from 'formik'

export default function FormAppPicker({name}) {
    const {values, setFieldValue, touched, errors} = useFormikContext();const handleAdd= (uri) =>{
        setFieldValue(name, [...values[name],uri])
    }
    const handleRemove= uri =>{
        setFieldValue(name, values[name].filter(imageUri => imageUri!= uri))
    }

  return (
    <View>
      <ImageInputList imageUris={values[name]}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove} />
      {touched[name] && <Text style={{color:"red"}}>{errors[name]}</Text>}
    </View>
  )
}