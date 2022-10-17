import { View, Text } from 'react-native'
import React from 'react'

import AppButton from '../components/AppButton'
import AppFormField from '../components/AppFormField'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema= Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})
export default function SignUpScreen() {
  return (
    <Formik
    initialValues={{name:"", email:"", password: ""}}
    onSubmit={(values)=>console.log(values)}
    validationSchema={validationSchema}
    >
        {({handleSubmit})=> (
            <View style={{padding:10,}}>
            <AppFormField 
                iconName="user"
                name="name" 
                placeholder="Name" />
            <AppFormField 
                iconName="mail-forward"
                name="email" 
                autoCaptilize="none"
                autoCorrect={false}
                keyboardType="email-address" 
                placeholder="Email" />
            <AppFormField 
                iconName="lock"
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                autoCaptilize="none"
                autoCorrect={false}
            />
            <AppButton title="Registor" onPress={handleSubmit} />
            </View>
        )
        }
    </Formik>
  )
}