import React, { useEffect, useState } from "react";
import { PermissionsAndroid, View, } from "react-native";
import * as ImagePicker from 'react-native-image-picker'
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppInput from "./assets/components/AppInput";
import AppPicker from "./assets/components/AppPicker";
import BtnSwitch from "./assets/components/BtnSwitch";
import Navi from "./assets/components/Navi";
import dataLists from "./assets/config/data"
import AppNavigation from "./assets/navigation/AppNavigation";
import navigationTheme from "./assets/navigation/navigationTheme";
import AccountScreen from "./assets/screens/AccountScreen";
import ImageInput from "./assets/screens/ImageInput";
import ImageInputList from "./assets/screens/ImageInputList";
import ListingEditScreen from "./assets/screens/ListingEditScreen";
import LoginScreen from "./assets/screens/LoginScreen";
import ShoppingCart from "./assets/screens/ShoppingCart";
import SignUpScreen from "./assets/screens/SignUpScreen";
import HomeAppNavigator from "./assets/navigation/HomeAppNavigator";
import OfflineNotice from "./assets/components/OfflineNotice";

export default function App() {
  // const checkNet= useNetInfo();
  // console.log(checkNet);
  // const cache= async () => {
  //   try {
  //     await AsyncStorage.setItem('title', JSON.stringify({id: 10}))
  //     const get= await AsyncStorage.getItem('title')
  //     const data= JSON.parse(get)
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error) 
  //   }
  // }
  // cache();
  return (
    <>
    <OfflineNotice/>
    <NavigationContainer theme={navigationTheme} >
      <HomeAppNavigator/>
    </NavigationContainer>
    </>
  );
}
