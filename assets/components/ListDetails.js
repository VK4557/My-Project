import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import ListItem from './ListItem'

const ListDetails = ({route}) => {
         const listing= route.params;
         return (
          <View style={styles.listContain}>
            <Image style={styles.image} source={{uri: listing.avatar}}/>
            <View style={styles.text} >
                <Text style={styles.title}>{listing.first_name}</Text>
                <Text style={styles.subTitle}>${listing.id}</Text>
            </View>
            <View style={styles.user}>
                <ListItem 
                image={require('../cat.jpg')}
                title="Vishal Nirania"
                subTitle="10 Listings" />
                </View>
          </View>
        )
      
}

export default ListDetails

const styles = StyleSheet.create({
    listContain: {
        backgroundColor: colors.light,
        flex: 1,
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
    },
    subTitle:{
        fontWeight: "800",
        color: colors.secondary,
        fontSize: 15,
    },
    text: {
        padding: 12,
    },
    user: {
        marginTop: 30,
    }

})