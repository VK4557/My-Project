import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import colors from "../config/colors"
import ListItem from '../components/ListItem'
import ListIcon from '../components/ListIcon'

const menuItems= [
    {
        id: 1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backColor: colors.primary,
        }
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backColor: colors.secondary,
        }
    },
]

export default function AccountScreen() {
  return (
    <View style={styles.itemContainer}>
        <ListItem title="Vishal Nirania" 
            subTitle="vishal4547@gmail.com" 
            image={require("../jacket.jpg")} 
        />
        <View style={styles.items}>
        <FlatList
            data={menuItems} 
            keyExtractor={menuItems => menuItems.id.toString() }
            renderItem={({item}) => 
            <ListItem title={item.title} 
            iconComponent={<ListIcon name={item.icon.name} backColor={item.icon.backColor} />} />
            }
        />
        </View>
        <ListItem title="Log Out" 
            iconComponent={<ListIcon name="logout" backColor="#ffe66d"/>} />
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
    },
    items: {
        marginVertical: 30,
    },
})