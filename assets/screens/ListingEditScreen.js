import { View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import dataApi from '../api/listings'

import AppPicker from '../components/AppPicker'
import dataLists from '../config/data'
import AppButton from '../components/AppButton'
import AppFormField from '../components/AppFormField'
import FormAppPicker from '../components/FormAppPicker'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'

const validationSchema= Yup.object().shape({
    title: Yup.string().required().min(3).label("Title"),
    price: Yup.string().required().label("Price"),
    categories: Yup.object().required().label("Categories"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "At Least one image is selected!"),
});
export default function ListingEditScreen() {
    const location= useLocation();
    const [uploadVisible,setUploadVisible]= useState(false);
    const [progressBar,setProgressBar]= useState(0);

    const handleApiSubmit= async (listing, {resetForm}) => {
        setProgressBar(0)
        setUploadVisible(true)
        const response= await dataApi.addData(listing,
            (progress)=> setProgressBar(progress)    
        );

        // console.log(response)
        if(!response.ok){
            setUploadVisible(false)
            return alert("Could not sent Data!");
        } 
        resetForm()
    }
    
  return (
      <>
      <UploadScreen onDone={()=> setUploadVisible(false) } progress={progressBar} visible={uploadVisible} />  
      <Formik
        initialValues={{title:"", price:"", categories:null, description:"", images:[] }}
        onSubmit={handleApiSubmit}
        validationSchema={validationSchema} 
        >
            {({handleSubmit}) => (
                <View style={{padding:10,}}>
                    <FormAppPicker name= "images" />
                    <AppFormField placeholder="Title" name="title" />
                    <AppFormField placeholder="Price" name="price" keyboardType="numeric" width={120} />
                    <AppPicker placeholder="Categories" name="categories" lists={dataLists}/>
                    <AppFormField placeholder="Description" name="description" multiline />
                    <AppButton title="Post" onPress={handleSubmit} />
                </View>
            )}
      </Formik>
      </>
  )
}