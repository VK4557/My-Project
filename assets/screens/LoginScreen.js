import { View, Image,Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'
import AppFormField from '../components/AppFormField'

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

export default function LoginScreen() {
    // const [email,setEmail]= useState();
    // const [pass,setPass]= useState();

    return (
        <View style={{marginHorizontal: 15}} >
        <Image style={styles.logo} source={require("../logo-red.png")} />
        <Formik 
        initialValues={{email: "",password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema} >
            {({handleChange, handleSubmit, setFieldTouched, errors, touched }) => (
                <>
                <AppFormField iconName="user" 
                autoCaptilize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Username" />

                <AppFormField iconName="lock"
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                autoCaptilize="none"
                autoCorrect={false}/>
                
                <AppButton title="Login" onPress={handleSubmit}/>
                </>
            )
            }
        </Formik>  
      
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        marginTop: 80,
        marginBottom: 30,
        alignSelf: "center",

    }
})