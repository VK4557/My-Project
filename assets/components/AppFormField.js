import {  Text } from 'react-native'
import React from 'react'

import { useFormikContext } from 'formik'
import AppInput from './AppInput';

export default function AppFormField({name, width, ...otherProps}) {
    const {setFieldValue, setFieldTouched, touched, values, errors} = useFormikContext();
  return (
    <>
    <AppInput  
        {...otherProps}
        placeholderTextColor="lightgray"
        onChangeText={text => setFieldValue(name, text)}
        value= {values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
    />
        {touched[name] && <Text style={{color:"red"}}>{errors[name]}</Text>}
    </>
  )
}