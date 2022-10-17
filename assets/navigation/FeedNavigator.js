import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListDetails from "../components/ListDetails";

const Stack= createStackNavigator();
export default FeedNavigator= () => (
    <Stack.Navigator screenOptions={{presentation:"modal"}} >
        <Stack.Screen name="Listings" component={ListingScreen}/>
        <Stack.Screen name="ListDetails" component={ListDetails}/>
    </Stack.Navigator>
)