import { useState, useEffect } from 'react'
import RNLocation from 'react-native-location'

export default useLocation= () => {
    const [location,setLocation]= useState();
    const getLocation= async () => {
        try {
            const granted= await RNLocation.requestPermission({ios: "whenInUse",
            android: {
              detail: "coarse"
            }});
            if(!granted) return
            const loc = await RNLocation.getLatestLocation()
            setLocation(loc)
        } catch (error) {
            console.log(error)   
        }
    }
    useEffect(()=> {getLocation()},[]);
    return location;
}