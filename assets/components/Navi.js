import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Link= () => {
    const navigation= useNavigation();
    return(
        <Button title='Click' onPress={()=> navigation.navigate("TweetDetails",{id: "11"})} />
    )}
const Tweets= ({navigation}) => (
    <View>
        <Button title='View Details' onPress={()=> navigation.navigate("TweetDetails",{id: "21"})} />
        <Text>Tweets</Text>
    </View>
)
const TweetDetails= ({route}) => {
    const route1= useRoute()
    return (
    <View>
        <Text>TweetDetails {route.params.id}</Text>
    </View>
)}
const Stack = createNativeStackNavigator();
const StackNavigator= () => (
    <Stack.Navigator initialRouteName="Tweets" screenOptions={{
        headerStyle: {backgroundColor: "tomato"} ,
        headerTintColor: "white",
    }} >
        <Stack.Screen name='Tweets' component={Tweets} options={{
            title: "My Tweets",
            headerStyle: {backgroundColor: "purple"} ,}} />
        <Stack.Screen name='TweetDetails' component={TweetDetails} options={({route})=> ({title: route.params.id})} />
    </Stack.Navigator>
)

const Accounts= () => (
    <View>
        <Text>Accounts</Text>
    </View>
)
const Tab= createBottomTabNavigator();
const TabNavigator= () => (
    <Tab.Navigator 
    screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "lightgray",
        tabBarInactiveTintColor: "black",
        headerShown: false,
    }}
    >
        <Tab.Screen name='Feed' component={StackNavigator} 
        options={{tabBarIcon: ({color,size}) => (<Icon name= "home" size={size} color={color} />)
        }} 
        />
        <Tab.Screen name='Accounts' component={Accounts} />
    </Tab.Navigator>
)

export default function Navi() {
  return (
    <NavigationContainer>
        <TabNavigator/>
        <Link/>
    </NavigationContainer>
  )
}