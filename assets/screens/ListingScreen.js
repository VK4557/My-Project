import { Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react-native'
import AppButton from '../components/AppButton'
import Card from '../components/Card'
import dataApi from '../api/listings'


const list= [
    {
        id: 1,
        title: "Red Jacked for Sale",
        subTitle: 100,
        image: require("../jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in Great Condition",
        subTitle: 500,
        image: require("../couch.jpg")
    },
]

export default function ListingScreen({navigation}) {
  const [apiList,getApiList]=useState([]);
  const [error,setError]=useState();
  const [loader,setLoader]=useState();
  
  useEffect(() => {
    loadList();
  },[])
  
  const loadList= async () => {
    setLoader(true)
    const response= await dataApi.getData();
    setLoader(false)
    if(!response.ok) return setError(true)
    setError(false)
    getApiList(response.data.data)
    console.log(response.data.data);
  }
  return (
    <>
    {error && <><Text>Find an Error....</Text><AppButton title='Retry' onPress={loadList}/></>}
    {loader && <Lottie source={require('../animations/loader.json')} autoPlay loop  />}
    <FlatList
    data={apiList} 
    keyExtractor={apiList => apiList.id} 
    renderItem={({item})=>
        <Card title={item.first_name} subTitle={"$ "+item.id} 
        image={item.avatar}
        onPress={()=> navigation.navigate("ListDetails",item)} />}
    />
    </>
  )
}