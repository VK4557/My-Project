import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NavigateBtn from "./NavigateBtn";
import routes from "./routes";

const Tab= createBottomTabNavigator();
export default HomeAppNavigator= () => (
    <Tab.Navigator screenOptions={{tabBarStyle:{paddingBottom: 5}}} >
        <Tab.Screen name="Feed" component={FeedNavigator} 
        options={{headerShown: false, tabBarIcon:({size,color})=> (<Icon name="home" size={size} color={color} />)}}  
        />
        <Tab.Screen name="EditList" component={ListingEditScreen}
        options={({navigation})=> ({tabBarButton: ()=> (<NavigateBtn onPress={()=> navigation.navigate(routes.LOCATION_EDIT) }/>)})}
        />
        <Tab.Screen name="Account" component={AccountScreen} 
        options={{tabBarIcon:({size,color})=> (<Icon name="account" size={size} color={color} />)}}
        />
    </Tab.Navigator>
)